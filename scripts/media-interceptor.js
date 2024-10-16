
class MediaInterceptor {
    constructor(fileManager, webSocketHandler, m3u8parser) {
        this.m3u8Regex = /\.m3u8(\?.*|#.*)?$/i;
        this.mediaExtensions = ['.mp3', '.mp4', '.avi', '.mov', '.webm', '.ogg'];
        this.mediaTypes = ['audio', 'video'];
        this.fileManager = fileManager;
        this.webSocketHandler = webSocketHandler;
        this.interceptedUrls = new Set();
        this.m3u8parser = m3u8parser 
        this.count = 0
        this.minFileSize = 1024 * 1024;
        this.currentTabId = null;
        this.listenersActive = false;
    }

    startInterception() {      
      this.addListeners();     
      
      chrome.tabs.onActivated.addListener(this.handleTabChange.bind(this));
    }

    addListeners() {
        if (!this.listenersActive) {
            chrome.webRequest.onBeforeRequest.addListener(
                this.interceptRequest.bind(this),
                { urls: ["<all_urls>"] },
                ["requestBody"]
            );

            chrome.webRequest.onHeadersReceived.addListener(
                this.checkResponse.bind(this),
                { urls: ["<all_urls>"] },
                ["responseHeaders"]
            );

            this.listenersActive = true;
        }
    }

    removeListeners() {
        if (this.listenersActive) {
            chrome.webRequest.onBeforeRequest.removeListener(this.interceptRequest);
            chrome.webRequest.onHeadersReceived.removeListener(this.checkResponse);
            this.listenersActive = false;
        }
    }

    async handleTabChange(activeInfo) {
        const newTabId = activeInfo.tabId;
        if (this.currentTabId !== newTabId) {
            this.currentTabId = newTabId;
            
            // Check if the new tab is one we should be active on
            const tab = await chrome.tabs.get(newTabId);
            if (this.shouldInterceptOnTab(tab)) {
                this.addListeners();
            } else {
                this.removeListeners();
            }
        }
    }

    shouldInterceptOnTab(tab) {
        return !tab.url.startsWith('chrome://');
    }

    
    async checkResponse(details) { 

      if (details.tabId !== this.currentTabId) return;

      try {
      const contentTypeHeader = details.responseHeaders.find(
          header => header.name.toLowerCase() === 'content-type'
          
      );
      const contentLengthHeader = details.responseHeaders.find(
          header => header.name.toLowerCase() === 'content-length'
      );

      if (contentTypeHeader && this.mediaTypes.some(type => contentTypeHeader.value.includes(type))) {
        const fileSize = contentLengthHeader ? parseInt(contentLengthHeader.value, 10) : 0;

        if (fileSize >= this.minFileSize || fileSize === 0) {
            await this.fileManager.storeFileData(await this.extractFileData(details));
        } 
      }
      else if (this.m3u8Regex.test(details.url) && !this.interceptedUrls.has(details.url)) {
        this.interceptedUrls.add(details.url);
        const m3u8Results = await this.parseM3U8(details.url);
        
        if (m3u8Results.type === 'media'){
          let file = m3u8Results.variants[0]
          await this.fileManager.storeM3u8FileData(await this.extractM3u8FileData(file.uri, file.resolution, file.duration));              
         
        }else if(m3u8Results.type === 'master'){
          for(let variant in m3u8Results.variants){
            await this.fileManager.storeM3u8FileData(await this.extractM3u8FileData(variant.uri, variant.resolution, variant.duration));              
          }
                      
      }

    }}
    catch(error){
      console.log(error)
    }
  }
    async interceptRequest(details) {
        if (details.method === "GET" && this.m3u8Regex.test(details.url) && !this.interceptedUrls.has(details.url)) {
            this.interceptedUrls.add(details.url);
            const m3u8Results = await this.parseM3U8(details.url);
            
            if (m3u8Results.type === 'media'){
              let file = m3u8Results.variants[0]
              await this.fileManager.storeM3u8FileData(await this.extractM3u8FileData(file.uri, file.resolution, file.duration));              
             
            }else if(m3u8Results.type === 'master'){
              for(let variant in m3u8Results.variants){
                await this.fileManager.storeM3u8FileData(await this.extractM3u8FileData(variant.uri, variant.resolution, variant.duration));              
              }
                          
            }

        } else if (details.type === 'media' && this.mediaExtensions.some(ext => details.url.toLowerCase().endsWith(ext))&& !this.interceptedUrls.has(details.url)) {
            this.interceptedUrls.add(details.url);
            await this.fileManager.storeFileData(await this.extractFileData(details));
        }
    }

    async parseM3U8(url) {
        const parser = this.m3u8parser;
        const m3u8Content = await parser.fetchM3U8File(url);
        return await parser.parse(m3u8Content, url);
    }

    getFileExtension(link){  
      const object_url = new URL(link)
      const pathname = object_url.pathname
      let undecoded_filename = pathname.split('/').pop()
      let filename = decodeURIComponent(undecoded_filename)
      let extension = filename.split('.').pop()
      extension = extension.trim() === "" ? "" : `.${extension}`;
      return extension
    }

    async extractFileData(details) {
        const link = details.url;
        const extension = this.getFileExtension(link)
        const filename = await this.returnFineFilename(extension);
        const thumbnail = await this.getThumbnailUrl();
        const favicon = await this.getSiteFavicon();
        const cookies = await this.getMediaCookies(link);
        const fileSize = await this.fetchFileSize(link);
        const fileSizeWithUnits = this.fileManager.returnFileSizeWithUnits(fileSize);

        return { link, name: filename, size: fileSizeWithUnits, type: extension, favicon, thumbnail, cookies };
    }
    async extractM3u8FileData(link, resolution, duration) {
      let size = resolution ? resolution : 'MP4' 
      
      const extension = this.getFileExtension(link)
      const filename = await this.returnFineFilename(extension);
      const thumbnail = await this.getThumbnailUrl();
      const favicon = await this.getSiteFavicon();
      const cookies = await this.getMediaCookies(link);
      const domain = link
      

      return { link, name: filename, size, resolution ,type: extension, duration , favicon, thumbnail, cookies, domain };
  }

    async fetchFileSize(url) {
        try {
            const response = await fetch(url, { method: 'HEAD' });
            return response.headers.get('Content-Length');
        } catch (error) {
            console.log('Error fetching file size:', error);
        }
        return 0;
    }

    async  fetchDefaultFavicon(url) {
        try {
          const faviconPath = new URL('/favicon.ico', url).href;
          const response = await fetch(faviconPath);
          if (response.ok) {
            return faviconPath;
          }
        } catch (error) {
          console.log('Error fetching default favicon:', error);
        }
        return null;
      }
  
      async returnFineFilename(extension){
  
          return new Promise((resolve)=>{
            chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
              const activeTab = tabs[0]
  
              if (activeTab?.url.startsWith('chrome://')) {
                console.log("Cannot execute script on chrome:// URLs");
                resolve();
                return;
              }
  
              const [tab] = await chrome.scripting.executeScript({
                target : {tabId: activeTab?.id},
                func:()=>{
                  let title = document.querySelector("title")?.innerHTML || document.querySelector("meta[property='og:title']")?.content || "untitled"
  
                  title = title.replace(/[|%/:*?"<>]/g, '')
  
                  return title
                }
              })
              resolve(`${tab?.result}${extension}`)
            })
          })
      
        
      }
  
      async getSiteFavicon(){
        return new Promise((resolve)=>{
          chrome.tabs.query({active: true, currentWindow: true}, async (tabs)=>{
            const activeTab = tabs[0]
  
            if (activeTab?.url.startsWith('chrome://')) {
              console.log("Cannot execute script on chrome:// URLs");
              resolve();
              return;
            }
  
            const [tab] = await chrome.scripting.executeScript({
              target: {tabId: activeTab?.id},
              func:()=>{
                
                let icons = Array.from(document.querySelectorAll("link[rel='icon'], link[rel='shortcut icon']"))
                let faviconUrl = null;
  
                for(const icon of icons)
                  if(icon.href){
                    
                    faviconUrl = new URL(icon.href, window.location.href).href
                    break;
                  }
  
                return faviconUrl
              }
            })
  
            let faviconUrl = tab?.result;
  
            
            if (!faviconUrl && activeTab?.url) {
              faviconUrl = await this.fetchDefaultFavicon(activeTab.url);
            }
  
            resolve(faviconUrl)
          })
        })
      }
      async getThumbnailUrl(){
  
        return new Promise((resolve)=>{
          chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
            const activeTab = tabs[0]
  
            if (activeTab?.url.startsWith('chrome://')) {
              console.log("Cannot execute script on chrome:// URLs");
              resolve();
              return;
            }
  
            const [tab] = await chrome.scripting.executeScript({
  
              target : {tabId: activeTab?.id},
              func:()=>{
                    const selectors = [
                      "meta[property='og:image:secure_url']",
                      "meta[property='og:image']",
                      "link[rel='image_src']",
                      "#poster img",
                      "meta[property='twitter:image']",
                      "video[poster]",
                  ];
  
                  for (const sel of selectors) {
                      const el = document.querySelector(sel);
                      if (el) {
                        let url = el.getAttribute("content") || el.getAttribute("href") || el.getAttribute("poster");
                        
                        if (el.tagName.toLowerCase() === 'img') {
                          url = el.getAttribute("src");
                        }

                        if (url) {                        
                          return new URL(url, window.location.href).href;
                        }
                      }
                  }
              return '/images/no-thumbnail.png';
              }
            })
            resolve(tab?.result)
          })
        })
    
      
    }
    
  
    getMediaCookies(url) {
      return new Promise((resolve, reject) => {
          chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
              const activeTab = tabs[0];
  
              if (!activeTab || activeTab.url.startsWith('chrome://')) {
                  console.log("Cannot execute script on chrome:// URLs");
                  return resolve(null);
              }
  
              chrome.cookies.getAll({ url: url }, (cookies) => {
                  resolve(cookies);
              });
          });
      });
  }
}

export default MediaInterceptor;

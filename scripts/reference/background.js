
import BlackjuiceM3U8Parser from '../blackjuice-m8u3.js';


class BlackjuiceMediaInterceptor {    
    constructor() {
        this.isDownloaderActive = false;
        this.m3u8Regex = /\.m3u8(\?.*|#.*)?$/i;
        this.videoThumbnailMap = {};
        this.interceptedUrls = new Set()
        this.allMediaFiles = [];
        this.mediaTypes = ['audio', 'video'];
        this.mediaExtensions = ['.mp3', '.mp4', '.avi', '.mov', '.webm', '.ogg'];
    }

    takeOverBrowserDownloads(){
      chrome.downloads.onCreated.addListener((downloadItem) => {
        const url = downloadItem.url;      
        // Skip blob URLs
        if (url.startsWith("blob:")) {
          return;
        }else{
          let f_name = new URL(downloadItem.url)
          let path_name = f_name.pathname.split('/').pop()
          let new_filename = decodeURIComponent(path_name)
          this.sendDataToDownloader({count : 1,edit: false, files: [{link : url, name : new_filename}]})
          
        }

        chrome.downloads.cancel(downloadItem.id);

      })
    }


    startApp(){
        chrome.action.setIcon({
            path: this.isDownloaderActive ? "/images/xe-128.png" : "/images/w-xe-128.png"
        });
        if (this.isDownloaderActive) {
            this.setBadgedefaultText()
            this.startIntersepting() 
            this.takeOverBrowserDownloads() 
            
        }
    }
    async setBadgedefaultText(){
      const stored_files = await this.getStoredFiles()
      chrome.action.setBadgeText({ text: stored_files.length > 0 ? stored_files.length.toString() : "" });
    }
  
    startContextMenus(){  
      chrome.runtime.onInstalled.addListener(()=>{
        chrome.contextMenus.create({
            id: "filesContextMenus",
            title : "Download with Black juice",
            contexts : ["image", "audio", "video"]
        })
      })

    
    
    
    
    chrome.contextMenus.onClicked.addListener((data, tab)=>{
        if(data.menuItemId === 'filesContextMenus'){
          let f_name = new URL(data.srcUrl)
          let path_name = f_name.pathname.split('/').pop()
          let new_filename = decodeURIComponent(path_name)
          this.sendDataToDownloader({count : 1,edit: true, files: [{link : data.srcUrl, name : new_filename}]})
        }
    
      })
  
    }

    clearVideoList() {
        chrome.storage.local.set({ updateVideoList: [] }, () => {
            chrome.action.setBadgeText({ text: "" });
        });
    }
    updateBadge(count){
        chrome.action.setBadgeText({ text: count > 0 ? count.toString() : "" });
    }
  
    listenOnMessages(){
      chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
        if(message.action === "clearVideoList"){
          this.clearVideoList()
        }else if(message.action === "initiateDownload"){
          this.sendDataToDownloader(message.data)
        }
        else if(message.action === "deleteIndividualFile"){
          this.deleteFileFromStorage(message.ids)
        }
      })
    }
  
    sendDataToDownloader(file){  
    
      var socket = new WebSocket("ws://127.0.0.1:65432");
       
        socket.onopen = (event) =>{
          const json_data = JSON.stringify(file)
          socket.send(json_data);
          console.log("Sent")
        };
        socket.onerror =(error) =>{ console.log("Socket error:", error) };
        socket.onclose = (event)=>{ console.log("Connection closed suddenly") }
    }
  
    checkDownloaderActive(){
      let new_socket = new WebSocket('ws://127.0.0.1:65432');
  
  
      new_socket.onopen = (event)=>{
        console.log("App is open")
        this.isDownloaderActive = true;

        chrome.storage.local.set({isxengineOpened : true})
        this.startApp()
      }
      new_socket.onerror = (error)=>{
        this.isDownloaderActive = false
        chrome.storage.local.set({isxengineOpened : false})
        this.clearVideoList()

        this.startApp()
      }
      new_socket.onclose = (event)=>{
        this.checkDownloaderActive()
      }
    }

    async deleteFileFromStorage(fileids){

      let stored_files = await this.getStoredFiles()     

      stored_files = stored_files.filter((file)=> !fileids.includes(file.link))

      this.updateStoredFiles(stored_files)


    }
  
    returnFileSizeWithUnits(filesize){
  
      let size = Number(filesize);    
    
      if (isNaN(size)) {
        return '---';
      }
      if (size >= 1024 ** 4) {
        return `${(size / (1024 ** 4)).toFixed(2)} TB`;
      } else if (size >= 1024 ** 3) {
        return `${(size / (1024 ** 3)).toFixed(2)} GB`;
      } else if (size >= 1024 ** 2) {
        return `${(size / (1024 ** 2)).toFixed(2)} MB`;
      } else if (size >= 1024) {
        return `${(size / 1024).toFixed(2)} KB`;
      } else {
        return `${size} bytes`;
      }
    }
  
    startIntersepting() {
        // Listen for requests being sent

        if (this.isDownloaderActive){
            chrome.webRequest.onBeforeRequest.addListener(
                this.interceptRequest.bind(this),
                { urls: ["<all_urls>"] },
                ["requestBody"]
            );    
           
        }
    }

    

    async getStoredFiles() {
        return new Promise(resolve => {
            chrome.storage.local.get({ updateVideoList: [] }, result => {
                resolve(result.updateVideoList);
            });
        });
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
                let title = document.querySelector("meta[property='og:title']")?.content || document.querySelector("title")?.innerHTML || "untitled"

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
                    "meta[property='twitter:image']",
                    "video[poster]"
                ];

                for (const sel of selectors) {
                    const el = document.querySelector(sel);
                    if (el) {
                      let url = el.getAttribute("content") || el.getAttribute("href") || el.getAttribute("poster");

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



    async storeFileData(details){
      
        const link = details.url

        const object_url = new URL(link)

        const pathname = object_url.pathname
        let undecoded_filename = pathname.split('/').pop()

        let filename = decodeURIComponent(undecoded_filename)

        let extension = filename.split('.').pop()

        extension = extension.trim() === "" ? "" : `.${extension}`;

        filename = await this.returnFineFilename(extension)

        let thumbnail = await this.getThumbnailUrl()

        let favicon = await this.getSiteFavicon()
        
        let cookies = await this.getMediaCookies(link)
        
        
        const existingFiles = await this.getStoredFiles();

        if (existingFiles.some(file => file.link === link)) {
            return;
        }

        try{
            const response = await fetch(link, {method : 'HEAD'})

            const filesize = response.headers.get('Content-Length')

            
            let extension = filename.split('.').pop()

            extension =  extension.toUpperCase()

            if(extension === ''){
              extension = 'XE'
            }            

            const fileSizeWithUnits = this.returnFileSizeWithUnits(filesize)

            const data_to_store = {link: details.url, name: filename, size: fileSizeWithUnits, type: extension, favicon:favicon, thumbnail:thumbnail, cookies:cookies}  
            
            existingFiles.push(data_to_store)

            this.updateStoredFiles(existingFiles)

            
        }
        catch(error){
            console.log(error)
        }

        
    }
    updateStoredFiles(files){
      chrome.storage.local.set({ updateVideoList: files })
      this.updateBadge(files.length);

    }

    async loungeM3u8Parser(url) {
      const parser = new BlackjuiceM3U8Parser();
      const m3u8Content = await parser.fetchM3U8File(url)
      const result = await parser.parse(m3u8Content, url);
      
      return result
    }

    
    async interceptRequest(details) {
        
        if(details.method === "GET" && this.m3u8Regex.test(details.url) && !this.interceptedUrls.has(details.url)){
            
          this.interceptedUrls.add(details.url);  

          const m3u8results = await this.loungeM3u8Parser(details.url);

          console.log(m3u8results)
          //this.displayTotalStreamSize(segmented_urls, details.url)        
          
            
        }if(details.type === 'media' && this.mediaExtensions.some(ext => details.url.toLowerCase().endsWith(ext))){
              
          this.storeFileData(details)

        }
     
    } 
    async  displayTotalStreamSize(segmentUrls, m3u8link) {     
      try {  
        const sizes = await Promise.all(segmentUrls.map(url => this.fetchSegmentSize(url)));
        const totalSize = sizes.reduce((acc, size) => acc + size, 0);
        if(totalSize > 0.00){

          const object_url = new URL(m3u8link)

          const pathname = object_url.pathname
          let undecoded_filename = pathname?.split('/').pop()
          let filename = decodeURIComponent(undecoded_filename)
          const extension = filename?.split('.').pop()
          let existingFiles = await this.getStoredFiles()
          
          const fileSizeWithUnits = this.returnFileSizeWithUnits(totalSize)

          const data_to_store = {link: m3u8link, name: filename, size: fileSizeWithUnits, type: extension}  
          
          existingFiles.push(data_to_store)

          this.updateStoredFiles(existingFiles)
        }

      } catch (error) {
        console.log('Error fetching segment sizes:', error);
      }
    } 
  }

  const interceptor = new BlackjuiceMediaInterceptor();
  
  interceptor.checkDownloaderActive()
  
  interceptor.listenOnMessages()
  interceptor.startContextMenus()


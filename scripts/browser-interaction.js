class BrowserInteraction {
    constructor(fileManager, webSocketHandler) {
        this.fileManager = fileManager;
        this.webSocketHandler = webSocketHandler;
        this.isDownloaderActive = false;
    }

    startContextMenus() {
        chrome.runtime.onInstalled.addListener(() => {
            chrome.contextMenus.create({
                id: "filesContextMenus",
                title: "Download with VenaApp",
                contexts: ["image", "audio", "video"]
            });
        });

        chrome.contextMenus.onClicked.addListener((data, tab) => {
            if (data.menuItemId === 'filesContextMenus') {
                this.handleContextMenuClick(data.srcUrl);
            }
        });
    }

    handleContextMenuClick(url) {
        const filename = this.getFilenameFromUrl(url);
        if (this.isDownloaderActive === true){
            this.webSocketHandler.sendData({ count: 1, edit: true, files: [{ link: url, name: filename }] });
        }else{
            chrome.downloads.download({
                url: url,
                filename: url.split('/').pop()
            }, (downloadId) => {
                if (chrome.runtime.lastError) {
                  console.error("Download failed: ", chrome.runtime.lastError);
                } else {
                  console.log("Download started, ID:", downloadId);
                }
            });
        }
    }

    getFilenameFromUrl(url) {
        const pathName = new URL(url).pathname.split('/').pop();
        return decodeURIComponent(pathName);
    }

    takeOverBrowserDownloads() {
        chrome.downloads.onCreated.addListener((downloadItem) => {
            const url = downloadItem.url;
            if (this.isDownloaderActive === true){
                if (!url.startsWith("blob:")) {
                    this.handleDownloadIntercept(url);                
                    chrome.downloads.cancel(downloadItem.id);
                }
            }
            
        });
    }

    handleDownloadIntercept(url) {
        const filename = this.getFilenameFromUrl(url);
        this.webSocketHandler.sendData({ count: 1, edit: false, files: [{ link: url, name: filename }] });
    }
}
export default BrowserInteraction;
class BrowserInteraction {
    constructor(fileManager, webSocketHandler) {
        this.fileManager = fileManager;
        this.webSocketHandler = webSocketHandler;
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
        this.webSocketHandler.sendData({ count: 1, edit: true, files: [{ link: url, name: filename }] });
    }

    getFilenameFromUrl(url) {
        const pathName = new URL(url).pathname.split('/').pop();
        return decodeURIComponent(pathName);
    }

    takeOverBrowserDownloads() {
        chrome.downloads.onCreated.addListener((downloadItem) => {
            const url = downloadItem.url;
            if (!url.startsWith("blob:")) {
                this.handleDownloadIntercept(url);
                chrome.downloads.cancel(downloadItem.id);
            }
        });
    }

    handleDownloadIntercept(url) {
        const filename = this.getFilenameFromUrl(url);
        this.webSocketHandler.sendData({ count: 1, edit: false, files: [{ link: url, name: filename }] });
    }
}
export default BrowserInteraction;
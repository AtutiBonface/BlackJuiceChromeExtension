
import FileManager from './scripts/filemanager.js';
import WebSocketHandler from './scripts/websocket-handler.js';
import MediaInterceptor from './scripts/media-interceptor.js';
import BrowserInteraction from './scripts/browser-interaction.js';
import BlackjuiceM3U8Parser from './scripts/blackjuice-m8u3.js';

class BlackjuiceApp {
    constructor() {
        this.fileManager = new FileManager();
        this.m3u8parser = new BlackjuiceM3U8Parser()
        this.webSocketHandler = new WebSocketHandler("ws://127.0.0.1:65432");
        this.mediaInterceptor = new MediaInterceptor(this.fileManager, this.webSocketHandler, this.m3u8parser);
        this.browserInteraction = new BrowserInteraction(this.fileManager, this.webSocketHandler);
        this.isDownloaderActive = false;
    }

    initialize() {
        this.checkDownloaderActive();
        this.startApp()
        this.browserInteraction.startContextMenus();
        this.listenOnMessages();
    }
    broadcastStatus(status){
        this.browserInteraction.isDownloaderActive = status
    }
    checkDownloaderActive() {
        this.webSocketHandler.openConnection(
            () => {
                this.isDownloaderActive = true;
                this.broadcastStatus(true)
            },
            (error) => {
                this.broadcastStatus(false)
                this.isDownloaderActive = false;
            },
            () => this.checkDownloaderActive()
        );
    }

    startApp() {
        chrome.action.setIcon({
            path:  "/images/xe-128.png"
        });
        
        this.mediaInterceptor.startInterception();
        this.browserInteraction.takeOverBrowserDownloads();
       
    }

    listenOnMessages() {
        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            if (message.action === "clearVideoList") {
                this.fileManager.clearVideoList();
            } else if (message.action === "initiateDownload") {
                if (this.isDownloaderActive){
                    this.webSocketHandler.sendData(message.data);
                }else{
                    sendResponse({active: false, status: 'failed to send' ,step: 'browser takes over'})
                    let files = message.data['files']
                    files.forEach(file => {
                        chrome.downloads.download({
                            url: file['link'],
                            filename: file['name']
                        }, (downloadId) => {
                            if (chrome.runtime.lastError) {
                              console.error("Download failed: ", chrome.runtime.lastError);
                            } else {
                              console.log("Download started, ID:", downloadId);
                            }
                        });                        
                    });
                }
            } else if (message.action === "deleteIndividualFile") {
                this.fileManager.deleteFileFromStorage(message.ids);
            }
        });
    }
}

const app = new BlackjuiceApp();
app.initialize();

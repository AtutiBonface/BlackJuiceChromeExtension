class FileManager {
    async getStoredFiles() {
        return new Promise(resolve => {
            chrome.storage.local.get({ updateVideoList: [] }, result => {
                resolve(result.updateVideoList);
            });
        });
    }

    async storeFileData(fileData) {
        const existingFiles = await this.getStoredFiles();
        if (existingFiles.some(file => file.link === fileData.link)) {
            return;
        }

        existingFiles.push(fileData);
        this.updateStoredFiles(existingFiles);
    }

    updateStoredFiles(files) {
        chrome.storage.local.set({ updateVideoList: files });
        this.updateBadge(files.length);
       
    }

    updateBadge(count){
        chrome.action.setBadgeText({ text: count > 0 ? count.toString() : "" });
    }

    async deleteFileFromStorage(fileIds) {
        let storedFiles = await this.getStoredFiles();
        storedFiles = storedFiles.filter(file => !fileIds.includes(file.link));
        this.updateStoredFiles(storedFiles);
    }

    clearVideoList() {
        chrome.storage.local.set({ updateVideoList: [] }, () => {
            chrome.action.setBadgeText({ text: "" });
        });
    }

    returnFileSizeWithUnits(filesize) {
        let size = Number(filesize);
        if (isNaN(size)) {
            return '---';
        }
        if (size >= 1024 ** 4) {
            return `${(size / (1024 ** 4)).toFixed(2)}TB`;
        } else if (size >= 1024 ** 3) {
            return `${(size / (1024 ** 3)).toFixed(2)}GB`;
        } else if (size >= 1024 ** 2) {
            return `${(size / (1024 ** 2)).toFixed(2)}MB`;
        } else if (size >= 1024) {
            return `${(size / 1024).toFixed(2)}KB`;
        } else {
            return `${size}bytes`;
        }
    }
}

export default FileManager

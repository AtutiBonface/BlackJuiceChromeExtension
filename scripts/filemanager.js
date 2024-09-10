class FileManager {
    async getStoredFiles() {
        return new Promise(resolve => {
            chrome.storage.local.get({ updateVideoList: [] }, result => {
                resolve(result.updateVideoList);
            });
        });
    }

    async storeM3u8FileData(fileData) {

        const {resolution ,duration, link } = fileData
        
        
        const existingFiles = await this.getStoredFiles();

        

        const fileExists = existingFiles.some(file =>
            file.link === link || file.variants && file.variants.some(variant => variant.link === link)
        )
        if (fileExists) {
            console.log('File exists')
            return;
        }
        const removeLastSegment = (url) => {
            const urlObj = new URL(url);
            const segments = urlObj.pathname.split('/');
            segments.pop();
            urlObj.pathname = segments.join('/');
            return urlObj.toString();
        };
    
        const fileDataLinkWithoutLastSegment = removeLastSegment(link);
        

        const existingFileIndex = existingFiles.findIndex(file => 
            removeLastSegment(file.link) === fileDataLinkWithoutLastSegment
        );

        if (existingFileIndex !== -1) {
            
            console.log("Found another m3u8 file with the same URL path");
            
           
            if (!existingFiles[existingFileIndex].variants) {
                existingFiles[existingFileIndex].variants = [];
            }

            
            existingFiles[existingFileIndex].variants.unshift({
                resolution,
                duration,
                link
            });

            
            existingFiles[existingFileIndex].variants.sort((a, b) => {
                const resA = a.resolution ? parseInt(a.resolution.replace('p', '')) : -1;
                const resB = b.resolution ? parseInt(b.resolution.replace('p', '')) : -1;
                return resB - resA;
            });

            // make the default link to have highest resolution
            existingFiles[existingFileIndex].link = existingFiles[existingFileIndex].variants[0].link;

            
        } else {
            // If it's a new file, add it to the list with the current resolution as the first variant
            existingFiles.unshift({
                ...fileData,
                variants: [{
                    resolution,
                    duration,
                    link
                }]
            });
        }

      
        this.updateStoredFiles(existingFiles);
    }

    async storeFileData(fileData) {
        const existingFiles = await this.getStoredFiles();
        if (existingFiles.some(file => file.link === fileData.link)) {
            return;
        }

        existingFiles.unshift(fileData);
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

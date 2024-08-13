class BlackJuiceDownloaderPopupScript{
    constructor(){
        this.fileList = this.fileList = document.getElementById('fileList');
        this.noOfSelectedItems = document.getElementById('no-of-selected-items');
        this.downloadBatch = document.querySelectorAll("#download-batch");
        this.windowBtn = document.getElementById('toggle-window-size');
        this.clearListBtn = document.getElementById('clear_list');
        this.container = document.getElementById('container');
        this.popupActionBtns = document.querySelectorAll(".toggle-disable");
        this.deleteSelectedFilesVar = document.getElementById('delete-selected-files')
        this.downloadSelectedFilesVar = document.getElementById('download-selected-files')
        this.windowNormal = true;
        this.selectedFiles = [];

        this.noMediaHtml = 

        this.initialize()
    }
    initialize() {
        this.bindEvents();
        this.loadFileList();
    }

    bindEvents() {
        this.fileList.addEventListener('change', (e) => this.handleCheckboxChange(e));
        this.fileList.addEventListener('click', (e) => this.handleIndividualDownloadClick(e));
        this.windowBtn.addEventListener('click', () => this.toggleWindowSize());
        this.clearListBtn.addEventListener('click', () => this.clearVideoList());
        this.deleteSelectedFilesVar.addEventListener('click', ()=> this.deleteSelectedFiles())
    }

    createFileItem(file) {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.innerHTML = `
            <div class="file-icon">
                <i class="fas fa-file-video"></i>
            </div>
            <div class="file-info">
                <div class="file-name">${file.name}</div>
                <div class="file-size">${file.size}</div>
            </div>
            <div class="checkbox-wrapper">
                <input type="checkbox" id="select-${file.link}" class="custom-checkbox" data-id="${file.link}">
                <label for="select-${file.link}" class="select-file-btn">
                    <img src="/images/checked_disabled.png" alt="" class="checkbox-image">
                </label>
            </div>
            <div class="download-btn-container">
                <button class="download-btn">
                    <img src="/images/icons8-download-96.png" alt="">
                </button>
            </div>
        `;
        return fileItem;
    }

    renderFileList(files) {
        if(files.length > 0){
            this.noOfSelectedItems.textContent = `Selected (0)`;
            this.fileList.innerHTML = '';
            files.forEach(file => {
                const fileItem = this.createFileItem(file);
                this.fileList.appendChild(fileItem);
            });
            this.popupActionBtns.forEach((button)=>{
                button.disabled = false
            })

            this.clearListBtn.disabled = false
            
        }
    }

    deleteSelectedFiles() {
        // Remove selected files from the UI
        let fileIDs = []
        this.fileList.querySelectorAll('.file-item').forEach(fileItem => {
            const checkbox = fileItem.querySelector('.custom-checkbox');
            const url = fileItem.querySelector('.custom-checkbox').getAttribute('data-id');
            if (checkbox.checked) {
                fileIDs.push(url)
                fileItem.remove();
            }
        });  
       
        this.selectedFiles = [];    
        
        
        chrome.runtime.sendMessage({ action: 'deleteIndividualFile', ids : fileIDs })
        this.updateDownloadButton();        

        //then delete the file with url from chrome local storage + url       
    }
    downloadSelectedFiles() {

       
        
        this.fileList.querySelectorAll('.file-item').forEach(fileItem => {
            const checkbox = fileItem.querySelector('.custom-checkbox');
            const url = fileItem.querySelector('.custom-checkbox').getAttribute('data-id');
            if (checkbox.checked) {
               
               
            }
        }); 
        
        
     
        
    }
    

    updateDownloadButton() {
        const count = this.selectedFiles.length;
        this.noOfSelectedItems.textContent = `Selected (${count})`;
        this.noOfSelectedItems.disabled = count === 0;
        this.downloadBatch.forEach(badge => {
            badge.classList = count === 0 ? 'badge none' : 'badge';
            badge.innerHTML = count;
        });
    }

    handleCheckboxChange(e) {
        if (e.target.classList.contains('custom-checkbox')) {
            const id = e.target.getAttribute('data-id');
            const label = e.target.nextElementSibling;
            const image = label.querySelector('.checkbox-image');
            const fileItem = e.target.closest('.file-item');

            if (e.target.checked) {
                this.selectedFiles.push(id);
                image.src = '/images/checked_enabled.png';
                label.classList.add('selected');
                fileItem.classList.add('selected');
            } else {
                this.selectedFiles = this.selectedFiles.filter(fileId => fileId !== id);
                image.src = '/images/checked_disabled.png';
                label.classList.remove('selected');
                fileItem.classList.remove('selected');
            }
            this.updateDownloadButton();
        }

        
    }

    toggleWindowSize() {
        this.windowNormal = !this.windowNormal;
        this.windowBtn.children[0].src = this.windowNormal ? "/images/maximize.png" : "/images/minimize.png";
        this.container.style.width = this.windowNormal ? '350px' : "600px";
    }

    clearVideoList() {
        this.fileList.innerHTML = `<div class="no-media">
                <p>
                    No media available for processing in this tab. 
                    <br>
                    Please click play on the video to assist in detecting files...
                </p>
                    
            </div>`;
        this.noOfSelectedItems.textContent = ''
        chrome.runtime.sendMessage({ action: 'clearVideoList' });
        this.popupActionBtns.forEach((button)=>{
            button.disabled = true
        })

        this.clearListBtn.disabled = true

    }

    loadFileList() {
        chrome.storage.local.get({ updateVideoList: [] }, (result) => {
            if (result.updateVideoList) {
                this.renderFileList(result.updateVideoList);
            } else {
                console.log("No data");
            }
        });
    }

    handleIndividualDownloadClick(e) {
        if (e.target.closest('.download-btn')) {
            const fileItem = e.target.closest('.file-item');
            const fileName = fileItem.querySelector('.file-name').textContent;
            const filelink = fileItem.querySelector('.custom-checkbox').getAttribute('data-id');

            

            chrome.runtime.sendMessage({action: 'initiateDownload', data: {link :filelink, name: fileName}});
        }
    }

}

const fileListManager = new BlackJuiceDownloaderPopupScript()
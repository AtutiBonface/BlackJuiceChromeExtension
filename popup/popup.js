class BlackJuiceDownloaderPopupScript{
    constructor(){
        this.fileList  = document.getElementById('fileList');
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
        this.setupDropdowns()
    }

    bindEvents() {
        this.fileList.addEventListener('change', (e) => this.handleCheckboxChange(e));
        this.fileList.addEventListener('click', (e) => this.handleIndividualDownloadClick(e));
        this.windowBtn.addEventListener('click', () => this.toggleWindowSize());
        this.clearListBtn.addEventListener('click', () => this.clearVideoList());
        this.deleteSelectedFilesVar.addEventListener('click', ()=> this.deleteSelectedFiles())
        this.downloadSelectedFilesVar.addEventListener('click', ()=> this.downloadSelectedFiles())
    }

    createFileItem(file) {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.innerHTML = `
            <div class="file-icon" style="background-image:url('${file.thumbnail}');">
                <div class="favicon" style="background-image:url('${file.favicon}');"></div>                           
               
            </div>
            <div class="file-info">
                <div class="file-name">${file.name}</div>

                <div>
                    <div class="more-on-file-wrapper">
                        <div class="file-size">${this.returnFileSizeOrResolution(file)}</div>
                        <img src="/images/more-down.png">
                    </div>
                    <div class="dropdown-content" id="dropdown-${file.link}">
                        ${this.returnDropdownData(file)}
                    </div>
                </div>
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

    returnDropdownData(file){
        return `
        <p>720p</p>
        <p>${file.size}</p>
        <p>${file.name}</p>
       
        `
    }

    returnFileSizeOrResolution(file){
        return file.size
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

    setupDropdowns() {
        const maxFileListHeight = 400; 
    
        this.fileList.addEventListener('click', (e) => {
            const moreWrapper = e.target.closest('.more-on-file-wrapper');
            if (moreWrapper) {
                const fileItem = moreWrapper.closest('.file-item');
                const dropdownContent = moreWrapper.nextElementSibling;
                
                // Close all other open dropdowns
                this.fileList.querySelectorAll('.dropdown-content.active').forEach(dropdown => {
                    if (dropdown !== dropdownContent) {
                        dropdown.classList.remove('active', 'top', 'bottom');
                    }
                });
    
                
                dropdownContent.classList.toggle('active');
                
                if (dropdownContent.classList.contains('active')) {
                    const fileListRect = this.fileList.getBoundingClientRect();
                    const fileItemRect = fileItem.getBoundingClientRect();
                    const dropdownRect = dropdownContent.getBoundingClientRect();
    
                    const spaceBelow = maxFileListHeight - (fileItemRect.bottom - fileListRect.top);
                    const currentFileListHeight = this.fileList.clientHeight;
    
                    if (currentFileListHeight < maxFileListHeight && 
                        currentFileListHeight + dropdownRect.height <= maxFileListHeight) {
                        // Expand file list and open dropdown downward

                        this.fileList.style.height = `${currentFileListHeight + dropdownRect.height}px`;
                        dropdownContent.classList.add('bottom');
                        dropdownContent.classList.remove('top');
                    } else if (spaceBelow >= dropdownRect.height) {
                        // Open dropdown downward without expanding
                        dropdownContent.classList.add('bottom');
                        dropdownContent.classList.remove('top');
                    } else {
                        // Open dropdown upward
                        dropdownContent.classList.add('top');
                        dropdownContent.classList.remove('bottom');
                    }
                } else {
                    // If closing the dropdown, reset file list height
                    this.fileList.style.height = '';
                }
            }
        });
    
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.more-on-file-wrapper') && !e.target.closest('.dropdown-content')) {
                this.fileList.querySelectorAll('.dropdown-content.active').forEach(dropdown => {
                    dropdown.classList.remove('active', 'top', 'bottom');
                });
                // Reset file list height
                this.fileList.style.height = '';
            }
        });
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

       
        let filesToBeSent = []

        this.fileList.querySelectorAll('.file-item').forEach(fileItem => {
            const checkbox = fileItem.querySelector('.custom-checkbox');
            const url = fileItem.querySelector('.custom-checkbox').getAttribute('data-id');
            const fileName = fileItem.querySelector('.file-name').textContent;
            const fileSize = fileItem.querySelector('.file-size').textContent;
            if (checkbox.checked) {
                filesToBeSent.push({link :url, name: fileName, size:fileSize})         
            }
        });  
        if (filesToBeSent.length > 0 ){
            chrome.runtime.sendMessage({action: 'initiateDownload', data: {count: filesToBeSent.length,edit:true, files: filesToBeSent}});        
        }     
     
        
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

            chrome.runtime.sendMessage({action: 'initiateDownload', data: {count: 1, edit: false, files : [{link :filelink, name: fileName}]}});
        }
    }

    

}

const fileListManager = new BlackJuiceDownloaderPopupScript()
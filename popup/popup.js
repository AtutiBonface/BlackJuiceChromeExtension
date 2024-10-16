class VenaDownloaderPopupScript{
    constructor(){
        this.fileList  = document.getElementById('fileList');
        this.title = document.getElementById("title")
        this.backBtn = document.getElementById("back")
        this.noOfSelectedItems = document.getElementById('no-of-selected-items');
        this.downloadBatch = document.querySelectorAll("#download-batch");
        this.windowBtn = document.getElementById('toggle-window-size');
        this.clearListBtn = document.getElementById('clear_list');
        this.container = document.getElementById('container');
        this.popupActionBtns = document.querySelectorAll(".toggle-disable");
        this.downloadSelectedFilesVar = document.getElementById('download-selected-files')
        this.togglesettingsBtn = document.getElementById("toggle-settings")
        this.settingsPage = document.getElementById('settings-page')
        this.windowNormal = true;
        this.selectedFiles = [];
        this.cookies = {};
        this.isSettingsPageOpen = false


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
        this.downloadSelectedFilesVar.addEventListener('click', ()=> this.downloadSelectedFiles())
        this.togglesettingsBtn.addEventListener("click", ()=> this.toggleSettingsPage())
        this.backBtn.addEventListener('click', ()=> this.toggleSettingsPage())
    }

    createFileItem(file) {
        this.cookies[file.link] = file.cookies

        
        
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.innerHTML = `

            <div class="file-icon" style="background-image:url('${file.thumbnail}');">
                <div class="favicon" style="background-image:url('${file.favicon}');"></div>                           
               
            </div>
            <div class="domain" data-domain='${file.link}'></div>
            <div class="file-info">
                <div class="file-name" title='${file.name}'>${file.name}</div>

                <div>
                    <div class="more-on-file-wrapper">
                        <div class="file-size">${this.returnFileSizeOrResolution(file)}</div>
                        <img src="/images/more-down.png">
                    </div>
                    <div class="dropdown-content" id="dropdown-${file.link}">
                        <h3 class="file-name">Resolutions Available.</h3>
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
            <button class="delete-btn">&times;</button>
        `;
        return fileItem;
    }

    toggleSettingsPage(){
        this.title.textContent = !this.isSettingsPageOpen? 'VenaAddon Settings' : 'VenaAddon'   
        this.backBtn.style.display = !this.isSettingsPageOpen? 'flex' : 'none'
        this.fileList.style.display =  !this.isSettingsPageOpen? 'none' : 'block'
        this.settingsPage.style.display = !this.isSettingsPageOpen? 'block' : 'none'

        this.noOfSelectedItems.textContent = !this.isSettingsPageOpen? '' : '' 

        this.isSettingsPageOpen =! this.isSettingsPageOpen

    }

    returnDropdownData(file){
       
        let variantOptions = ''       
        if(file.variants && file.variants.length > 0){
            for(let variant in file.variants){

                if(file.variants[variant].resolution){                    

                    variantOptions += `<div class="variant-container"><div class="resolution-box" data-value="${file.variants[variant].resolution}" data-id="${file.variants[variant].link}"><span>MP4</span><p>${file.variants[variant].resolution}</p></div><Button title='Copy link' class="copy-link"><img src="/images/link.png"></Button></div>`            
                }else{
                    if(variantOptions === ''){
                        variantOptions = `<div class="variant-container"><div class="resolution-box" data-value="${file.size}" data-id="${file.link}"><p>${file.size}</p></div><Button title='Copy link' class="copy-link"><img src="/images/link.png"></Button></div>`            
                    }
                }
            }             

        }else{
            variantOptions = `<div class="variant-container"><div class="resolution-box" data-value="${file.size}" data-id="${file.link}" id="variant-${file.link}"><span>MP4</span><p>${file.size}</p></div><Button title='Copy link' class="copy-link"><img src="/images/link.png"></Button></div>`            
        }
        return `       
        ${variantOptions}       
        `
    }

    returnFileSizeOrResolution(file){
        return file.size
    }

    renderFileList(files) {
        print(files)
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

                dropdownContent.addEventListener('click', (e)=>{
                    let resolution_box = e.target.closest('.resolution-box')

                    if(resolution_box){
                        let resolution = resolution_box.getAttribute('data-value')
                        let link = resolution_box.getAttribute('data-id')

                        //console.log(resolution, link)

                        let file_size = fileItem.querySelector('.file-size')

                        let checkbox = fileItem.querySelector('.custom-checkbox')

                        checkbox.setAttribute('data-id', link)
                        file_size.innerText = resolution
                        
                        dropdownContent.classList.remove('active')

                        
                    }
                })
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

    deleteSelectedFiles(fileItem, url) {        
        // Remove selected files from the UI
        let fileIDs = []
        fileIDs.push(url)
        fileItem.remove();
        this.selectedFiles = this.selectedFiles.filter(fileId => fileId !== url);        
        chrome.runtime.sendMessage({ action: 'deleteIndividualFile', ids : fileIDs })
        this.updateDownloadButton();   
        
    }

    downloadSelectedFiles() {

       
        let filesToBeSent = []

        this.fileList.querySelectorAll('.file-item').forEach(fileItem => {
            const checkbox = fileItem.querySelector('.custom-checkbox');
            const url = fileItem.querySelector('.custom-checkbox').getAttribute('data-id');
            const fileName = fileItem.querySelector('.file-name').textContent;
            const fileSize = fileItem.querySelector('.file-size').textContent;
            const domain = fileItem.querySelector('.domain').getAttribute('data-domain'); 

            let cookie = this.cookies[domain]
           
            if (checkbox.checked) {
                filesToBeSent.push({link :url, name: fileName, size:fileSize, cookies: cookie})         
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
            const domain = fileItem.querySelector('.domain').getAttribute('data-domain'); 
            let cookie = this.cookies[domain]    
            chrome.runtime.sendMessage({action: 'initiateDownload', data: {count: 1, edit: false, files : [{link :filelink, name: fileName, cookies: cookie}]}});
        }

        else if (e.target.closest('.delete-btn')) {
            const fileItem = e.target.closest('.file-item');
            const url = fileItem.querySelector('.custom-checkbox').getAttribute('data-id');   
            this.deleteSelectedFiles(fileItem, url) 
        }
    }

    

    

}

const fileListManager = new VenaDownloaderPopupScript()
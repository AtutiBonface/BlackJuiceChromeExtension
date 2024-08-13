const fileList = document.getElementById('fileList');
const downloadSelectedBtn = document.getElementById('downloadSelected');
const download_batch = document.querySelectorAll("#download-batch")
const window_btn = document.getElementById('toggle-window-size')
const clear_list_btn = document.getElementById('clear_list')
let window_normal = true
let container = document.getElementById('container')
let selectedFiles = [];

function createFileItem(file) {
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

function renderFileList(files) {
    fileList.innerHTML = '';
    files.forEach(file => {
        const fileItem = createFileItem(file);
        fileList.appendChild(fileItem);
        
    });
}

function updateDownloadButton() {
    const count = selectedFiles.length;
    downloadSelectedBtn.textContent = `Selected (${count})`;
    downloadSelectedBtn.disabled = count === 0;
    download_batch.forEach(badge =>{
        badge.classList = count === 0 ? 'badge none': 'badge'
        badge.innerHTML = count
    })
}

fileList.addEventListener('change', (e) => {
    if (e.target.classList.contains('custom-checkbox')) {
        const id = e.target.getAttribute('data-id');
        const label = e.target.nextElementSibling;
        const image = label.querySelector('.checkbox-image');
        const fileItem = e.target.closest('.file-item'); // Get the closest .file-item container
        

        if (e.target.checked) {
            selectedFiles.push(id);
           
            image.src = '/images/checked_enabled.png'; 
            label.classList.add('selected');
            fileItem.classList.add('selected');
            
        } else {
            selectedFiles = selectedFiles.filter(fileId => fileId !== id);
            image.src = '/images/checked_disabled.png'; // Change back to the disabled image
            label.classList.remove('selected'); // Remove the class from the button
            fileItem.classList.remove('selected'); 
        }
        updateDownloadButton();
    }
});




window_btn.addEventListener('click', (e)=>{
    window_normal =! window_normal
    window_btn.children[0].src = window_normal ? "/images/maximize.png" : "/images/minimize.png"
    container.style.width = window_normal ? '350px': "500px"
    

})


function clearVideoList() {       
    fileList.innerHTML = '';    
    chrome.runtime.sendMessage({action: 'clearVideoList'});
}


chrome.storage.local.get({updateVideoList : []}, function(result) {
    if (result.updateVideoList) {

        renderFileList(result.updateVideoList);

    }else{
        console.log("No data")
    }
});


clear_list_btn.addEventListener('click', clearVideoList)



fileList.addEventListener('click', (e) => {
    if (e.target.closest('.download-btn')) {
        const fileItem = e.target.closest('.file-item');
        const fileName = fileItem.querySelector('.file-name').textContent;
        const fileId = fileItem.querySelector('.custom-checkbox').getAttribute('data-id');

        console.log(`Downloading file: ${fileName} with ID: ${fileId}`);

        
    }
});



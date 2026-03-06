// Analyze page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    initImageUpload();
    initFormSubmission();
});

function initImageUpload() {
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('room-image');
    const uploadText = document.getElementById('upload-text');
    const fileInfo = document.getElementById('file-info');
    const fileName = document.getElementById('file-name');

    if (!uploadArea || !fileInput) return;

    // Direct click on area triggers file input
    uploadArea.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON') {
            fileInput.click();
        }
    });

    // Drag and drop support
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = 'var(--text-primary)';
        uploadArea.style.background = 'rgba(46, 125, 50, 0.2)';
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.borderColor = 'var(--accent-secondary)';
        uploadArea.style.background = 'rgba(46, 125, 50, 0.05)';
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = 'var(--accent-secondary)';
        uploadArea.style.background = 'rgba(46, 125, 50, 0.05)';
        
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            fileInput.files = e.dataTransfer.files;
            handleFileSelection(e.dataTransfer.files[0]);
        }
    });

    fileInput.addEventListener('change', () => {
        if (fileInput.files[0]) {
            handleFileSelection(fileInput.files[0]);
        }
    });
}

function handleFileSelection(file) {
    const displayFileName = document.getElementById('display-file-name');
    
    if (displayFileName) {
        displayFileName.textContent = `File: ${file.name}`;
    }
    
    showPreview(file);
}

function showPreview(file) {
    const preview = document.getElementById('image-preview');
    const previewContainer = document.getElementById('preview-container');
    const uploadArea = document.getElementById('upload-area');
    const submitContainer = document.getElementById('upload-submit-container');
    
    const reader = new FileReader();
    reader.onload = (e) => {
        preview.innerHTML = `<img src="${e.target.result}" alt="Room preview" style="max-width: 100%; height: auto; border-radius: var(--border-radius-sm);">`;
        if (previewContainer) previewContainer.classList.remove('hidden');
        if (uploadArea) uploadArea.classList.add('hidden');
        if (submitContainer) submitContainer.classList.add('hidden');
    };
    reader.readAsDataURL(file);
}

function initFormSubmission() {
    const form = document.getElementById('analyze-form');
    // Loader removed per user request
    if (form) {
        form.addEventListener('submit', () => {
            // Form submission will happen normally without blocking the UI
            console.log("Form submitted. Waiting for page reload...");
        });
    }
}

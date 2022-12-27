import { fullView, closeFullView, IsEscape } from './fullscreen-pic.js';
import { addZoom, removeZoom } from './image-resize.js';
import { addEffect, removeEffect } from './add-effect.js';

const fileStorage = document.querySelector('#upload-file'),
  cancelButton = document.querySelector('#upload-cancel'),
  imgOverlay = document.querySelector('.img-upload__overlay'),
  loadButton = document.querySelector('.img-upload__control'),
  openModal = fullView(imgOverlay),
  closeModal = closeFullView(imgOverlay);


function escapeClose(e) {
  if (IsEscape(e)) {
    onCloseModal();
  }
}

function onLoadImage() {
  addZoom();
  addEffect();
  
  fileStorage.addEventListener('change', openModal);
  cancelButton.addEventListener('click', onCloseModal);
  document.addEventListener('keydown', escapeClose);
}
function onCloseModal() {
  closeModal();
  removeZoom();
  removeEffect();
  fileStorage.removeEventListener('change', openModal);
  cancelButton.removeEventListener('click', onCloseModal);
  document.removeEventListener('keydown', escapeClose);
  fileStorage.value = '';
}

loadButton.addEventListener('click', onLoadImage);

// openModal();
export { fileStorage };

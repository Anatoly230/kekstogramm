import { fullView, closeFullView, IsEscape } from './fullscreen-pic.js';
import { addZoom, removeZoom } from './image-resize.js';
import { addEffect, removeEffect } from './add-effect.js';
import { chancePath } from './image-resize.js';

const fileStorage = document.querySelector('#upload-file'),
  filePath = fileStorage.value,
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

function changeImage() {
  chancePath(this.value)
  console.log(this);
}

function onLoadImage() {
  addZoom();
  addEffect();
  fileStorage.addEventListener('change', openModal);
  fileStorage.addEventListener('change',changeImage);
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
export { fileStorage };

import { fullView, closeFullView, IsEscape } from './fullscreen-pic.js';
import { addZoom, removeZoom } from './image-resize.js';
import { addEffect, removeEffect } from './add-effect.js';
import { slider } from './slider-generator.js';
import { hashtagStorage } from './hastag.js';

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

function whatThePath(){
  openModal();
  console.dir(fileStorage.files)
}

function onLoadImage() {
  addZoom();
  addEffect();
  slider.setAttribute('disabled', true);
  fileStorage.addEventListener('change', whatThePath);
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

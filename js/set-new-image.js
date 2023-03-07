import { fullView, closeFullView, IsEscape } from './fullscreen-pic.js';
import { addZoom, removeZoom } from './image-resize.js';
import { addEffect, removeEffect } from './add-effect.js';
import { slider } from './slider-generator.js';
// import { hashtagStorage } from './hastag.js';




const fileStorage = document.querySelector('#upload-file'),
  cancelButton = document.querySelector('#upload-cancel'),
  imgOverlay = document.querySelector('.img-upload__overlay'),
  loadButton = document.querySelector('.img-upload__control'),
  imgPreview = document.querySelector('.img-upload__preview img'),
  previews = document.querySelectorAll('.effects__preview'),
  openModal = fullView(imgOverlay),
  closeModal = closeFullView(imgOverlay);


function escapeClose(e) {
  if (IsEscape(e)) {
    onCloseModal();
  }
}



// function handleFiles(files) {

//   for (let i = 0; i < files.length; i++) {

//     const img = document.createElement("img");

//     img.src = URL.createObjectURL(files[i]);

//     img.style.maxHeight = '100px';

//     img.onload = function () {

//       URL.revokeObjectURL(this.src);

//     }
//   }
// }


function imgSwap(e) {
  imgPreview.src = getImagePath(e);
}

function getImagePath(e) {
  return URL.createObjectURL(e.target.files[0])
}

function onFileLoad(e) {
  imgSwap(e)
  openModal();
}

function onLoadImage() {
  addZoom();
  addEffect();
  slider.setAttribute('disabled', true);
  fileStorage.addEventListener('change', onFileLoad);
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

openModal()
onLoadImage()
export { fileStorage };

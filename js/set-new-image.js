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

function imgSwap(e) {
  let path = getImagePath(e);
  imgPreview.src = path;
  previews.forEach(function (item) {
    item.style.backgroundImage = `url("${path}")`;
  })
  URL.revokeObjectURL(path);
  path = null;
}

function imageReset() {
  const regExp = /"(.*)"/gm;
  const defaultImagePath = regExp.exec(window.getComputedStyle(previews[0]).backgroundImage)[0];
  previews.forEach(function (item) {
    item.style.backgroundImage = ``;
  })
  imgPreview.src = defaultImagePath;
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
  imageReset()
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

import { fullView, closeFullView, IsEscape } from "./fullscreen-pic.js"

const file = document.querySelector("#upload-file");
const cancelButton = document.querySelector("#upload-cancel");
const imgOverlay = document.querySelector(".img-upload__overlay");
const loadButton = document.querySelector(".img-upload__control");
const fileStorage = document.querySelector(".img-upload__input");
const imageSmaller = document.querySelector(".scale__control--smaller");
const imageBigger = document.querySelector(".scale__control--bigger");
const imageSize = document.querySelector(".scale__control--value");
const image = document.querySelector(".img-upload__preview");

function decrease() {
  const value = imageSize.value.match(/\d*/)[0];
  if (value > 0) {
    imageSize.value = Number(value) - 25 < 0 ? 0 + "%" : `${Number(value) - 25}%`;
  }
  image.style.transform = `scale(${imageSize.value.match(/\d*/)[0] / 100})`
}

function increase() {
  const value = imageSize.value.match(/\d*/)[0];
  if (value < 100) {
    imageSize.value = Number(value) + 25 > 100 ? 100 + "%" : `${Number(value) + 25}%`;
  }
  image.style.transform = `scale(${imageSize.value.match(/\d*/)[0] / 100})`
}

imageSmaller.addEventListener("click", decrease)
imageBigger.addEventListener("click", increase)


const openModal = fullView(imgOverlay),
  closeModal = closeFullView(imgOverlay);


function escapeClose(e) {
  if (IsEscape(e)) {
    onCloseModal();
  }
}

function onLoadImage() {
  fileStorage.addEventListener("change", openModal)
  cancelButton.addEventListener("click", onCloseModal)
  document.addEventListener("keydown", escapeClose)
}
function onCloseModal() {
  closeModal()
  fileStorage.removeEventListener("change", openModal)
  cancelButton.removeEventListener("click", onCloseModal)
  document.removeEventListener("keydown", escapeClose);
}

loadButton.addEventListener("click", onLoadImage)


export { file };


const imageSmaller = document.querySelector('.scale__control--smaller');
const imageBigger = document.querySelector('.scale__control--bigger');
const imageSize = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview').children[0];

function decrease() {
  const value = imageSize.value.match(/\d*/)[0];
  if (value > 0) {
    imageSize.value = Number(value) - 25 < 25 ? 25 + '%' : `${Number(value) - 25}%`;
  }
  image.style.transform = `scale(${imageSize.value.match(/\d*/)[0] / 100})`
}

function increase() {
  const value = imageSize.value.match(/\d*/)[0];
  if (value < 150) {
    imageSize.value = Number(value) + 25 > 100 ? 100 + '%' : `${Number(value) + 25}%`;
  }
  image.style.transform = `scale(${imageSize.value.match(/\d*/)[0] / 100})`
}


function addZoom() {
  imageSize.value = '100%';
  imageSmaller.addEventListener('click', decrease)
  imageBigger.addEventListener('click', increase)
}
function removeZoom() {

  imageSmaller.removeEventListener('click', decrease)
  imageBigger.removeEventListener('click', increase)
}

function chancePath(path) {
  console.log(image);
  console.log(image.src = URL.createObjectURL(path));
  image.src = path;
}

export { addZoom, removeZoom, image, chancePath }

import { image } from './image-resize.js';
// import { nouislider } from './nouislider/nouislider.js';

const slider = document.getElementById('slider');

// nouislider.create(slider, {
//   start: [20, 80],
//   connect: true,
//   range: {
//     'min': 0,
//     'max': 100
//   }
// })

const effectsList = document.querySelector('.effects__list');

function assignClass(e) {
  image.className = `effects__preview--${e.target.value}`;
}
function reAssignClass() {
  image.className = '';
}

function addEffect() {
  effectsList.addEventListener('change', assignClass);
}

function removeEffect() {
  effectsList.removeEventListener('change', assignClass);
  reAssignClass();
}

export { addEffect, removeEffect };

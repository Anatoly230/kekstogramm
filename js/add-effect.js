import { image } from './image-resize.js';
// import { noUiSlider } from './nouislider/nouislider.js';

const slider = document.querySelector('.effect-level__slider');
console.log(slider)


noUiSlider.create(slider, {
  start: [0],
  connect: [true, false],
  range: {
    'min': 0,
    'max': 1
  },
  step: 0.1,


});

// let sliderToggle = slider.querySelector('.noUi-handle');



slider.noUiSlider.on('change', function (values) {
  console.log(slider.noUiSlider.get())
  console.log(effectsList)
})



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

import { image } from './image-resize.js';
import { slider } from './slider-generator.js';

const effectsList = document.querySelector('.effects__list');


slider.noUiSlider.on('change', function (values) {
  let styles = window.getComputedStyle(image)
  console.log(slider.noUiSlider.get())
  console.dir(styles.filter)
})


function searchNeighbor(element){
 let sibling = element.parentElement.querySelector('.effects__preview');
 return window.getComputedStyle(sibling).filter;
}


function assignClass(e) {
  image.className = `effects__preview--${e.target.value}`;
  console.log(searchNeighbor(e.target))
}
function reAssignClass() {
  image.className = '';
}

function addEffect() {
  effectsList.addEventListener('change', assignClass);
  effectsList.addEventListener('change', function(e){
    console.log(e.target)
  });
}

function removeEffect() {
  effectsList.removeEventListener('change', assignClass);
  reAssignClass();
}

export { addEffect, removeEffect };

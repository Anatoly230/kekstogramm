import { image } from './image-resize.js';
import { slider, resetSlider, slideStatus } from './slider-generator.js';

const effectsList = document.querySelector('.effects__list');
const valueStarage = document.querySelector('.effect-level__value');

function searchNeighbor(element) {
  return element.parentElement.querySelector('.effects__preview');
}


function getFilter(element) {
  return window.getComputedStyle(element).filter
}

function getFilterParameters(element) {
  let filter = getFilter(searchNeighbor(element));
  if (filter === 'none') {
    return null;
  }
  return breakToComponents(filter)
}

function breakToComponents(str) {
  if (str !== 'none') {
    const decompose = /^(\D*)\((\d*)(\w*)?/gm;
    const fined = decompose.exec(str);
    return {
      filter: fined[1],
      value: fined[2],
      measure: fined[3]
    }
  }
}

function addInnerStyle() {
  if (getFilter(image) !== 'none') {
    valueStarage.value = slider.noUiSlider.get();
    let filterValue = getFilter(image);
    let { filter, measure } = breakToComponents(filterValue);
    measure = measure || '';
    image.style.filter = `${filter}(${valueStarage.value}${measure})`;
  }
}

function removeInnerStyle() {
  image.style.filter = '';
}

function assignClass(e) {
  image.style.filter = '';
  image.className = `effects__preview--${e.target.value}`;
  slideStatus(getFilterParameters(e.target));
  slider.noUiSlider.on('set', addInnerStyle)
}

function reAssignClass() {
  image.className = '';
  removeInnerStyle();
  resetSlider(0);
}

function addEffect() {
  effectsList.addEventListener('change', assignClass);
}

function removeEffect() {
  effectsList.removeEventListener('change', assignClass);
  reAssignClass();
}




export { addEffect, removeEffect, getFilterParameters };

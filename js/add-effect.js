import { image } from './image-resize.js';
import { slider, resetSlider, changeStart } from './slider-generator.js';

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
  const decompose = /^(\D*)\((\d*)(\w*)?/gm;
  const fined = decompose.exec(str);
  return {
    filter: fined[1],
    value: fined[2],
    measure: fined[3]
  }
}

slider.noUiSlider.on('change', function (values) {
  valueStarage.value = slider.noUiSlider.get();
  let filterValue = getFilter(image);
  if (image.style.filter === '') {
    image.style.filter = filterValue;
  } else {
    let { filter, measure } = breakToComponents(filterValue);
    measure = measure || '';
    image.style.filter = `${filter}(${valueStarage.value}${measure})`;
  }
})


function slideStatus(element) {
  if (getFilterParameters(element) !== null) {
    let { value } = getFilterParameters(element);
    slider.removeAttribute('disabled');
    resetSlider(value);
  } else {
    slider.setAttribute('disabled', true)
    changeStart(0);
  }
}

function assignClass(e) {
  image.style.filter = '';
  image.className = `effects__preview--${e.target.value}`;
  slideStatus(e.target);
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

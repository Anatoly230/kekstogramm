import { image } from "./image-resize.js"

let rangeToggles = document.querySelectorAll(".effects__radio");

const effectsList = document.querySelector(".effects__list");

function assignClass(e) {
  image.className = "effects__preview--" + e.target.value;
}

function addEffect() {
  effectsList.addEventListener("change", assignClass)
}

function removeEffect() {
  effectsList.removeEventListener("change", assignClass)
}






export { addEffect, removeEffect };

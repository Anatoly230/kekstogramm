
import { addToDOM } from "./rendering.js";
import { rawPhotoData } from "./data.js";
// import { fullScreen } from "./fullscreen-pic.js";

let changeInfo = [
  {class: ".picture__img", target: "src", source: "url"},
   {class: ".picture__likes", target: "textContent", source: "likes"},
   {class: ".picture__comments", target: "textContent", source: "comments", property: "length"},
   {class: ".picture__comments", target: "dataset.id", source: "id"}
  ]

function searchPhotoId(array, id) {
  for (let item of array) {
    if (item.id === id) {
      return item.comments;
    }
  }
}

function showComments(array){

}

console.log(searchPhotoId(rawPhotoData, 2))

function fullScreenView() {
  let fullViewImage = document.querySelector(".big-picture");
  fullViewImage.classList.toggle("hidden");

  fullViewImage.querySelector("img").src = this.querySelector(".picture__img").src;
  fullViewImage.querySelector(".likes-count").textContent = this.querySelector(".picture__likes").textContent;
  fullViewImage.querySelector(".comments-count").textContent = this.querySelector(".picture__comments").textContent;
  console.log(fullViewImage)
  console.log(this)
  console.log(rawPhotoData)
}


const image = document.querySelector(".picture");


eval("console.log(rawPhotoData[0].comments[0]['avatar'])")


// image.addEventListener("click", fullScreenView)



import { addToDOM } from "./rendering.js";
import { rawPhotoData } from "./data.js";
// import { fullScreen } from "./fullscreen-pic.js";

const commentsInfo = [
  { class: ".social__picture", target: "src", source: "avatar" },
  { class: ".social__picture", target: "alt", source: "name" },
  { class: ".social__picture", target: "width", source: ["35"] },
  { class: ".social__picture", target: "height", source: ["35"] },
  { class: ".social__text", target: "textContent", source: "message" },

]

console.log(rawPhotoData[0].comments)

function searchPhotoId(array, id) {
  for (let item of array) {
    if (item.id === Number(id)) {
      return item;
    }
  }
}

function showComments(array) {

}

function fullScreenViewOPen() {
  let fullViewImage = document.querySelector(".big-picture");
  const commentTemplate = fullViewImage.querySelector(".social__comment");
  const commentHome = fullViewImage.querySelector(".social__comments");

  let photoId = this.querySelector(".picture__comments").dataset.id;
  let photoInfo = searchPhotoId(rawPhotoData, photoId)
  fullViewImage.classList.toggle("hidden");
  fullViewImage.querySelector("img").src = this.querySelector(".picture__img").src;
  fullViewImage.querySelector(".likes-count").textContent = this.querySelector(".picture__likes").textContent;
  fullViewImage.querySelector(".comments-count").textContent = this.querySelector(".picture__comments").textContent;
  fullViewImage.querySelector(".social__caption").textContent = photoInfo.description;
  fullViewImage.querySelector(".social__comments").innerHTML = "";
  fullViewImage.querySelector(".social__comment-count").classList.toggle("hidden");
addToDOM(commentHome,commentTemplate,photoInfo.comments,commentsInfo);
document.querySelector("body").classList.toggle("modal-open")
}



const images = document.querySelectorAll(".picture");

images.forEach(function (image) {
  image.addEventListener("click", fullScreenViewOPen)
})



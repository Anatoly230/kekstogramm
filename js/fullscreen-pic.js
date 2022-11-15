import { addToDOM } from "./rendering.js";
import { rawPhotoData } from "./data.js";

const fullViewImage = document.querySelector(".big-picture"),
  cancelBtn = fullViewImage.querySelector(".cancel"),
  commentsInfo = [
    { class: ".social__picture", target: "src", source: "avatar" },
    { class: ".social__picture", target: "alt", source: "name" },
    { class: ".social__picture", target: "width", source: ["35"] },
    { class: ".social__picture", target: "height", source: ["35"] },
    { class: ".social__text", target: "textContent", source: "message" },
  ],
  images = document.querySelectorAll(".picture");

function searchPhotoId(array, id) {
  for (let item of array) {
    if (item.id === Number(id)) {
      return item;
    }
  }
}

function fullScreenViewOPen() {
  const commentTemplate = fullViewImage.querySelector(".social__comment");
  const commentHome = fullViewImage.querySelector(".social__comments");

  let photoId = this.querySelector(".picture__comments").dataset.id;
  let photoInfo = searchPhotoId(rawPhotoData, photoId)

  fullViewImage.querySelector("img").src = this.querySelector(".picture__img").src;
  fullViewImage.querySelector(".likes-count").textContent = this.querySelector(".picture__likes").textContent;
  fullViewImage.querySelector(".comments-count").textContent = this.querySelector(".picture__comments").textContent;
  fullViewImage.querySelector(".social__caption").textContent = photoInfo.description;
  fullViewImage.querySelector(".social__comments").innerHTML = "";
  addToDOM(commentHome, commentTemplate, photoInfo.comments, commentsInfo);

  fullViewImage.classList.remove("hidden");
  fullViewImage.querySelector(".social__comment-count").classList.add("hidden");
  fullViewImage.querySelector(".social__comments-loader").classList.add("hidden");
  document.querySelector("body").classList.add("modal-open");
}

function closeFullView() {
  fullViewImage.classList.add("hidden");
  document.querySelector("body").classList.remove("modal-open");
}

function escapeClose(e) {
  if (e.key === "Escape") {
    closeFullView();
  }
}


images.forEach(function (image) {
  image.addEventListener("click", fullScreenViewOPen)
})

cancelBtn.addEventListener("click", closeFullView)
document.querySelector("body").addEventListener("keydown", escapeClose)

export { fullViewImage };

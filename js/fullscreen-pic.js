import { addToDOM } from "./rendering.js";
import { rawPhotoData } from "./data.js";

const fullViewImage = document.querySelector(".big-picture"),
  cancelBtn = fullViewImage.querySelector(".cancel"),
  images = document.querySelectorAll(".picture"),
  commentsInfo = [
    { class: ".social__picture", target: "src", source: "avatar" },
    { class: ".social__picture", target: "alt", source: "name" },
    { class: ".social__picture", target: "width", source: ["35"] },
    { class: ".social__picture", target: "height", source: ["35"] },
    { class: ".social__text", target: "textContent", source: "message" },
  ];

function searchPhotoId(array, id) {
  for (let item of array) {
    if (item.id === Number(id)) {
      return item;
    }
  }
}

function modalOpen() {
  fullViewImage.classList.remove("hidden");
  fullViewImage.querySelector(".social__comment-count").classList.add("hidden");
  fullViewImage.querySelector(".social__comments-loader").classList.add("hidden");
  document.querySelector("body").classList.add("modal-open");
}

function fillData(sourceObj, data) {
  fullViewImage.querySelector("img").src = sourceObj.querySelector(".picture__img").src;
  fullViewImage.querySelector(".likes-count").textContent = sourceObj.querySelector(".picture__likes").textContent;
  fullViewImage.querySelector(".comments-count").textContent = sourceObj.querySelector(".picture__comments").textContent;
  fullViewImage.querySelector(".social__caption").textContent = data.description;
}

function fillComments(data) {
  const commentTemplate = fullViewImage.querySelector(".social__comment");
  const commentHome = fullViewImage.querySelector(".social__comments");
  fullViewImage.querySelector(".social__comments").innerHTML = "";
  addToDOM(commentHome, commentTemplate, data.comments, commentsInfo);
}


function fullScreenViewOPen(e) {
  const self = this,
    photoId = this.querySelector(".picture__comments").dataset.id,
    photoInfo = searchPhotoId(rawPhotoData, photoId)
  fillData(self, photoInfo);
  fillComments(photoInfo)
  modalOpen();
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

function findParent(e, parentClass = "picture") {
  if (e.target.closest(`.${parentClass}`)) {
    let parent = e.target;
    let tubmler = parent.classList.contains(parentClass);
    let counter = 0;
    while (!tubmler) {
      parent = parent.parentElement;
      tubmler = parent.classList.contains(parentClass);
      counter++;
    }
    return parent;
  }
  return e.terget;
}


images.forEach(function (image) {
  image.addEventListener("click", fullScreenViewOPen)
  image.addEventListener("click", findParent)
})

cancelBtn.addEventListener("click", closeFullView)
document.querySelector("body").addEventListener("keydown", escapeClose)

export { fullViewImage };

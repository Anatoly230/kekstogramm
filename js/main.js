
import { addPhotos } from "./rendering.js";
import { fullScreen } from "./fullscreen-pic.js";

addPhotos(5)


function FullScreenView() {
  let fullViewImage = document.querySelector(".big-picture");
  fullViewImage.classList.toggle("hidden");

  fullViewImage.querySelector("img").src = this.querySelector(".picture__img").src;
  fullViewImage.querySelector(".likes-count").textContent = this.querySelector(".picture__likes").textContent;
  fullViewImage.querySelector(".comments-count").textContent = this.querySelector(".picture__comments").textContent;
  console.log(fullViewImage)
  console.log(this)
}

const image = document.querySelector(".picture");

image.addEventListener("click", FullScreenView)


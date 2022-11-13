import { rawPhotoData } from "./data.js"

const pictures = document.querySelector(".pictures"),
  template = document.querySelector("#picture").content.querySelector(".picture");

function addPhotos() {
  let elementStorage = document.createDocumentFragment(),
    photoObj,
    comment;

  rawPhotoData.forEach(function ({ url, likes, comments, id}) {
    photoObj = template.cloneNode(true);
    comment = comments.length;
    photoObj.querySelector(".picture__img").src = url;
    photoObj.querySelector(".picture__likes").textContent = likes;
    photoObj.querySelector(".picture__comments").textContent = comment;
    photoObj.querySelector(".picture__comments").dataset.id = id;
    elementStorage.appendChild(photoObj);
  })
  pictures.appendChild(elementStorage);
}

export {addPhotos };

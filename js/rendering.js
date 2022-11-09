import { getPhotoInfo } from "./data.js"
import { getRandomNum, getObjects } from "./utils.js"

const pictures = document.querySelector(".pictures"),
  template = document.querySelector("#picture").content.querySelector(".picture");

function addPhotos(count = 25) {
  let elementStorage = document.createDocumentFragment(),
    rawPhotoData = getObjects(getPhotoInfo, count),
    photoObj,
    comment;

  rawPhotoData.forEach(function ({ url, likes, comments }) {
    photoObj = template.cloneNode(true);
    comment = comments[getRandomNum(comments.length - 1)].message;
    photoObj.querySelector(".picture__img").src = url;
    photoObj.querySelector(".picture__likes").textContent = likes;
    photoObj.querySelector(".picture__comments").textContent = comment;
    elementStorage.appendChild(photoObj);
  })
  pictures.appendChild(elementStorage);
}

export { addPhotos };

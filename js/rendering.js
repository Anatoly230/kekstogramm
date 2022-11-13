import { rawPhotoData } from "./data.js"

const pictures = document.querySelector(".pictures"),
  template = document.querySelector("#picture").content.querySelector(".picture");

function addPhotos() {
  let elementStorage = document.createDocumentFragment(),
    photoObj,
    comment;

  rawPhotoData.forEach(function ({ url, likes, comments, id }) {
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

function addToDOM(parent, datas, arrayClassAndValues) {
  let elementStorage = document.createDocumentFragment(),
    obj;
  datas.forEach(function (data) {
    obj = template.cloneNode(true);
    arrayClassAndValues.forEach(function (item) {
      obj.querySelector(item.class)[item.target] = data[item.source]
    })
    elementStorage.appendChild(obj)
  })
  parent.appendChild(elementStorage)
}

let changeInfo = [
  {class: ".picture__img", target: "src", source: "url"},
   {class: ".picture__likes", target: "textContent", source: "likes"},
  //  {class: ".picture__comments", target: "textContent", source: "comment"},
   {class: ".picture__comments", target: "dataset.id", source: "id"}
  ]

// addToDOM(pictures, rawPhotoData, changeInfo)

export { addPhotos };

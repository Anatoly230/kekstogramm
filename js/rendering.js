import { rawPhotoData } from "./data.js"

const pictures = document.querySelector(".pictures"),
  template = document.querySelector("#picture").content.querySelector(".picture");

const changeInfo = [
  { class: ".picture__img", target: "src", source: "url" },
  { class: ".picture__likes", target: "textContent", source: "likes" },
  { class: ".picture__comments", target: "textContent", source: "comments.length" },
  { class: ".picture__comments", target: "dataset.id", source: "id" }
]


function getOut(start, path) {
  if(Array.isArray(path)){
    return path[0]
  }
  let current = start;
  path.split(".").forEach(function (item) {
    current = current[item]
  })
  return current;
}

function assignToElement(start, path, value) {
  let parse = path.split(".");
  let current = start;
  let i;
  for (i = 0; i < parse.length; i++) {
    if (i === parse.length - 1) {
      current[parse[i]] = value;
    } else {
      current = current[parse[i]];
    }
  }
}

function addToDOM(parent, sample, datas, classesAndValues) {
  let elementStorage = document.createDocumentFragment(),
    element,
    value;
  datas.forEach(function (data) {
    element = sample.cloneNode(true);
    classesAndValues.forEach(function (item) {
      value = getOut(data, item.source);
      assignToElement(element.querySelector(item.class), item.target, value);
    })
    elementStorage.appendChild(element)
  })
  parent.appendChild(elementStorage)
};

addToDOM(pictures, template, rawPhotoData, changeInfo);

export { addToDOM };


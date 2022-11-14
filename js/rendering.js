import { rawPhotoData } from "./data.js"

const pictures = document.querySelector(".pictures"),
  template = document.querySelector("#picture").content.querySelector(".picture");


function addToDOM(parent, datas, classesAndValues) {
  let elementStorage = document.createDocumentFragment(),
    obj,
    target,
    source;
  datas.forEach(function (data) {
    obj = template.cloneNode(true);
    classesAndValues.forEach(function (item) {
      target = testProperty(item.target);
      source = testProperty(item.source);
       console.log(target, source)
      obj.querySelector(item.class).eval(target) = eval(source);
    })
    // elementStorage.appendChild(obj)
  })
  // parent.appendChild(elementStorage)
};

let changeInfo = [
  { class: ".picture__img", target: { path: "src" }, source: "url" },
  { class: ".picture__likes", target: { path: "textContent" }, source: "likes" },
  { class: ".picture__comments", target: { path: "textContent" }, source: { path: "comments", property: "length" } },
  { class: ".picture__comments", target: { path: "dataset", property: "id" }, source: "id" }
]

function testProperty(obj) {
  if (typeof (obj) === "object") {
    return Object.values(obj).join(".");
  }
  return obj;
}
addToDOM(pictures, rawPhotoData, changeInfo);

export { addToDOM };

import { rawPhotoData } from './data.js';
// import { promData } from './xmlHttpRequest.js';
import { getRemoteContent } from './fetcher.js';


const pictures = document.querySelector('.pictures'),
  template = document.querySelector('#picture').content.querySelector('.picture');

const changeInfo = [
  { class: '.picture__img', target: 'src', source: 'url' },
  { class: '.picture__likes', target: 'textContent', source: 'likes' },
  { class: '.picture__comments', target: 'textContent', source: 'comments.length' },
  { class: '.picture__comments', target: 'dataset.id', source: 'id' }
]


function getOut(start, path) {
  if (Array.isArray(path)) {
    return path[0];
  }
  let current = start;
  path.split('.').forEach(function (item) {
    current = current[item]
  })
  return current;
}

function assignToElement(start, path, value) {
  let parse = path.split('.');
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


function changeDOM(parent, datas, classesAndValues) {
  datas.forEach(function (data) {
    classesAndValues.forEach(function (item) {
      value = getOut(data, item.source);
      assignToElement(parent.querySelector(item.class), item.target, value);
    })
  })
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

function getRendPhotos(data) {
  if (data) {
    addToDOM(pictures, template, data, changeInfo)
  }
}


function popUpMessage(strMessage = 'Что-то пошло не так( Ошибка загрузки изоражений') {
  const pageBody = document.querySelector('body');
  const messageBody = document.createElement('div');
  const messageWindow = document.createElement('div');
  const message = document.createElement('p');
  message.textContent = strMessage;
  messageBody.style.position = 'fixed';
  messageBody.style.zIndex = '100';
  messageBody.style.top = '0';
  messageBody.style.width = '100vw';
  messageBody.style.height = '100vh';
  messageBody.style.display = 'flex';
  messageBody.style.justifyContent = 'center';
  messageBody.style.alignItems = 'center';
  messageBody.style.backgroundColor = 'rgba(50,50,50, .9)';
  messageWindow.style.justifyContent = 'center';
  messageWindow.style.alignItems = 'center';
  messageWindow.style.color = 'black';
  messageWindow.style.backgroundColor = 'white';
  messageWindow.style.padding = '50px 20px';
  messageWindow.style.maxWidth = '350px';
  messageWindow.style.border = '1px solid black';
  messageWindow.style.borderRadius = '10px';
  messageWindow.appendChild(message);
  messageBody.appendChild(messageWindow);
  pageBody.appendChild(messageBody)

  setTimeout(function () {
    messageBody.remove();
  }, 3000)
}



// promData.then(function (data) {
//   addToDOM(pictures, template, data, changeInfo);
// })
// .catch(function(){
//   console.log(rawPhotoData);
//   addToDOM(pictures, template, rawPhotoData, changeInfo);
// })
getRemoteContent()
  .then(getRendPhotos)
  .catch(popUpMessage)

export { addToDOM, changeDOM, popUpMessage };


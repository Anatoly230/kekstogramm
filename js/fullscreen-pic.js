import { addToDOM } from './rendering.js';
import { rawPhotoData } from './data.js';

const fullViewImage = document.querySelector('.big-picture'),
  cancelBtn = fullViewImage.querySelector('.cancel'),
  images = document.querySelectorAll('.picture'),
  commentsInfo = [
    { class: '.social__picture', target: 'src', source: 'avatar' },
    { class: '.social__picture', target: 'alt', source: 'name' },
    { class: '.social__picture', target: 'width', source: ['35'] },
    { class: '.social__picture', target: 'height', source: ['35'] },
    { class: '.social__text', target: 'textContent', source: 'message' },
  ],
  pictureContainer = document.querySelector('.pictures'),
  modalOpen = fullView(fullViewImage),
  modalClose = closeFullView(fullViewImage);
let currentPicture;


function IsEscape(e) {
  return e.key === 'Escape';
}

function searchPhotoId(array, id) {
  for (let item of array) {
    if (item.id === Number(id)) {
      return item;
    }
  }
}

function fullView(goal) {
  return function () {
    goal.classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
  }
}

function closeFullView(goal) {
  return function () {
    goal.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
}


function fillData(sourceObj, data) {
  fullViewImage.querySelector('.social__comment-count').classList.add('hidden');
  fullViewImage.querySelector('.social__comments-loader').classList.add('hidden');
  fullViewImage.querySelector('img').src = sourceObj.querySelector('.picture__img').src;
  fullViewImage.querySelector('.likes-count').textContent = sourceObj.querySelector('.picture__likes').textContent;
  fullViewImage.querySelector('.comments-count').textContent = sourceObj.querySelector('.picture__comments').textContent;
  fullViewImage.querySelector('.social__caption').textContent = data.description;
}

function fillComments(data) {
  const commentTemplate = fullViewImage.querySelector('.social__comment');
  const commentHome = fullViewImage.querySelector('.social__comments');
  fullViewImage.querySelector('.social__comments').innerHTML = '';
  addToDOM(commentHome, commentTemplate, data.comments, commentsInfo);
}


function onFullScreenViewOPen(elem) {
  const photoId = elem.querySelector('.picture__comments').dataset.id,
    photoInfo = searchPhotoId(rawPhotoData, photoId)
  fillData(elem, photoInfo);
  fillComments(photoInfo)
  modalOpen();
  cancelBtn.addEventListener('click', onFullScreenViewClose);
  document.querySelector('body').addEventListener('keydown', escapeClose);
}

function onFullScreenViewClose() {
  modalClose();
  currentPicture.removeEventListener('click', onFullScreenViewOPen)
  cancelBtn.removeEventListener('click', onFullScreenViewClose);
  document.querySelector('body').removeEventListener('keydown', escapeClose)
}

function escapeClose(e) {
  if (IsEscape(e)) {
    e.preventDefault();
    onFullScreenViewClose();
  }
}

pictureContainer.addEventListener('click', function (e) {
  currentPicture = findTargetElem(e, 'picture');
  if (currentPicture !== null) {
    onFullScreenViewOPen(currentPicture)
  }
})

function findTargetElem(e, parentClass) {
  const targetElem = e.target.closest(`.${parentClass}`)
  return targetElem;
}


// images.forEach(function (image) {
//   image.addEventListener('click', onFullScreenViewOPen)
// })





export { fullView, closeFullView, IsEscape };

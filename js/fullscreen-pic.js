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
  // fullViewImage.querySelector('.social__comment-count').classList.add('hidden');
  // fullViewImage.querySelector('.social__comments-loader').classList.add('hidden');
  fullViewImage.querySelector('img').src = sourceObj.querySelector('.picture__img').src;
  fullViewImage.querySelector('.likes-count').textContent = sourceObj.querySelector('.picture__likes').textContent;
  fullViewImage.querySelector('.comments-count').textContent = sourceObj.querySelector('.picture__comments').textContent;
  // fullViewImage.querySelector('.social__caption').textContent = data.description;
  fullViewImage.querySelector('.social__comments-loader').addEventListener('click', restrictComments);

}

function fillComments(data) {
  const commentTemplate = fullViewImage.querySelector('.social__comment');
  const commentHome = fullViewImage.querySelector('.social__comments');
  fullViewImage.querySelector('.social__comments').innerHTML = '';
  addToDOM(commentHome, commentTemplate, data.comments, commentsInfo);
}

function initialCountOfComments() {
  const initialCount = 5;
  const comments = fullViewImage.querySelectorAll('.social__comment');
  refreshCommentsCount(initialCount)
  if (comments.length > initialCount) {
    for (let i = initialCount; i < comments.length; i++) {
      comments[i].classList.add('hidden');
    }
  }
}

function restrictComments() {
  let onDisplay = 0;
  const comments = fullViewImage.querySelectorAll('.social__comment');
  comments.forEach(function (item) {
    onDisplay = !item.classList.contains('hidden') ? onDisplay + 1 : onDisplay;
  })
  if (onDisplay < comments.length) {
    if (onDisplay + 5 <= comments.length) {
      for (let i = onDisplay; i < onDisplay + 5; i++) {
        comments[i].classList.remove('hidden');
        refreshCommentsCount(onDisplay + 5)
      }
    } else {
      for (let i = onDisplay; i < comments.length; i++) {
        comments[i].classList.remove('hidden');
        refreshCommentsCount(comments.length);
        // this.style.display = 'none';
      }
    }
  }

}

function refreshCommentsCount(count) {
  const commentsOf = document.querySelector('.social__comment-count')
  commentsOf.firstChild.nodeValue = `${count} из `
}

function onFullScreenViewOPen(elem) {
  const photoId = elem.querySelector('.picture__comments').dataset.id,
    photoInfo = searchPhotoId(rawPhotoData, photoId)
  fillData(elem, photoInfo);
  fillComments(photoInfo)
  initialCountOfComments();
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


export { fullView, closeFullView, IsEscape, escapeClose };

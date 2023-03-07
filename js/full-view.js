function IsEscape(e) {
  return e.key === 'Escape';
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

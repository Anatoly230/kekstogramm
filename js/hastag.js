let hashtagStorage = document.querySelector('.text__hashtags');


function keyTest(e) {
    if (e.key === 'Escape') {
        e.stopPropagation();
        e.target.value = '';
    }
}

hashtagStorage.addEventListener('keydown', keyTest);

hashtagStorage.addEventListener('blur', function (e) { console.log(e.target.value) })

export { hashtagStorage };

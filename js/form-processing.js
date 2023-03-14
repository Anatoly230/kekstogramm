import { IsEscape } from './full-view.js';
// import { escapeClose } from './fullscreen-pic.js';
const form = document.querySelector('#upload-select-image');



let defaultConfig = {
    // class of the parent element where the error/success class is added
    classTo: 'text',
    errorClass: 'text--error',
    successClass: 'text--valid',
    // class of the parent element where error text element is appended
    errorTextParent: 'text',
    // type of element to create for the error text
    errorTextTag: 'div',
    // class of the error text element
    errorTextClass: 'text-help'
};
// let defaultConfig = {
//     classTo: 'img-upload__element',
//     errorTextParent: 'img-upload__element',
//     errorTextClass: 'img-upload__error',
// };

const messages = {
    required: "Это поле обязательное",
    email: "Введите корректный адресс",
    number: "Здесь необходимо число",
    integer: "Здесь должно быть целое число",
    url: "введите корректный адресс сайта",
    tel: "Необходимо ввести корректный номер телефона",
    maxlength: "Не больше ${1} цифр",
    minlength: "Не меньше ${1} цифр",
    min: "Minimum value for this field is ${1}",
    max: "Maximum value for this field is ${1}",
    pattern: "необходимо соотвествие формату",
    equals: "The two fields do not match"
}
const pristine = new Pristine(form, defaultConfig, true),
    hashTag = form.querySelector('.text__hashtags'),
    comment = form.querySelector('.text__description');

comment.addEventListener('focus', function (e) {
    comment.addEventListener('keydown', function (e) {
        if (IsEscape(e)) {
            e.stopPropagation();
            comment.value = '';
        }
    })
})

Pristine.addMessages('ru', messages);
Pristine.setLocale('ru');

function maxCommentLength(value) {
    return value.length < 140;
}




function defineWhitSpace(value) {
    console.log(value)
    return value.indexOf(' ') === -1;
}

function defineMinLength(value) {
    return value.length > 1;
}
function defineMaxLength(value) {
    return value.length <= 50;
}

function firstSymbol(value) {
    return itterator(value, function (item) {
        return item.length === 0 || item[0] === '#';
    });
}

function itterator(value, callBack) {

    const values = value.split(' ');
    let noError;
    for (let item of values) {
        noError = callBack(item);
    }
    return noError;
}

function heshCount(value) {
    return value.split(' ').length <= 6
}
function heshMaxLength(value) {
    return itterator(value, function (item) {
        return item.length <= 20;
    })
}

function heshMinLength(value) {
    return itterator(value, function (item) {
        if (item.length === 1 && item[0] === '#') {
            return false;
        }
        return true;
    })
}

function heshSpecCharacter(value) {

    return itterator(value, function (item) {
        let part = item.substring(1);
        if (part.length < 1) {
            return true;
        }
        return /^[a-zA-Z0-9]+$/.test(part);
    })
}

pristine.addValidator(hashTag, heshCount, 'Допустимо не более 5 хештегов', true)
pristine.addValidator(hashTag, heshMaxLength, 'Длина хештега не может превышать 20 символов', true)
pristine.addValidator(hashTag, firstSymbol, 'Хештег начинается с символа "#"', true)
pristine.addValidator(hashTag, heshMinLength, 'Хештег не может состоять только из одного "#"', true)
pristine.addValidator(hashTag, heshSpecCharacter, 'Спецсимволы !@#$&*% запрещены ', true)
pristine.addValidator(comment, maxCommentLength, 'Длина комментария не может превышать 140 симоволов', true);

console.log(pristine)
form.addEventListener('submit', function (e) {
    e.preventDefault()
    let isValid = pristine.validate();
    if (isValid) {
        form.reset();
    }

})

export { form };
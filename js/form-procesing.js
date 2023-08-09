import { pristine, form } from "./post-validate.js";
import { popUpMessage } from "./rendering.js";
import { onCloseModal } from "./set-new-image.js";


const requestURL = 'https://25.javascript.pages.academy/kekstagram',
    requestParams = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', // include, *same-origin, omit
    }


fetch(requestURL, requestParams)
    .then((response) => {
        if (response.ok) {
        }
        return response.json();
    })
    .then((data) => {
        console.log('Результат', data);
    });



form.addEventListener('submit', function (e) {
    e.preventDefault()
    let formdata = new FormData(form);
    requestParams.body = formdata;
    const submitBtn = form.querySelector('#upload-submit');
    let isValid = pristine.validate();
    if (isValid) {
        submitBtn.disabled = true;
        fetch(requestURL, requestParams)
            .then(function (response) {
                if (response.ok) {
                    form.reset();
                    submitBtn.disabled = false;
                    console.log('успешно!');
                    popUpMessage('Ваше изображение размещено в галлерее')
                    onCloseModal()

                } else {
                    throw new Error(response.status)
                }
            }).catch(function (error) {
                popUpMessage('Ошибка отправленных данных')
                submitBtn.disabled = false;
            })
    }

})

async function getPosts () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
  
    return posts;
  }
  
  (async function () {
    const posts = await getPosts();
    console.log('Список публикаций:');
    console.log(posts); // Выведет массив с данными
  })();
export { form };
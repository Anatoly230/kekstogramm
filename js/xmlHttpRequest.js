const requestURL = 'https://25.javascript.pages.academy/kekstagram/data';
let response = null;

// let  oldForm = document.forms,
// formContent = new FormData(oldForm[0]);

// formContent.append('user name', 'Anatoly')

// for(let item of formContent.entries()){
//     console.log(item);
// }

// console.log(Array.from(oldForm)[0].method);
const promData = new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestURL);
    xhr.addEventListener('load', function () {
        if (isStatusOk(xhr.status)) {
            resolve(JSON.parse(xhr.response))
        } else {
            reject('error')
        }
    })

    xhr.onerror = function () {
        console.log(this.response);
    }

    xhr.send();

});

function isStatusOk(status) {
    if (status >= 200 && status < 300) {
        return true;
    }
    return false;
}

export { promData };
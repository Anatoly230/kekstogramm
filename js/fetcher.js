const requestURL = 'https://25.javascript.pages.academy/kekstagram/data';
const xhr = new XMLHttpRequest();
let response = null;

// let  oldForm = document.forms,
// formContent = new FormData(oldForm[0]);

// formContent.append('user name', 'Anatoly')

// for(let item of formContent.entries()){
//     console.log(item);
// }

// console.log(Array.from(oldForm)[0].method);
function isStatusOk(status) {
    console.log(status);
    if (status >= 200 && status < 300) {
        return true;
    }
    return false;
}

    xhr.open('GET', requestURL);
    xhr.addEventListener('load', function () {
        if (isStatusOk(xhr.status)) {
            response = JSON.parse(xhr.response);
        }
    })

    xhr.onerror = function () {
        console.log(this.response);
    }

    xhr.send();

console.log(response);

export { response };
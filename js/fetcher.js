const URLRequest = 'https://25.javascript.pages.academy/kekstagram/data';


function getRemoteContent() {
    return fetch(URLRequest)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`request status is ${response.status}`)
            }
        })
}

export { getRemoteContent };
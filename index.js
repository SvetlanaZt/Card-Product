const button = document.querySelector('#button')
const list = document.querySelector("#card")

list.addEventListener('submit', onClick)

function onClick() {
    button.classList.remove('is-hidden')
}
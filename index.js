const button = document.getElementById('button')
const list = document.getElementById('card')
const code = document.querySelector('.container__code')

list.addEventListener('click', onClick)

function onClick() {
    button.classList.remove('is-hidden')
    code.classList.remove('is-hidden')
}
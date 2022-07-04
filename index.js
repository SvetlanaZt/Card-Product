const button = document.getElementById('button')
const list = document.getElementById('card')
const code = document.querySelector('.container__code')

list.addEventListener('click', onClick)

function onClick() {
    button.classList.toggle('is-hidden')
    code.classList.toggle('is-hidden')
}
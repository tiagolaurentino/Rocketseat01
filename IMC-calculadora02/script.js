//variaveis

const form = document.querySelector('form')
const inputPeso = document.querySelector('#weigth')
const inputAltura = document.querySelector('#heigth')

const btnWrapper = document.querySelector('.modal-wrapper')
const btnMessage = document.querySelector('.modal-wrapper h2 span')
const btnClose = document.querySelector('.modal-wrapper button.close')

const btnErro = document.querySelector('.alert-error')


form.onsubmit = function(event) {
         event.preventDefault(event)

        const peso = inputPeso.value
        const altura = inputAltura.value
         const result = calculoIMC(peso, altura)
         const mensagem = `O sei IMC é ${result}`

         btnMessage.innerHTML = mensagem
         btnWrapper.classList.add('open')
}

btnClose.onclick = function() {
    btnWrapper.classList.remove('open')
}

function calculoIMC(peso, altura) {
    return (peso / (altura ** 2)).toFixed(2)
}
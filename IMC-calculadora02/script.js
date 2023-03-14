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

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    const result = IMC(peso, altura)
    const mensagem =`O seu IMC é ${result}`
    btnMessage.innerHTML = mensagem
    
    btnWrapper.classList.add('open')
    btnErro.classList.add('open')
   
}

btnClose.onclick = function(){
    btnWrapper.classList.remove('open')
    btnErro.classList.remove('open')
}

function IMC(peso, altura) {
   return( peso / (altura ** 2)).toFixed(2)
}
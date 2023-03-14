import { modal } from './main.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, notANumber } from './utils.js'
//variaveis

const form = document.querySelector('form')
const inputPeso = document.querySelector('#weigth')
const inputAltura = document.querySelector('#heigth')

//const btnWrapper = document.querySelector('.modal-wrapper')
//const btnMessage = document.querySelector('.modal-wrapper h2 span')
//const btnClose = document.querySelector('.modal-wrapper button.close')



form.onsubmit = function(event) {
    event.preventDefault(event)//serve p nao carregar a pagina quando apertar o botao

   const peso = inputPeso.value
   const altura = inputAltura.value

   const weightOrHeightIsNotANumber = notANumber(peso) || notANumber(altura)
   
   if (weightOrHeightIsNotANumber) {
       AlertError.open()
        return;
   }

   AlertError.close()

   const result = calculateIMC(peso, altura)
     displayResultMessage(result) 
   
}

function displayResultMessage(result) {
    const mensagem = `Seu IMC é ${result}`

modal.btnMessage.innerHTML = mensagem
modal.open()
}

inputAltura.oninput = () => AlertError.close()
inputPeso.oninput = () => AlertError.close()
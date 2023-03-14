//variaveis

const form = document.querySelector('form')
const inputPeso = document.querySelector('#weigth')
const inputAltura = document.querySelector('#heigth')

const btnWrapper = document.querySelector('.modal-wrapper')
const btnMessage = document.querySelector('.modal-wrapper h2 span')
const btnClose = document.querySelector('.modal-wrapper button.close')



form.onsubmit = function(event) {
    event.preventDefault(event)//serve p nao carregar a pagina quando apertar o botao

   const peso = Number(inputPeso.value)
   const altura = Number(inputAltura.value)
   const result = IMC(peso, altura)
   
    const mensagem = `Seu IMC é ${result}`
    btnMessage.innerHTML = mensagem
    btnWrapper.classList.add('open')
   
}

btnClose.onclick = function() {
    btnWrapper.classList.remove('open')
}






  


function IMC(peso, altura) {
     
    return (peso / (altura ** 2)).toFixed(2)
}
    

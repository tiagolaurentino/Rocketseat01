const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const randomNumber = Math.round(Math.random() * 10)

let tentativa = 1

//função callback
function handClick(event) {
    event.preventDefault()//não faça o padrao desse evento

    const inputNumber = document.querySelector('#inputNumber')

    if(Number(inputNumber.value) == randomNumber) {
        screen1.classList.add('hide')
       screen2.classList.remove('hide')

        
       screen2.querySelector('.screen2 h2').innerText = 'Acertou em ' + tentativa + ' tentativas.'  
      }

    inputNumber.value = ''//limpar o campo
    tentativa++// faça nova tentativa
}

//Eventos
const tentar = document.querySelector('#tentar')//pego os 2 botões
const reset = document.querySelector('#resetou')

//registrar os eventos
tentar.addEventListener('click', handClick)
reset.addEventListener('click', function() {
         screen1.classList.remove('hide')
       screen2.classList.add('hide')
       tentativa = 1
})
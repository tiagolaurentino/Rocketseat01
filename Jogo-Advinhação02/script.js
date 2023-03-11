const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const tentar = document.querySelector('#tentar')//pego os 2 botões
const reset = document.querySelector('#resetou')//Eventos


let randomNumber = Math.round(Math.random() * 10)

//Eventos registrar os eventos
tentar.addEventListener('click', handClick)
reset.addEventListener('click', handResetClick)
document.addEventListener('keydown', function(e) {
     if(e.key == 'enter' && screen1.classList.contains('hide')) {
        handResetClick()
      }
})

let tentativa = 1

//função callback
function handClick(event) {
    event.preventDefault()//não faça o padrao desse evento

    const inputNumber = document.querySelector('#inputNumber')
    
    if(Number(inputNumber.value) == randomNumber) {
      toggleScreen()  

       screen2.querySelector('.screen2 h2').innerText = 'Acertou em ' + tentativa + ' tentativas.'  
      } 

    inputNumber.value = ''//limpar o campo
    tentativa++// faça nova tentativa
  }

function handResetClick() {
  toggleScreen()
  randomNumber = Math.round(Math.random() * 10)
  tentativa = 1
}

function toggleScreen() {
  screen1.classList.toggle('hide')//automaticamente toggle o hide sai e entra
  screen2.classList.toggle('hide')
 
}


//
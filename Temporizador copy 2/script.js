
const botaoPlay = document.querySelector(".play")
const botaoPause = document.querySelector(".pause")
const botaoStop = document.querySelector(".stop")
const botaoSet = document.querySelector('.set')

const minutos = document.querySelector('.minutes')
const segundos = document.querySelector('.seconds')
let minutes = Number(minutos.textContent)
let resetRelogio
//console.log(minutos.innerHTML = 50) se quiser mudar o conteudo de uma propriedade e só essa funcionalidade
//console.log(minutos )//minutos é um span la html cheio de propriedade

function resetControle() {
    botaoPlay.classList.remove('hide')
    botaoPause.classList.add('hide')
    botaoStop.classList.add('hide')
    botaoSet.classList.remove('hide')
}

function atualizar(minutes,segundo,minuto) {
   
    segundos.textContent = String(segundo).padStart(2,'0')
    minutos.textContent = String(minutes).padStart(2,"0")
   
}

function timerRelogio () {
    atualizar(minutes, 0)
    clearInterval(resetRelogio)
    
}

function timerGeral() {
   resetRelogio = setTimeout(function() {
        let minuto = Number(minutos.textContent)
        let segundo = Number(segundos.textContent)

         segundos.textContent = '00'
        //atualizar(minutes,0)
        if(minuto <= 0){
            resetControle()
            return
        }

        if(segundo <= 0){
            segundo = 60

            atualizar(String(minuto - 1), segundo)
            //minutos.textContent = String(minuto - 1).padStart(2,"0")
        }
           // atualizar(minuto, String(segundo - 1))
      segundos.textContent = String(segundo - 1).padStart(2,"0")
       
        timerGeral()
      }, 1000)
}

botaoPlay.addEventListener('click', function() {
    botaoPlay.classList.add('hide')
    botaoPause.classList.remove('hide')
    botaoStop.classList.remove('hide')
    botaoSet.classList.add('hide')

    timerGeral()
})

botaoPause.addEventListener('click', function() {
    botaoPause.classList.add('hide')
    botaoPlay.classList.remove('hide')
    clearTimeout(resetRelogio)
   // clearInterval(resetRelogio)
   
})

botaoStop.addEventListener('click', function() {
    resetControle()
    
})

botaoSet.addEventListener('click', function() {
let newMinutes = prompt('Qual é o minuto?') 

if(!newMinutes){
    resetControle
    return
}
minutes = newMinutes
 //minutos.textContent = String(minutes).padStart(2,"0")
 
  atualizar(minutes, 0)
    
})
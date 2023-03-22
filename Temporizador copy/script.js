
const botaoPlay = document.querySelector(".play")
const botaoPause = document.querySelector(".pause")
const botaoStop = document.querySelector(".stop")
const botaoSet = document.querySelector('.set')

const minutos = document.querySelector('.minutes')
const segundos = document.querySelector('.seconds')
let minutes = Number(minutos.textContent)
let pararCronometro
//console.log(minutos.innerHTML = 50) se quiser mudar o conteudo de uma propriedade e só essa funcionalidade
//console.log(minutos )//minutos é um span la html cheio de propriedade

function resetControle() {
    botaoPlay.classList.remove('hide')
    botaoPause.classList.add('hide')
    botaoStop.classList.add('hide')
    botaoSet.classList.remove('hide')
}

function atualizarDisplay(minuto, seconds){
    minutos.innerHTML = String(minuto).padStart(2,'0')
    segundos.innerHTML = String(seconds).padStart(2,"0")
} 

function resetTimer() {
    atualizarDisplay(minutes, 0)
    clearInterval(pararCronometro)
}


function timerGeral() {
    pararCronometro = setTimeout(function() {
       let seconds = Number(segundos.innerHTML)
       let minuto = Number(minutos.innerHTML)
        
       
      if(seconds <= 0) {
        seconds = 10

       // minutos.innerHTML = String(minuto -1).padStart(2,"0")
       --minuto
       }
      
       atualizarDisplay(minuto, String(seconds - 1))
        // segundos.innerHTML = seconds - 1
      // segundos.innerHTML = String(seconds - 1).padStart(2,"0")
         
         if(minuto <= 0){
           
            resetControle()
            return
           }
           

       timerGeral()
        
    },1000) 

    
}

botaoPlay.addEventListener('click', function() {
    botaoPlay.classList.add('hide')
    botaoPause.classList.remove('hide')
    botaoStop.classList.remove('hide')
    botaoSet.classList.add('hide')

   /* setTimeout(function(){  essa é a logica foi colocada dentro da função timerGeral p ficar contando
    se parar
        let seconds = Number(segundos.innerHTML)

        if(seconds <= 0) {
            seconds = 60
        }
        segundos.innerHTML = seconds -1

    },1000)*/
    timerGeral()
})

botaoPause.addEventListener('click', function() {
    botaoPause.classList.add('hide')
    botaoPlay.classList.remove('hide')
    //clearTimeout(pararCronometro)//parar cronometro
    clearInterval(pararCronometro)
})

botaoStop.addEventListener('click', function() {
    resetControle()
    resetTimer()
})

botaoSet.addEventListener('click', function() {
    newMinutes = prompt('Quantos minutos') 
    if(!newMinutes){
        resetTimer
        return
    }
    minutes = newMinutes
  // minutos.innerHTML = String(minutes).padStart(2,'0')
     atualizarDisplay(minutes, 0)
})
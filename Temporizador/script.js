import Controls from "./controls.js"
import Timer from "./timer.js"
import sounds from "./sounds.js"
import { 
    buttonplay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOff,
    buttonSoundOn,
    minutesDisplay,
    secondsDisplay,
 } from "./elements.js"

    

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut //parar o relogio quando pausar a function countdown()

const controls = Controls({
    buttonplay,
    buttonPause,
    buttonSet,
    buttonStop
})

const time = Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    resetControls: controls.reset,
     minutes 
})

const som = sounds()

buttonplay.addEventListener('click', function() {
       
      controls.play()
      time.countdown()
      som.pressButton()
}) 

buttonPause.addEventListener('click', function(){
   controls.pause()
   time.hold()
   som.pressButton()
    clearTimeout(timerTimeOut)// pausar o cronometro
})

buttonStop.addEventListener('click', function() {
    controls.reset()
   time.reset()
    som.pressButton()
})

buttonSoundOff.addEventListener('click', function() {
    buttonSoundOff.classList.add('hide')
    buttonSoundOn.classList.remove('hide')
    som.bgAudio.play()
    
})

buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    som.bgAudio.pause()
})



buttonSet.addEventListener('click', function () {
   let newMinutes = controls.getMinute()

   if (!newMinutes) {
    time.reset()
    return
   }

   minutes = newMinutes
    time.updateDisplay(minutes, 0)//textContent muda os conteudos do objeto
    time.updateMinutes(minutes)
})
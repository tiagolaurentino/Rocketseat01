import sounds from "./sounds.js"

export default function Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    resetControls,
    minutes
}) {

    function updateDisplay(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2,'0')
        secondsDisplay.textContent = String(seconds).padStart(2,'0')
    }
    
    function reset() {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)// pausar o cronometro
    }
    
    function countdown() {
       timerTimeOut = setTimeout(function() {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinish = minutes <= 0 && seconds <= 0

            updateDisplay(minutes, 0)
            //secondsDisplay.textContent = '00'
    
            if (isFinish) {
                resetControls() 
                updateDisplay()
                sounds().timeEnd() 
                return
            }
    
            if( seconds <= 0 ) {
                seconds = 60
    
               // minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
                --minutes
            }
    
           
            //secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
            updateDisplay(minutes, String(seconds - 1))
            countdown()
    
        }, 1000)
    }

    function updateMinutes(newMinutes) {
        minutes = newMinutes
    }

    function hold() {
        clearTimeout(timerTimeOut)
    }

    return {
        reset,
        updateDisplay,
        countdown,
        updateMinutes,
        hold
    }
}

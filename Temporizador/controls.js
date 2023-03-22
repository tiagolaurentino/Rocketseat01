
 
export default function Controls({
    buttonplay,
    buttonPause,
    buttonSet,
    buttonStop,
}) {
    function play() {
        buttonplay.classList.add('hide')
       buttonPause.classList.remove('hide')
       buttonSet.classList.add('hide')
        buttonStop.classList.remove('hide')
    }

    function pause() {
        buttonPause.classList.add('hide')
        buttonplay.classList.remove('hide')
    }

    function reset() {
        buttonplay.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonSet.classList.remove('hide')
        buttonStop.classList.add('hide')
    }

    function getMinute() {
     let newMinutes = prompt('Quantos minutos?') 
   if (!newMinutes) {
    return false
   }

   return newMinutes
    }


    return {
        reset,
        play,
        pause,
        getMinute,
    }
}

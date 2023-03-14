
export function notANumber(value) {
    return isNaN(value) || value === ''
}


export function calculateIMC(peso, altura) {
     
    return (peso / (altura ** 2)).toFixed(2)
}
    


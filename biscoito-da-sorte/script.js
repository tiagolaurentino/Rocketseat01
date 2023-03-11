
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')

const btnVoltar = document.querySelector('#voltar')
const biscoito = document.querySelector('#biscoito')

//evento
btnVoltar.addEventListener('click', mudarTela)
biscoito.addEventListener('click', mudarTela)

function mudarTela(event) {
    let btnTarget = event.target
    
    if(btnTarget.id === 'biscoito'){

        box1.classList.add('esconder')
        box2.classList.remove('esconder')
        return
    }

    if(btnTarget.id === 'voltar'){
        box2.classList.add('esconder')
        box1.classList.remove('esconder')
        return
    }
}


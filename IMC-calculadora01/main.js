

export const modal = {
    btnWrapper: document.querySelector('.modal-wrapper'),
    btnMessage: document.querySelector('.modal-wrapper h2 span'),
    btnClose: document.querySelector('.modal-wrapper button.close'),

    open() {
        modal.btnWrapper.classList.add('open')
    },
    close() {
        modal.btnWrapper.classList.remove('open')
    }
}

modal.btnClose.onclick = function() {
    modal.close()
}
//funçao de adicionar um evento em evento pronto
window.addEventListener('keydown', handleKeyDown)

function handleKeyDown(event) {
    if(event.key === 'Escape') {
        modal.close()
    }
}
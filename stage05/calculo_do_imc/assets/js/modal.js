export const Modal = {
    errorMessage: document.querySelector('.error-label'),
    wrapper: document.querySelector('.modal-wrapper'),
    resultMessage: document.querySelector('h2'),
    btnClose: document.querySelector('#closeModal'),
    showModalWrapper() {
        //this.wrapper.classList.add('show')
        this.wrapper.classList.add('show')
    },
    hideModalWrapper() {
        this.wrapper.classList.remove('show')
    },
    showErrorMessage() {
        this.errorMessage.classList.add('show')
        setTimeout(() => { Modal.hideErrorMessage() }, 4000)
    },
    hideErrorMessage() {
        this.errorMessage.classList.remove('show')
    },
    closeModalOnClick() {
        this.hideModalWrapper()
    },
}

// handle escape key from keyboard
document.addEventListener('keydown', (event) => {
    let keyPressed = event.key

    if (keyPressed === 'Escape' && Modal.wrapper.classList.contains('show')) {
        Modal.wrapper.classList.remove('show')
    }
})

// Show popup (modal) with IMC calculate result
export const ShowResult = (result) => {
    Modal.showModalWrapper()
    Modal.resultMessage.innerText = `Seu IMC é de ${result}`

    Modal.btnClose.onclick = () => {
        Modal.closeModalOnClick()
    }
}

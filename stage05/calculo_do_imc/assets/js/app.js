import { Modal, ShowResult } from './modal.js'
import { CalculateIMC } from './tools.js'
import { CheckIfWrongEntry } from './errors.js'
 
// Capture elements
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// Handle form submit
form.onsubmit = event => {
    event.preventDefault()
    
    const evalTextBox = CheckIfWrongEntry(inputWeight.value, inputHeight.value)
    
    if (evalTextBox) {
        Modal.showErrorMessage()
    } else {
        const result = CalculateIMC(inputWeight.value, inputHeight.value)
        ShowResult(result)
    }
}

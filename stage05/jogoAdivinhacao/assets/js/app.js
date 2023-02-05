// capture elements
const numberInput = document.querySelector('#numberInput');
let numberValue = Number(numberInput.value);
const mainWindow = document.querySelector('.mainWindow');
const tryAgainWindow = document.querySelector('.tryAgainWindow');
const btnTry = document.querySelector('#btnTry');
const btnPlayAgain = document.querySelector('#btnPlayAgain');
let randomNumber;
let countAttempts;

// reset game to initialize 
resetGame();

// event listener
document.addEventListener('keydown', (event) => {
    let keyPressed = event.key;

    switch (keyPressed) {
        case 'ArrowUp':
            if (numberValue >= 10) {
                numberValue = 10;
                numberInput.value = numberValue;
            } else {
                numberValue++;
                numberInput.value = numberValue;
            }
            generateConsoleLog();
            break;
        case 'ArrowDown':
            if (numberValue <= 0) {
                numberValue = 0;
                numberInput.value = numberValue;
            } else {
                numberValue--;
                numberInput.value = numberValue;
            }
            generateConsoleLog();
            break;
        case 'Enter':
            if (tryAgainWindow.classList.contains('hide')) {
                handleTryClick(e);
            } else {
                handleResetClick(e);
            }
            generateConsoleLog();
            break;
        default:
            generateConsoleLog();
    };
});

// handle btnTry and btnPlayAgain buttons to apply correct behavior
btnTry.addEventListener('click', handleTryClick);
btnPlayAgain.addEventListener('click', handleResetClick);

// check if automatically generated number is equal the text box number
function handleTryClick(e) {
    e.preventDefault();

    if (randomNumber === Number(numberInput.value)) {
        toggleScreen();
        tryAgainWindow.querySelector('h2')
            .innerText = `Acertou em ${countAttempts} tentativa(s)`;
    };

    countAttempts++;
};

// reset game
function resetGame() {
    generateRandomNumber();
    numberInput.value = 0;
    countAttempts = 1;
}

// reset game after found the correct answer
function handleResetClick(e) {
    toggleScreen();
    resetGame();
};

// generate random number between 0 and 10 (inclusive)
function generateRandomNumber() {
    randomNumber = Math.round(Math.random() * 10);
}

// change between game screens
function toggleScreen() {
    mainWindow.classList.toggle("hide");
    tryAgainWindow.classList.toggle("hide");
};

// Uncomment inner function lines to generate console log
function generateConsoleLog() {
    //console.log(`Debug \nrandomNumber = ${randomNumber}\nnumberValue  = ${numberValue}`);
}

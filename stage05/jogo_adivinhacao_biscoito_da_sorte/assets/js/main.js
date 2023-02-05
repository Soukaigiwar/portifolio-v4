const openOtherFortuneCookie = document.querySelector('button')
const fortuneCookie = document.querySelector('.biscoito')
const mainScreen = document.querySelector('.antes')
const resultScreen = document.querySelector('.depois')
const fortuneMessageBox = document.querySelector('.message')
const messages = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Não compense na ira o que lhe falta na razão.",
    "Não importa o tamanho da montanha, ela não pode tapar o sol.",
    "O riso é a menor distância entre duas pessoas.",
    "Surpreender e ser surpreendido é o segredo do amor.",
    "Deixe de lado as preocupações e seja feliz.",
    "O conhecimento é a única virtude e a ignorância é o único vício.",
    "Todas as coisas são difíceis antes de se tornarem fáceis."
]

fortuneCookie.addEventListener('click', () => {
    mainScreen.classList.toggle('hide')
    resultScreen.classList.toggle('hide')
    fortuneMessageBox.innerText = messages[Math.round(Math.random() * 9)]
})

openOtherFortuneCookie.addEventListener('click', () => {
    mainScreen.classList.toggle('hide')
    resultScreen.classList.toggle('hide')
})

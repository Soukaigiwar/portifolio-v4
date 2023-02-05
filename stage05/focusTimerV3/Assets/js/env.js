export const Env = {    
    buttonPlay: document.querySelector('.button_play'),
    buttonPause: document.querySelector('.button_pause'),
    buttonStop: document.querySelector('.button_stop'),
    
    buttonPlusFiveMinutes: document.querySelector('.plus_time'),
    buttonMinusFiveMinutes: document.querySelector('.minus_time'),

    buttonForest: document.querySelector('.forest'),
    buttonRain: document.querySelector('.rain'),
    buttonCoffee: document.querySelector('.coffee'),
    buttonFireplace: document.querySelector('.fireplace'),

    volumeForest: document.querySelector('#volumeForest'),
    volumeRain: document.querySelector('#volumeRain'),
    volumeCoffee: document.querySelector('#volumeCoffee'),
    volumeFireplace: document.querySelector('#volumeFireplace'),

    body: document.querySelector('body'),
    buttonDay: document.querySelector('.buttonDay'),
    buttonNight: document.querySelector('.buttonNight'),
    
    // Debug only: Set speed of running seconds in tests.
    // .1 to 10x faster
    // .01 to 100x faster
    // .001 to 1000x faster
    // 1 to normal timming
    deltaTime: 1,
}

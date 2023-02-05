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
    
    // Debug only: Set speed of running seconds in tests.
    // .1 to 10x faster
    // .01 to 100x faster
    // .001 to 1000x faster
    // 1 to normal timming
    deltaTime: 1,
}

export const Env = {    
    buttonPlay: document.querySelector('.button_play'),
    buttonPause: document.querySelector('.button_pause'),
    buttonStop: document.querySelector('.button_stop'),
    buttonReset: document.querySelector('.button_reset'),
    buttonMuted: document.querySelector('.button_muted'),
    buttonUnmuted: document.querySelector('.button_unmuted'),
    
    // Debug only: Set speed of running seconds in tests.
    // .1 to 10x faster
    // .01 to 100x faster
    // .001 to 1000x faster
    // 1 to normal timming
    deltaTime: .001,
}

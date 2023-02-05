import { Controls } from "./playerControl.js"
import { Timer } from "./timer.js"
import { Env } from "./env.js"
import { Sound } from "./sounds.js"

Env.buttonPlay.addEventListener('click', () => {
    Sound.buttonClick()
    Controls.togglePlay()
    Timer.timeout()
})

Env.buttonPause.addEventListener('click', () => {
    Sound.buttonClick()
    Controls.togglePause()
    Timer.hold()
})

Env.buttonStop.addEventListener('click', () => {
    Sound.buttonClick()
    Timer.hold()
    Timer.clear()
    Controls.resetControl()
})

Env.buttonReset.addEventListener('click', () => {
    Sound.buttonClick()
    const minutes = prompt('Quantos minutos?') 
    if (minutes !== null) {
        Timer.setMinutes(minutes)
    }
})

Env.buttonMuted.addEventListener('click', () => {
    Sound.bgMusicPlay()
    Sound.buttonClick()
    Controls.toggleMuted()
    Controls.toggleUnmuted()
})

Env.buttonUnmuted.addEventListener('click', () => {
    Sound.bgMusicPause()
    Sound.buttonClick()
    Controls.toggleMuted()
    Controls.toggleUnmuted()
})

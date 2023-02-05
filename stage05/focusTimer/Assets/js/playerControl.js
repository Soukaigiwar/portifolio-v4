import { Env } from "./env.js"

export const Controls = {
    togglePlay() {
        Env.buttonPlay.classList.add('hide')
        Env.buttonPause.classList.remove('hide')
        Env.buttonStop.classList.remove('hide')
        Env.buttonReset.classList.add('hide')
    },
    togglePause() {
        Env.buttonPlay.classList.remove('hide')
        Env.buttonPause.classList.add('hide')
    },
    toggleStop() {
        Env.buttonPlay.classList.remove('hide')
        Env.buttonPause.classList.add('hide')
        Env.buttonStop.classList.add('hide')
        Env.buttonReset.classList.remove('hide')
    },
    resetControl() {
        this.togglePlay()
        this.toggleStop()
    },
    toggleReset() {
        Env.buttonReset.classList.toggle('hide')
    },
    toggleMuted() {
        Env.buttonMuted.classList.toggle('hide')
    },
    toggleUnmuted() {
        Env.buttonUnmuted.classList.toggle('hide')
    },
}

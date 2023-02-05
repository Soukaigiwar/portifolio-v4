import { Env } from "./env.js"
import { Timer } from "./timer.js"

export const Controls = {
    togglePlay() {
        Env.buttonPlay.classList.add('hide')
        Env.buttonPause.classList.remove('hide')
        Env.buttonStop.classList.remove('hide')
    },
    togglePause() {
        Env.buttonPlay.classList.remove('hide')
        Env.buttonPause.classList.add('hide')
    },
    toggleStop() {
        Env.buttonPlay.classList.remove('hide')
        Env.buttonPause.classList.add('hide')
    },
    resetControl() {
        this.togglePlay()
        this.toggleStop()
    },
    plusFiveMinutes() {
        Timer.handleTimerDisplay(
            Number(Timer.minutes.innerHTML) + 5, Number(Timer.seconds.innerHTML)
        )
    },
    minusFiveMinutes() {
        Timer.handleTimerDisplay(
            Number(Timer.minutes.innerHTML) - 5, Number(Timer.seconds.innerHTML)
        )
    }
}

import { Env } from "./env.js"
import { Controls } from "./playerControl.js"
import { Sound } from "./sounds.js"

let timerTimeOut

export const Timer = {
    minutes: document.querySelector('.minutes'),
    seconds: document.querySelector('.seconds'),
    getMinutes: document.querySelector('.minutes').textContent,
    getSeconds: document.querySelector('.seconds').textContent,
    setMinutes(minutes) {
        this.getMinutes = minutes
        this.handleTimerDisplay(minutes.innerHTML, seconds.innerHTML)
    },
    setSeconds(seconds) {
        this.getSeconds = seconds
        this.handleTimerDisplay(this.minutes.innerHTML, this.seconds.innerHTML)
    },
    handleTimerDisplay(minutes, seconds) {
        if (minutes <= 0) {
            return
        }
        return {
            minutes: this.minutes.innerHTML = String(minutes).padStart(2, "0"),
            seconds: this.seconds.innerHTML = String(seconds).padStart(2, "0")
        }
    },
    timeout() {
        timerTimeOut = setTimeout(function () {
            let seconds = Timer.seconds.textContent
            let minutes = Timer.minutes.textContent
            let minutesIsfinished = minutes <= 0 && seconds <= 0

            if (seconds <= 0) {
                seconds = 60
                minutes--
            }

            if (minutesIsfinished) {
                Controls.resetControl()
                Timer.handleTimerDisplay(Timer.getMinutes, 0)
                Sound.timeout()
                return
            }

            --seconds
            Timer.handleTimerDisplay(minutes, seconds)

            Timer.timeout()
        }, 1000 * Env.deltaTime)
    },
    hold() {
        clearTimeout(timerTimeOut)
    },
    clear() {
        this.handleTimerDisplay(this.getMinutes, 0)
    }
}

import { Env } from "./env.js"

export const Themes = {
    forest() {
        Env.buttonForest.classList.toggle('selected')
        Env.buttonRain.classList.remove('selected')
        Env.buttonCoffee.classList.remove('selected')
        Env.buttonFireplace.classList.remove('selected')
    },
    rain() {
        Env.buttonForest.classList.remove('selected')
        Env.buttonRain.classList.toggle('selected')
        Env.buttonCoffee.classList.remove('selected')
        Env.buttonFireplace.classList.remove('selected')
    },
    coffee() {
        Env.buttonForest.classList.remove('selected')
        Env.buttonRain.classList.remove('selected')
        Env.buttonCoffee.classList.toggle('selected')
        Env.buttonFireplace.classList.remove('selected')
    },
    fireplace() {
        Env.buttonForest.classList.remove('selected')
        Env.buttonRain.classList.remove('selected')
        Env.buttonCoffee.classList.remove('selected')
        Env.buttonFireplace.classList.toggle('selected')
    },
    darkMode() {
        Env.buttonDay.classList.add('hide')
        Env.buttonNight.classList.remove('hide')
        Env.body.classList.toggle('dark_theme')
    },
    lightMode() {
        Env.buttonDay.classList.remove('hide')
        Env.buttonNight.classList.add('hide')
        Env.body.classList.toggle('dark_theme')
    }
}
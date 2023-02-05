export const Sound = {
    buttonPress : new Audio("https://github.com/Soukaigiwar/portifolio/blob/main/stage05/focusTimerV2/Assets/audio/audios_button-press.wav?raw=true"),
    kitchenTimer : new Audio("https://github.com/Soukaigiwar/portifolio/blob/main/stage05/focusTimerV2/Assets/audio/audios_kichen-timer.mp3?raw=true"),
    bgAudioForest : new Audio("https://github.com/Soukaigiwar/portifolio/blob/main/stage05/focusTimerV2/Assets/audio/Floresta.wav?raw=true"),
    bgAudioRain : new Audio("https://github.com/Soukaigiwar/portifolio/blob/main/stage05/focusTimerV2/Assets/audio/Chuva.wav?raw=true"),
    bgAudioCoffee : new Audio("https://github.com/Soukaigiwar/portifolio/blob/main/stage05/focusTimerV2/Assets/audio/Cafeteria.wav?raw=true"),
    bgAudioFireplace : new Audio("https://github.com/Soukaigiwar/portifolio/blob/main/stage05/focusTimerV2/Assets/audio/Lareira.wav?raw=true"),
    
    buttonClick() {
        this.buttonPress.play()
    },
    timeout() {
        this.kitchenTimer.play()
    },
    bgMusicForest() {
        if(this.bgAudioForest.paused) {
            this.bgMusicPause()
            this.bgAudioForest.play()
        }
        else {
            this.bgAudioForest.pause()
        }
        this.bgAudioForest.loop = true
        this.bgAudioForest.volume = 0.5
    },
    bgMusicRain() {
        if(this.bgAudioRain.paused) {
            this.bgMusicPause()
            this.bgAudioRain.play()
        }
        else {
            this.bgAudioRain.pause()
        }
        this.bgAudioRain.loop = true
        this.bgAudioRain.volume = 0.5
    },
    bgMusicCoffee() {
        if(this.bgAudioCoffee.paused) {
            this.bgMusicPause()
            this.bgAudioCoffee.play()
        }
        else {
            this.bgAudioCoffee.pause()
        }
        this.bgAudioCoffee.loop = true
        this.bgAudioCoffee.volume = 0.5
    },
    bgMusicFireplace() {
        if(this.bgAudioFireplace.paused) {
            this.bgMusicPause()
            this.bgAudioFireplace.play()
        }
        else {
            this.bgAudioFireplace.pause()
        }
        this.bgAudioFireplace.loop = true
        this.bgAudioFireplace.volume = 0.5
    },
    bgMusicPause() {
        this.bgAudioForest.pause()
        this.bgAudioRain.pause()
        this.bgAudioCoffee.pause()
        this.bgAudioFireplace.pause()
    }
}

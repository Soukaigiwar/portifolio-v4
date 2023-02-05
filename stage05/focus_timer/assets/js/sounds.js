export const Sound = {
    buttonPress : new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"),
    kitchenTimer : new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"),
    bgAudio : new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true"),
    
    buttonClick() {
        this.buttonPress.play()
    },
    timeout() {
        this.kitchenTimer.play()
    },
    bgMusicPlay() {
        this.bgAudio.play()
        this.bgAudio.loop = true
    },
    bgMusicPause() {
        this.bgAudio.pause()
    }
}

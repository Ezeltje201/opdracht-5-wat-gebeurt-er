input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Sad)
})

input.onButtonPressed(Button.A, function () {
    if (1000 >= steps && 5000 < steps) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . # # . .
            . # # . .
            . . . . .
            `)
        basic.showString("GOOD")
    } else if (5000 >= steps && 10000 < steps) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showString("GREAT")
    } else if (10000 <= steps) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.showString("HURRY UP")
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . . . # .
            . . . . .
            `)
        basic.showString("HURRY UP")
    }
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
})
input.onButtonPressed(Button.AB, function () {
    steps = 0
    basic.showString("RESET")
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Half))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(0.04 * steps)
    basic.showString("kcal")
    basic.showLeds(`
        . . # . .
        # . # . #
        # # . # #
        # . . . #
        . # # # .
        `)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
let steps = 0
steps = 0

input.onButtonPressed(Button.A, function () {
    max7219_matrix.clearAll()
    for (let index = 0; index < 1; index++) {
        music.playTone(330, music.beat(BeatFraction.Half))
    }
    Inicio = 1
    for (let index = 0; index < 3; index++) {
        max7219_matrix.scrollText(
        "Agua Calentandose",
        0,
        1
        )
        Inicio += 1
    }
    for (let index = 0; index < 1; index++) {
        music.playTone(494, music.beat(BeatFraction.Half))
    }
})
let Inicio = 0
max7219_matrix.setup(
4,
DigitalPin.P12,
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P13
)
max7219_matrix.for_4_in_1_modules(
rotation_direction.counterclockwise,
true
)
basic.forever(function () {
    if (Inicio == 4) {
        max7219_matrix.scrollText(
        "Agua Fria",
        0,
        1
        )
    }
})

function runtTimer (time: number) {
    running = 1
    number = time
    while (number > 0 && running) {
        number = number - 1
        led.plotBarGraph(
        number,
        time
        )
        basic.pause(1000)
    }
    while (running) {
        radio.sendNumber(1)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        basic.pause(100)
    }
    radio.sendNumber(0)
}
input.onButtonPressed(Button.A, function () {
    if (running == 0) {
        runtTimer(60)
    }
})
input.onButtonPressed(Button.AB, function () {
    running = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (running == 0) {
        runtTimer(120)
    }
})
let number = 0
let running = 0
basic.showString("Timer")
running = 0
radio.setGroup(197)

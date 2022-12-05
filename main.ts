input.onButtonPressed(Button.A, function () {
    Player1 = randint(1, 10)
    basic.showNumber(Player1)
})
input.onButtonPressed(Button.B, function () {
    Player2 = randint(1, 10)
    basic.showNumber(Player2)
    if (Player1 > Player2) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            # # # # #
            # . . . #
            `)
    } else if (Player1 < Player2) {
        basic.showLeds(`
            # # # # .
            # . . . #
            # # # # .
            # . . . #
            # # # # .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            . . . . .
            # # # # #
            # # # # #
            `)
    }
})
let Player2 = 0
let Player1 = 0
Player1 = 0
Player2 = 0
basic.forever(function () {
	
})

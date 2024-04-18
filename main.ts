let cross: Image = null
let creeper: Image = null
basic.forever(function () {
    cross = images.createImage(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    creeper = images.createImage(`
        # # . # #
        # # . # #
        . . # . .
        . # . # .
        . # . # .
        `)
    creeper.showImage(0)
    cross.showImage(0)
})

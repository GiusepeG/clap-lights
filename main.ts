let is_light_on = false
input.onSound(DetectedSound.Loud, function () {
    is_light_on = !(is_light_on)
    if (is_light_on) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})

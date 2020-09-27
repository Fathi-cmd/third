basic.forever(function () {
    images.iconImage(IconNames.Heart).showImage(0)
    while (!(input.buttonIsPressed(Button.A))) {
        control.waitMicros(1000)
    }
    images.iconImage(IconNames.SmallHeart).showImage(0)
    while (!(input.buttonIsPressed(Button.A))) {
        control.waitMicros(1000)
    }
    images.iconImage(IconNames.Yes).showImage(0)
    while (!(input.buttonIsPressed(Button.A))) {
        control.waitMicros(1000)
    }
    images.iconImage(IconNames.No).showImage(0)
    while (!(input.buttonIsPressed(Button.A))) {
        control.waitMicros(1000)
    }
    images.iconImage(IconNames.Happy).showImage(0)
    control.waitMicros(1000)
    while (!(input.buttonIsPressed(Button.A))) {
        control.waitMicros(1000)
    }
})

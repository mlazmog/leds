let Temp = 0
led.enable(true)
basic.forever(function () {
    Temp = 300 * Math.idiv(pins.analogReadPin(AnalogPin.P0), 0)
    basic.showNumber(Temp)
    basic.pause(100)
    serial.writeValue("temperature(C)º", Temp)
})

radio.setGroup(727)
let A = true
let B = true
basic.forever(function on_forever() {
    
    radio.sendValue("X", pins.analogReadPin(AnalogPin.P1))
    radio.sendValue("Y", pins.analogReadPin(AnalogPin.P2))
    if (A && !pins.digitalReadPin(DigitalPin.P5)) {
        radio.sendString("A")
        A = false
    } else if (pins.digitalReadPin(DigitalPin.P5)) {
        A = true
    }
    
    if (B && !pins.digitalReadPin(DigitalPin.P11)) {
        radio.sendString("B")
        B = false
    } else if (pins.digitalReadPin(DigitalPin.P11)) {
        B = true
    }
    
})

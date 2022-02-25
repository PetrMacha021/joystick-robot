radio.set_group(727)

A = True
B = True

def on_forever():
    global A, B
    radio.send_number(pins.analog_read_pin(AnalogPin.P1))
    radio.send_number(pins.analog_read_pin(AnalogPin.P2))
    if A and not pins.digital_read_pin(DigitalPin.P5):
        radio.send_string("A")
        console.log(A)
        A = False
    elif pins.digital_read_pin(DigitalPin.P5):
        A = True
    if B and not pins.digital_read_pin(DigitalPin.P11):
        radio.send_string("B")
        B = False
    elif pins.digital_read_pin(DigitalPin.P11):
        B = True
basic.forever(on_forever)
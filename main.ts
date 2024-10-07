input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.Up), function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(SCD30.readHumidity(), 1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(SCD30.readTemperature(), 1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(SCD30.readCO2(), 1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.Up), function () {
    IotLoRaNode.HumidityValue(SCD30.readHumidity(), Channels.One)
    IotLoRaNode.TemperatureValue(SCD30.readTemperature(), Channels.One)
    IotLoRaNode.AnalogueValue(SCD30.readCO2(), Channels.One)
    IotLoRaNode.loraTransmitPayload()
})
SCD30.setCalibration400ppm()
basic.showIcon(IconNames.Yes)
basic.setLedColor(0x00ff00)
IotLoRaNode.InitialiseRadioOTAA("70B3D57ED00653A1", "7410F8F059907B899E22F3BE33FCF39F")
basic.forever(function () {
	
})

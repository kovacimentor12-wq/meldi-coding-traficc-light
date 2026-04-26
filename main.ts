input.onButtonPressed(Button.A, function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
})
input.onButtonPressed(Button.AB, function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Go)
})
input.onButtonPressed(Button.B, function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.GetReady)
})

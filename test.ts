// tests go here; this will not be compiled when this package is used as a library
controllerbit.onEvent(ControllerBitPin.P12, ControllerBitEvent.Down, () => {
    led.plot(0, 0)
})
controllerbit.onEvent(ControllerBitPin.P12, ControllerBitEvent.Up, () => {
    led.unplot(0, 0)
})
controllerbit.onEvent(ControllerBitPin.P16, ControllerBitEvent.Down, () => {
    led.plot(1, 0)
})
controllerbit.onEvent(ControllerBitPin.P16, ControllerBitEvent.Up, () => {
    led.unplot(1, 0)
})
controllerbit.onEvent(ControllerBitPin.P1, ControllerBitEvent.Down, () => {
    led.plot(1, 2)
})
controllerbit.onEvent(ControllerBitPin.P1, ControllerBitEvent.Up, () => {
    led.unplot(1, 2)
})
controllerbit.onEvent(ControllerBitPin.P2, ControllerBitEvent.Down, () => {
    led.plot(3, 2)
})
controllerbit.onEvent(ControllerBitPin.P2, ControllerBitEvent.Up, () => {
    led.unplot(3, 2)
})
controllerbit.onEvent(ControllerBitPin.P0, ControllerBitEvent.Down, () => {
    led.plot(2, 1)
})
controllerbit.onEvent(ControllerBitPin.P0, ControllerBitEvent.Up, () => {
    led.unplot(2, 1)
})
controllerbit.onEvent(ControllerBitPin.P8, ControllerBitEvent.Down, () => {
    led.plot(2, 3)
})
controllerbit.onEvent(ControllerBitPin.P8, ControllerBitEvent.Up, () => {
    led.unplot(2, 3)
})

basic.forever(() => {
    if (controllerbit.isPressed(ControllerBitPin.P12))
        led.toggle(3, 0);
    if (controllerbit.isPressed(ControllerBitPin.P16))
        led.toggle(4, 0);
    if (controllerbit.isPressed(ControllerBitPin.P0))
        led.toggle(3, 1);
    if (controllerbit.isPressed(ControllerBitPin.P1))
        led.toggle(4, 1);
    if (controllerbit.isPressed(ControllerBitPin.P2))
        led.toggle(4, 2);
    if (controllerbit.isPressed(ControllerBitPin.P8))
        led.toggle(4, 3);
})

led.unplot(4, 4)

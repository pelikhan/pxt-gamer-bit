/**
 * The pins used by SparkFun controller:bit (formerly known as the gamer:bit)
 */
//%
enum ControllerBitPin {
    //% block="P0 (D-PAD up)"
    P0 = <number>DAL.MICROBIT_ID_IO_P0,
    //% block="P1 (D-PAD left)"
    P1 = DAL.MICROBIT_ID_IO_P1,
    //% block="P2 (D-PAD right)"
    P2 = DAL.MICROBIT_ID_IO_P2,
    //% block="P8 (D-PAD down)"
    P8 = DAL.MICROBIT_ID_IO_P8,
    //% block="P12 (Y button)"
    P12 = DAL.MICROBIT_ID_IO_P12,
    //% block="P16 (X button)"
    P16 = DAL.MICROBIT_ID_IO_P16,
    //% block="P5 (A button)"
    P5 = DAL.MICROBIT_ID_IO_P5,
    //% block="P11 (B button)"
    P11 = DAL.MICROBIT_ID_IO_P11,
}

/**
 * The event raised by the SparkFun controller:bit pins
 */
//%
enum ControllerBitEvent {
    //% block="down"
    Down = DAL.MICROBIT_BUTTON_EVT_DOWN,
    //% block="up"
    Up = DAL.MICROBIT_BUTTON_EVT_UP,
    //% block="click"
    Click = DAL.MICROBIT_BUTTON_EVT_CLICK,
}

/**
 * Functions to operate the SparkFun controller:bit
 */
//% color=#f44242 icon="\uf11b"
namespace controllerbit {
	/**
	 * 
	 */
    //% shim=controllerbit::init
    function init(): void {
        return;
    }

	/**
	 * Determines if a button is pressed
	 * @param button the pin that acts as a button
	 */
    //% weight=89
    //% blockId=controllerbit_ispressed block="controller:bit %button|is pressed"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    export function isPressed(button: ControllerBitPin): boolean {
        const pin = <DigitalPin><number>button;
        pins.setPull(pin, PinPullMode.PullUp);
        return pins.digitalReadPin(<DigitalPin><number>button) == 0;
    }

	/**
	 * Registers code to run when a controller:bit event is detected.
	 */
    //% weight=90
    //% blockId=controllerbit_onevent block="controller:bit on %button|%event"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    //% event.fieldEditor="gridpicker" event.fieldOptions.columns=3
    export function onEvent(button: ControllerBitPin, event: ControllerBitEvent, handler: Action) {
        init();
        control.onEvent(<number>button, <number>event, handler); // register handler
    }
}

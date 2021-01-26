var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO







const arm = {

    activePins: {},

    activatePins: (pins) => {

        console.log('starting with ', pins, arm.activePins)
	for (let key in pins) {

           arm.activePins[key] = new Gpio(pins[key], 'out')

            console.log(arm.activePins[key] + ' is now active')

        } 

    },

    allPinsOff: () => {

        for (let pin in arm.activePins) {
            arm.activePins[pin].writeSync(0)

            console.log(arm.activatePins[pin] + ' is now off')

        }

    },

    pinOn: (pin) => {

        arm.activePins[pin].writeSync(1)

    },

    pinOff: (pin) => {

        arm.activePins[pin].writeSync(0)
    },

    pinReport: () => {

        console.log('active pins: ')

        for( let pin in arm.activePins) {

            console.log(arm.activePins[pin] + ' is active')

        }

    },

    testPin: (pin, time) =>{

        if (!arm.activePins[pin]) {

            console.log('no pin at this address')

            return false

        }

        arm.activePins[pin].writeSync(1)

        setTimeout( () => {

            arm.activePins[pin].writeSync(0)

        }, time)

    },

    baseTest: () => {

        console.log('base test passed')

        return true

    } 

}

module.exports = arm

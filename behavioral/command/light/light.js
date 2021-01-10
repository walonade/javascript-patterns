class Light {
    constructor() {
        this.isOn = false;
    }

    on() {
        this.isOn = true;
        console.log('On');
    }

    off() {
        this.isOn = false;
        console.log('Off');
    }

    toggle() {
        if (this.isOn) {
            this.off();
        } else {
            this.on();
        }
    }
}

module.exports = Light;
class LightCommand {
    constructor(light) {
        this.light = light;
    }

    execute() {
        this.light.toggle();
    }
}

module.exports = LightCommand;
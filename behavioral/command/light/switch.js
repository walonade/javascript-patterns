class Switch {
    constructor(onCommand, offCommand) {
        this.command = command;
    }

    on() {
        this.command.execute();
    }

    off() {
        this.command.execute();
    }
}

module.exports = Switch;
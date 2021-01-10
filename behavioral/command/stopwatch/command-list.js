class CommandList {
    constructor(...commands) {
        this.commands = commands;
    }

    add(command) {
        this.commands.push(command);
    }

    execute() {
        for (let command of commands) {
            command.execute();
        }
    }
}

const commandList = new CommandList();

commandList.add(startCommand, logCommand, printCommand);

Button.setCommand(commandList);
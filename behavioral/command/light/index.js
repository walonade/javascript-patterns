const Light = require('./light');
const LightCommand = require('./light-command');
const Switch = require('./switch');

const light = new Light();
const command = new LightCommand(light);
const lightSwitch = new Switch(command);

lightSwitch.on();
lightSwitch.on();
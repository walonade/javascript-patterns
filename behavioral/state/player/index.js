const Player = require('./player');

const player = new Player();

console.log(player.state);

player.on();

console.log(player.state);

player.play();

console.log(player.state);

player.pause();

console.log(player.state);

player.play();

console.log(player.state);

player.off();

console.log(player.state);
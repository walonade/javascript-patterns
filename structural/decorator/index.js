const drink = 'coffee';

function sugar(drink) {
    return `${drink} + sugar`;
}

function milk(drink) {
    return `${drink} + milk`;
}

console.log(drink);
console.log(sugar(drink));
console.log(milk(drink));
console.log(sugar(milk(drink)));
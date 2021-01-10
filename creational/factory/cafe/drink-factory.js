const Coffee = require('./coffee');
const Tea = require('./tea');

class DrinkFactory {
    static createDrink(type) {
        switch (type) {
            case 'coffee':
                return new Coffee();
            case 'tea':
                return new Tea();
        }
    }
}

module.exports = DrinkFactory;
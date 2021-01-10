const CoffeeFactory = require('./coffee-factory');
const TeaFactory = require('./tea-factory');

class DrinkFactory {
    static createFactory(type) {
        switch (type) {
            case 'coffee':
                return new CoffeeFactory();
            case 'tea':
                return new TeaFactory();
        }
    }
}

module.exports = DrinkFactory;
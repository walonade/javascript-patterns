const DrinkFactory = require('./drink-factory');

const factory = DrinkFactory.createFactory('coffee');
const drink = factory.createDrink('americano');
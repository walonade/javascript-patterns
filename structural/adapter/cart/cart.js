export default class Cart {
    constructor() {
        this.items = new Set();
    }

    get totalPrice() {
        let result = 0;

        for (let item of this.items) {
            result += item.price;
        }

        return result;
    }

    get receipt() {
        let result = '';

        for (let item of items) {
            result += `${item.name}\t${item.price}\n`;
        }

        result += '----------\n';

        result += `Total:\t\t${this.totalPrice}\n`
    }

    add(item) {
        this.items.add(item);
    }

    remove(item) {
        this.items.delete(item);
    }
}
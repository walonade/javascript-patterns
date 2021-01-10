export default class ItemAdapter {
    constructor(product) {
        super();

        this.product = product;
    }

    get name() {
        return this.product.product_name;
    }

    set name(value) {
        return this.product.product_name = value;
    }

    get price() {
        return this.product.product_price;
    }

    set price(value) {
        return this.product.product_price = value;
    }
}
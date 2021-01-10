import Cart from './cart.js';
import Product from './product.js';
import ItemAdapter from './item-adapter.js';

const cart = new Cart();

const product = new Product('iPhone', 500);

const item = new ItemAdapter(product);

cart.add(item);
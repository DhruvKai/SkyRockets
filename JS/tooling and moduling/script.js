//importing
// console.log('importing');
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// addToCart('bread', 5);
// console.log(price, tq);
import * as shoppingCart from './shoppingCart.js';

shoppingCart.addToCart('bread', 5);
console.log(shoppingCart.totalPrice);

//importing
// console.log('importing');
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// addToCart('bread', 5);
// console.log(price, tq);
// import * as shoppingCart from './shoppingCart.js';

// shoppingCart.addToCart('bread', 5);
// console.log(shoppingCart.totalPrice);

// import add, { cart } from './shoppingCart.js'; //we don't need to name default exprots
// //we can add multiple imports from same file, but it is not advised

// add('pizza', 5);
// add('pizza3', 5);
// add('pizza2', 5);
// console.log(cart); //it's not a copy but actual value

/////imporing lodash
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

// const state = {
//   cart: [
//     { product: 'bread', quantity: 5 },
//     { product: 'pizza', quantity: 5 },
//   ],
//   user: { loggedIn: true },
// };
// const stateClone = Object.assign({}, state);
// const stateDeepClone = cloneDeep(state);

// state.user.loggedIn = false;
// console.log(stateClone);

// console.log(stateDeepClone);

//Exporting module
// console.log(`exporting`);

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantiy) {
  cart.push({ product, quantiy });
  console.log(`${quantiy} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantiy = 23;

export { totalPrice, totalQuantiy as tq };

export default function (product, quantiy) {
  cart.push({ product, quantiy });
  console.log(`${quantiy} ${product} added to cart`);
}

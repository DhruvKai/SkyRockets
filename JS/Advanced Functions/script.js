'use strict';

//default parameters
/* const bookings = [];
const createBookings = function (flightNum, numPassengers = 1, price = 199) {
  //es5
  // numPassengers = numPassengers || 1;
  // price = price ||199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBookings('LH235');
createBookings('LH452', 2, '7000');
createBookings('LH452', undefined, '71000'); */

//higher order functions

/* const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split('');
  return [first.toUpperCase(), ...others].join('');
};
//higer order function
const transformer = function (str, fn) {
  console.log(`OG string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer('javascript is the best!', upperFirstWord);
transformer('javascript is the best!', oneWord);
 */
//fucntion returning fucntion
/* const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
//function returning function in arrow
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

const call = greet('Hi');
const callArr = greetArr('Hi');
greet('Hey')('Dhruv');
greetArr('Hey')('Dhruv'); */
/* call(`Dhruv`);
callArr(`Dhruv`); */

//call and apply method
// const book = function (flightNum, name) {
//   console.log(
//     `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//   );
//   this.bookings.push({ flight: `${this.iataCode} ${flightNum}${name}` });
// };

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
// };

// // lufthansa.book(239, `Dhruv`);
// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// // const book = lufthansa.book;
// // book(23, 'Dhruv'); does not work

// book.call(eurowings, 23, 'Dhruv');
// book.call(lufthansa, 24, `anil`);
// // console.log(eurowings.bookings);

// //apply

// const flightData = [583, 'Harnam'];
// book.apply(eurowings, flightData);
// console.log(eurowings);
// book.call(eurowings, ...flightData);

// //Bind

// const bookEW = book.bind(eurowings);
// const bookLF = book.bind(lufthansa);
// bookLF(44, `Deepak`);
// bookEW(23, `Dhruv`);

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23(`hritik`);

// //with event listerneer
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// //addVAT = value => value + value *0.23;
// console.log(addVAT(100));

// //with fucntion returning fucntion
// const addTaxRate = rate => value => value + value * rate;
// /* const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// }; */
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(23));
// console.log(addVAT2(100));

/* Coding Challenge #1
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?
The Complete JavaScript Course 21
Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section 😉
GOOD LUCK 😀 */
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n ${this.options.join('\n')}\n(Write option no.)`
//       )
//     );
//     // console.log(answer);
//     //short curcuiting
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     // console.log(this.answers);
//     this.displayResults();
//     this.displayResults(`string`);
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`poll results are ${this.answers.join(',')}`);
//     }
//   },
// };

// // poll.registerAnswer();
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerAnswer.bind(poll));

///immedaltly evoked function expression
// const runOnce = function () {
//   console.log(`this will never run again`);
// };
// runOnce(); //we can still call it again
// //paranthesis around the fucntion
// (function () {
//   console.log(`this will never run again`);
// })(); //called there again

// (() => {
//   console.log(`this is arrow function that will not run agian`);
//   const isPrivate = 10;
// })();

// // console.log(isPrivate); //unreachable
// //this is used to add private varables
// //but in es6 we can do it like this

// {
//   let priVar = 10;
// }

// // console.log(priVar);
// //IIFE this has some usecase

//closures. JS does it manually

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();
// booker();
// console.dir(booker); //look at internally properties (but we can't access them)
//secureBooking funciton has already executed and has vanished from the stack but we can still use the inner fucntion.
// it is because of clousres
// A function has access to the variable enorinment (VE) of execution context in which it was created, even after the execution context it gone. so Closure is - VE attached to the function, exactly as it was at the time and place the function was created.

//more defination of closure(informal)
//A closure gives a fucntion access to all the variable of its parent fucntion, even after that parent function has retuned(vanished from the stack). The fucntion keeps a refernce to its outer scope, which preserves the sope chain thoughout the time.
//(more infomal) A closure makes sure a fucntion doesn't loose connection to varable that existed at function's birth place;
//A closre is like a bagpack that a fucntion carries around. This bag has all the variable that were presnt in the envionment where the funciton was created. when it finds the variable is not avaibale it takes it out from the bag(though in reality the closure is given priority and is checked first)

//more examples of closure

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g(); //already finished execution
// f(); // a is inside bag of f

// //reassigning f function

// h();
// f();

// //example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`we are now  boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// boardPassengers(180, 3);

/* 
Coding Challenge #2
This is more of a thinking challenge than a coding challenge 🤓
Your tasks:
1. Take the IIFE below and at the end of the function, attach an event listener that
changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself (or someone around you) why this worked! Take all
the time you need. Think about when exactly the callback function is executed,
and what that means for the variables involved in this example. */

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';
//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();

'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
//displaying movemnts on left constianer about transactions
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; //set it first to empty

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type 
      movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
//calculating balances
const calBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, val) => acc + val, 0);

  labelBalance.textContent = `${acc.balance}€`;
};
//cal depsposits outs and intrests
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interest) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

//creating usernames
const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserName(accounts);
//fucntion to updateUI
const updateUI = function (acc) {
  //Diplay movements
  displayMovements(currentAccount.movements);

  //DIplay balance
  calBalance(currentAccount);

  //Display summary
  calcDisplaySummary(currentAccount);
};

//event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //prevent form from submitng
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receierAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount = blur();
  if (
    amount > 0 &&
    receierAcc &&
    currentAccount.balance >= amount &&
    receierAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receierAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //ADD movement
    currentAccount.movements.push(amount);
    //UpdateUI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

//close account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    //delete user
    accounts.splice(index, 1);
    //hide UI
    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername.value = '';
  blur(inputClosePin);
});

//sort button
let sorted = false; //keep track of sort
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2)); //does not change the original array
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -1));

// console.log(arr.slice());
// console.log([...arr]); //works the same if ... is enclosed in []

//Splice - it actually mutatues the original array, it deletes elements
// console.log(arr.splice()); //will not do anything
// console.log(arr.splice(2));
// console.log(arr);
// arr.splice(-1);
// console.log(arr);

//REVERSE
// let arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'k', 'l', 'm'];
// console.log(arr2.reverse());
// console.log(arr2); //mutates original array

// // concat

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //JOIN
// console.log(letters.join('-'));

//For each method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   //accessing the counter variable
//   if (movement > 0) {
//     console.log(`Movement: ${i} you depostied ${movement}`);
//   } else {
//     console.log(`Movement: ${i} you withdrew ${Math.abs(movement)}`);
//   }
// }

// //with foreach
// console.log(`----------for each--------`);
// movements.forEach(function (mov, i, arr) {
//   //mov is variable, i is index, arr is the whole array. Names are not important but the order is important
//   if (mov > 0) {
//     console.log(`Movement: ${i} you depostied ${mov}`);
//   } else {
//     console.log(`Movement: ${i} you withdrew ${Math.abs(mov)}`);
//   }
//   console.log(arr);
// });
//contiue and break statements don't work in for each if you want that you have to use traditional method of for

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// //for each for map

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
//   console.log(map);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   //2nd spot is empty as SET don't have index
//   console.log(`${value}`);
// });

// Coding Challenge #1
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// 🐶 ")
// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far 😉
// GOOD LUCK 😀

// const Julia = [3, 5, 2, 12, 7];
// const Kate = [4, 1, 15, 8, 3];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   const dogs = [...dogsJuliaCorrected, ...dogsKate];
//   console.log(dogs);

//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog no. ${i + 1} it and adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog no. ${i + 1} it a puppy, and is ${dog} years old`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

//MAP method it gives brand new array

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (val) {
//   return val * eurToUsd;
// });
// console.log(movements);
// console.log(movementsUSD);
// //with arrow function
// const movementsUSDArr = movements.map(val => val * eurToUsd);
// console.log(movements);
// console.log(movementsUSDArr);

// const movementDescription = movements.map((val, i) => {
//   if (val > 0) {
//     console.log(`Movement: ${i + 1} you depostied ${val}`);
//   } else {
//     console.log(`Movement: ${i + 1} you withdrew ${Math.abs(val)}`);
//   }
// });

//FILTER method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /* const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits); */

// const withdrawalsArr = movements.filter(mov => mov < 0);
// console.log(withdrawalsArr);

//reduce method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// //accumalator is like a snowball
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   //accumalator, currunt, index, array
//   console.log(`Itration no ${i + 1} the accumalator is ${acc}`);
//   return acc + cur;
// }, 0); //initial value of accumalator

// console.log(balance);

// const balanceArr = movements.reduce((acc, val) => acc + val, 0);
// console.log(balanceArr);

//max value with reduce
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const max = movements.reduce(
//   (acc, mov) => (acc > mov ? acc : mov),
//   movements[0]
// );

// console.log(max);

// Coding Challenge #2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK
// const age = [5, 2, 4, 1, 15, 8, 3];
// const calcAverageHumanAge = function () {
//   const calAge = age
//     .map(val => (val <= 2 ? 2 * val : 16 + val * 4))
//     .filter(val => val >= 18);
//   const avgAge = calAge.reduce((acc, val, i) => acc + val, 0) / age.length;

//   console.log(calAge);
//   console.log(avgAge);
// };
// calcAverageHumanAge();

// Coding Challenge #3
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK 😀
// const age = [5, 2, 4, 1, 15, 8, 3];
// const calcAverageHumanAge = val => {
//   const calcAge = age
//     .map(val => (val <= 2 ? 2 * val : 16 + val * 4))
//     .filter(val => val >= 18)
//     .reduce((acc, val, _, arr) => acc + val / arr.length, 0);
//   console.log(calcAge);
// };
// calcAverageHumanAge();

//find method - ony returns one element
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);

// //we can find also in objects
// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

//Some method = checks if any of them satisfy the conditon
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const anyDeposits = movements.some(move => move > 1500);
console.log(anyDeposits);
 */

//EVERY = checks all the elements
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const allDeposits = movements.every(mov => mov < 0);
// console.log(allDeposits);

// //FLAT
// const arr = [1, 2, 3, [4, 5, 6], 7, 8, 9];
// console.log(arr.flat()); //removed the nested array

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2)); //now goes 2 level deep

//FLAT MAP - maps and flats at the same time

// const overAllBalance = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(overAllBalance);

// const owners = ['jonas', 'Abby', 'drake'];
// console.log(owners.sort());

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);
// // compares two elements
// // return<0 , A,B (keep order)
// // return>0,B,A (switch order )
// //Accending order switch the return statemnets to switch to decending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// console.log(movements);
// //shortcut
// movements.sort((a, b) => a - b);
// console.log(movements);

//creating arrays
const x = new Array(7);
console.log(x); //creates empty array of 7 length

// x.fill(1); //will fill whole array with 1
x.fill(1, 3, 7); //2nd and 3rd are the positions
console.log(x);

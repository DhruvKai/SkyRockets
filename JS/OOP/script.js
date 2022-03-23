'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// //constructor fucntion has new keyword
// const jonas = new Person('Jonas', 1991);
// console.log(jonas);
// //1. New {} is created
// //2. function is called, this = {}
// //3. {} linked to prototype
// //4. function automatically return {}

// const Dhruv = new Person('Dhruv', 1999);
// console.log(Dhruv);

// //PROTOTYPES
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };

// jonas.calcAge();
// Dhruv.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype); //true
// //Person.prototype is the protype of not the PErson but of all the obejcts created by the person
// // .prototypeOfLnkedObjects
// Person.prototype.species = 'homo sepiens';
// console.log(jonas.species, Dhruv.species);

// console.log(jonas.__proto__.__proto__); //object.protype
// console.log(jonas.__proto__.__proto__.__proto__); //null

// const arr = [2, 2, 4, 4, 4, 4, 6, 72, 1, 6, 7];
// console.log(arr.__proto__); //Array's all functions like fill(), map(), reduce()
// console.log(arr.__proto__.__proto__); //obejcts
// console.log(arr.__proto__ === Array.prototype); //true

// //now we can create a unique() to check unique values

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique()); //will give unqiue values

// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h
// GOOD LUCK 😀

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}km per hour`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}km per hour`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('mercedes', 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();

//ES6 classes

//class fucntion
// const Personcl = class{}

//class declaration
// class PersonCl {
//   constructor(first, birthYear) {
//     this.first = first;
//     this.birthYear = birthYear;
//   }
//   calcAg() {
//     //this tym you can make fucntions inside the class
//     console.log(2022 - 1999);
//   }
// }

// const Dhruv = new PersonCl('Dhruv', 1999);
// Dhruv.calcAg();

// console.log(Dhruv.__proto__ === PersonCl.prototype);
//you can still make functions outside
/////////////////////////////////////////////////////////////
//1. classes are not hoisted (can't use them before they are delcared)
//2. They are first class citizens, they can be passed to fucntions and retured from funcitons becuase they really are just a special kind of function
//3. Classes are executed in strict mode

// const account = {
//   owner: 'Dhruv',
//   movements: [200, 250, 500],

//   get latest() {
//     return this.movements.slice(-1).pop(); //get latest movement
//   },

//   set latest(mov) {
//     //should have exactly 1 parameter
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

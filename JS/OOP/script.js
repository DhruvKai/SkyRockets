'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
//constructor fucntion has new keyword
const jonas = new Person('Jonas', 1991);
console.log(jonas);
//1. New {} is created
//2. function is called, this = {}
//3. {} linked to prototype
//4. function automatically return {}

const Dhruv = new Person('Dhruv', 1999);
console.log(Dhruv);

//PROTOTYPES
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

jonas.calcAge();
Dhruv.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); //true
//Person.prototype is the protype of not the PErson but of all the obejcts created by the person
// .prototypeOfLnkedObjects
Person.prototype.species = 'homo sepiens';
console.log(jonas.species, Dhruv.species);

console.log(jonas.__proto__.__proto__); //object.protype
console.log(jonas.__proto__.__proto__.__proto__); //null

const arr = [2, 2, 4, 4, 4, 4, 6, 72, 1, 6, 7];
console.log(arr.__proto__); //Array's all functions like fill(), map(), reduce()
console.log(arr.__proto__.__proto__); //obejcts
console.log(arr.__proto__ === Array.prototype); //true

//now we can create a unique() to check unique values

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique()); //will give unqiue values

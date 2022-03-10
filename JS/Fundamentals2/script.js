"use strict";

/* function logger() {
    console.log(`my name is jonas`);
}
// calling/running/involing fucntion
logger();
logger();
logger();
 */
/* function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(10, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));  */

//fcuntion declaration
/* function calAge(birthYear) {
    return 2022 - birthYear;
}

const age1 = calAge(1999); */

//fucntion expression
/* const calAge2 = function (birthYear) {
    return 2022 - birthYear;
} */

// const age2 = calAge(1998);
// console.log(age1, age2);

//Arrow function
/* const calAge3 = birthYear => 2022 - birthYear;
console.log(calAge3(1999));

const retireCal = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retire = 65 - age;
    return ` ${firstName} will retire in ${retire} years`
    // return retire;
}

console.log(retireCal(1999, "Dhruv")); */

// function call inside function
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);


    console.log(applePieces, orangePieces);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));

 */

///array and object
/* const year = new Array(10, 20, 40);
const friends = ['steve', 'john', 'kale'];
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
//we can mutatate array even if it is const as it is not primitiv data type
friends[3] = 'Jay';
console.log(friends);
 */

/* const age = birthYear => 2022 - birthYear;

const ageArr = [1999, 2000, 1998];
const age1 = age(ageArr[1]);
console.log(age1);

 */

/* const friends = ['steve', 'john', 'kale'];
friends.push('Faye');
console.log(friends);
friends.pop();
console.log(friends);


if (friends.includes('steve')) {
    console.log(`you have a friend steve`);
}

 */

//objects - used to group together, naming array elements

/* const Dhruv = {
    firstName: 'Dhruv',
    lastName: 'Kaith',
    age: 2022 - 1999,
    job: 'teacher',
    friends: ['Akhil', 'Madav']

};
console.log(Dhruv);
console.log(Dhruv.firstName); //dot notaion
console.log(Dhruv['lastName']); //bracket notaion
const namekey = 'Name';
console.log(Dhruv['first' + namekey]);
console.log(Dhruv['last' + namekey]);

 */
//objects can have function expression and not declaration
//this keyword
/* const Dhruv = {
    firstName: 'Dhruv',
    lastName: 'Kaith',
    birthYear: 1999,
    age: 2022 - 1999,
    job: 'teacher',
    friends: ['Akhil', 'Madav'],
    hasDriverLicense: true,
    /* calcAge: function () {
        // console.log(this);
        return 2022 - this.birthYear;
    } */
/*  calcAge: function () {
     // console.log(this);
     this.age = 2022 - this.birthYear;
     return this.age;
 }
};

console.log(Dhruv.age); */

//loop
/* 
for (let i = 1; i <= 10; i++) {
    console.log(`lifting weight! ${i} 🏋️ `);
} */
/* 
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-----starting exercise ${exercise} 🏋️ `);

    for (let rep = 1; rep < 4; rep++) {
        console.log(`-----starting rep ${rep}🏋️`);
    }
}
 */

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: prompt("Degrees C"),
  };
  //    console.table(measurement);
  console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//for of loop

/* const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item); */

//Spread operator ...
//old method
/* const Arr = [1, 2, 3];  
const badArr = [4, 5, 6, Arr[0], Arr[1], Arr[2]];
console.log(badArr);

//new method
const newArr = [4, 5, 6, ...Arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
//copy array
const mainMenu = [...restaurant.mainMenu];

//join 2 array

//const join = [...mainMenu, ...badArr];
const join = [...restaurant.starterMenu, ...mainMenu];
console.log(join);
//spread works on iterables- strings, arrays, SET,maps not objects

const str = 'Dhruv';
const letters = [...str, '', 'K.'];
console.log(letters);
console.log(...str);

//it now works with objects also
const newRestaurant = { foundedIn: 1999, ...restaurant, locationHead: 'India' };
console.log(newRestaurant);
 */

//opposite of spread is rest which is on the oposite side

/* const [a, b, ...others] = [1, 2, 3, 5, 6, 7, 8];
console.log(a, b, others); */

// ---------------Destructuring-------------------------
// const [first, second] = restaurant.categories;
/* let [first, , second] = restaurant.categories;
console.log(first, second);
//swaping variables
[first, second] = [second, first];
console.log(first, second);

//nested destructuring
let nested = [3, 5, [8, 9]];
const [x, , [y, z]] = nested;
console.log(x, y, z);
 */

/* Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK 😀 */

/* const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
 */

/* Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
GOOD LUCK 😀 */

/* const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1)
//looping over objects
for (let [i, player] of game.scored.entries()) {
  console.log(`goal ${i + 1}: ${player}`);
}

// 2)
let avg = 0;
const odds = Object.values(game.odds);
for (let odd of odds) {
  avg += odd;
}
avg /= odds.length;
console.log(avg);

// 3)
for (let [team, odd] of Object.entries(game.odds)) {
  const teamstr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamstr} is: ${odd}`);
}
 */
//SET
/* const orderSet = new Set(['pizza', 'pasta', 'pizza', 'ravioli']);
console.log(new Set('Dhruv'));

console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('pizza'));
// orderSet.clear();

for (let item of orderSet) console.log(item); */

//MAP

/* const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'italy');
console.log(rest.set(2, 'Portugal'));

const questions = new Map([
  ['question', 'best programming language'],
  [1, 'c'],
  [2, 'javascript'],
  ['correct', 2],
]);
console.log(questions);

for (const [i, item] of questions) {
  if (typeof i === 'number') console.log(`answer to Q${i} is ${item}`);
}
 */

/* 
Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17:
⚽ GOAL
GOOD LUCK 😀 */
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(92);
console.log(gameEvents);

//3
for (const [i, event] of gameEvents) {
  console.log(`An event happened, on ${i} min :${event}`);
}

//4
for (const [i, events] of gameEvents) {
  /* if (i > 45) {
    console.log(`[FIRST HALF]: ${i} ${events}`);
  } else {
    console.log(`{SECOND HALF]: ${i} ${events}`);
  } */
  console.log(
    i < 45 ? `[FIRST HALF]: ${i} ${events}` : `{SECOND HALF]: ${i} ${events}`
  );
  // console.log(i);
}

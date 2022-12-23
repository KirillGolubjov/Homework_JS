'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enchanced object literals
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ingredient1, ingredient2, ingredient3) {
    console.log(
      `Here is your delicious pasta with ${ingredient1}, ${ingredient2} and ${ingredient3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
///////////////////////////////////////
// Coding Challenge #4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    // const word = row.toLowerCase().trim().split('_');
    // const [first, second] = [...word];
    // const second2 = second[0].toUpperCase() + second.slice(1);
    // const output = `${first}${second2}`;
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    // console.log(output);

    console.log(`${output.padEnd(20)} ${'✅'.repeat(i + 1)}`);
  }
});

////////////////////////////////////////////////////
// // WORKING WITH STRINGS - Part 3

// // Split and join
// console.log('a+very+nice+string'.split('+'));
// console.log('Kirill Golubjov'.split(' '));

// const [firstName, lastName] = 'Kirill Golubjov'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));

//   // console.log(name[0].toUpperCase() + name.slice(1).toLowerCase());
//   // console.log(name[0].toUpperCase().split('') + name.slice(1).toLowerCase());
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('kirill golubjov');

// // Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '+').padEnd(30, '+'));
// console.log('Kirill'.padStart(20, '+').padEnd(30, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4).padStart(str.length, '*');
//   console.log(last);
//   // const last = str.slice(-4);
//   // return last.padStart(str.length, '*');
// };
// maskCreditCard(21246367);
// maskCreditCard(342356262626642);
// maskCreditCard('342356262624747');

// // Repeat

// const message2 = 'Bad weather... All Departures Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'!'.repeat(n)}`);
// };

// planesInLine(5);
////////////////////////////////////////////////////
// // WORKING WITH STRINGS - Part 2

// const airline = 'air Baltic Estonia';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// console.log('kirill'.toUpperCase());

// // Fix capitalization in name
// const passenger = 'nAdeZhDa'; // Nadezhda
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const correctPassengerName = function (name) {
//   const passengerLower = name.toLowerCase();
//   const passengerCorrect =
//     passengerLower[0].toUpperCase() + passengerLower.slice(1);
//   console.log(passengerCorrect);
// };
// correctPassengerName('vOlodIaka');
// correctPassengerName('kiRjuha');
// correctPassengerName('aleX');

// // Comparing email
// const email = 'kirillcnz@gmail.com';
// const loginEmail = '  Kirillcnz@Gmail.Com \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // replacing
// const priceEU = '288,97€';
// const priceUS = priceEU.replace('€', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replaceAll('door', 'gate'));

// console.log(announcement.replace(/door/g, 'gate'));

// // Booleans
// const plane = 'Airbus 320neo';
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the new airbus family');
// }

// // Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed on board');
//   } else {
//     console.log(`welcome aboard!`);
//   }
// };
// checkBaggage('I have a laptop, some Food and a pocker Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

////////////////////////////////////////////////////
// // WORKING WITH STRINGS - Part 1

// const airline = 'air Baltic Estonia';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[0]);

// console.log(airline.length);
// console.log('b737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Estonia'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' '))); // extract first word
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //extract last word

// console.log(airline.slice(-3)); //exract from the end
// console.log(airline.slice(1, -1)); // exract from the start and from the end

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log(`You got the middle seat...:(`);
//   } else console.log(`You got lucky!`);
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(typeof new String('jonas')); // When the operation is done, it is back to being a string.

// console.log(typeof new String('jonas').slice(1)); // It is here ^^

////////////////////////////////////////////////////
// // MAPS iteration
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Python'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct!'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// //Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

// //Convert map to array
// console.log([...question]);
// // console.log([question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

////////////////////////////////////////////////////
// // MAPS
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Tallinn, Estonia'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open!')
//   .set(false, 'We are closed!');

// // console.log(rest.get('name'));
// // console.log(rest.get(true));
// // console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

//////////////////////////////////
// //SETS
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
//   'Risotto',
// ]);
// console.log(ordersSet);
// console.log(new Set('Kirill'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlid Bread');
// ordersSet.add('Garlid Bread');
// ordersSet.delete('Risotto');
// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// //Example

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// console.log(new Set('kirillgolubjov').size);

// How I actually retrieve values out of a set?
// In sets there are no indexes!

// ///////////////////////////////////////////////////////////////////
// // Looping Objects: Object Keys, Values, and Entries

// // Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `The restauran is open ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// //Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entire OBJECT
// const entries = Object.entries(openingHours);
// console.log(entries);

// // [key, values]
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
// ////////////////////////////////////////////////////////////////
//Optional Chaining (?.)

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // console.log(restaurant.openingHours.mon.open);
// // WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.() ?? 'Method does not exist');

// // Arrays
// const users = [{ name: `Kirill`, email: `kirillcnz@gmail.com` }];
// // const users = [];
// console.log(users[0]?.name ?? 'User array empty');

// // Alternative to previous one
// if (users.length > 0) console.log(users[0].name);
// else console.log('User array empty');

// ////////////////////////////////////////////////////////////////
// //Looping Arrays: The for-of Loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// // console.log([...menu.entries()]);

// //////////////////////////////////////////////////
// // const rest1 = {
// //   name: 'Capri',
// //   // numGuests: 20,
// //   numGuests: 0,
// // };

// // const rest2 = {
// //   name: 'La Piazza',
// //   owner: 'Giovanni Rossi',
// // };

// // /////////////////////////////////////////////////////////////////
// // //Logical Assignment Operators
// // // So basically, what the logical and assignment operator does is to assign a value to a variable if it is currently truthy.

// // //OR assignment operator
// // // rest1.numGuests = rest1.numGuests || 10;
// // // rest2.numGuests = rest2.numGuests || 10;
// // // rest1.numGuests ||= 10;
// // // rest2.numGuests ||= 10;

// // // nullish assignment operator (null or undefined)
// // rest1.numGuests ??= 10;
// // rest2.numGuests ??= 10;

// // //AND assignment operator
// // // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // // rest2.owner = rest2.owner && '<ANONYMOUS>';
// // rest1.owner &&= '<ANONYMOUS>';
// // rest2.owner &&= '<ANONYMOUS>';

// // console.log(rest1);
// // console.log(rest2);
// /////////////////////////////////////////////////
// // The Nullish Coalescing Operator
// // restaurant.numGuests = 0;
// // const guests = restaurant.numGuests || 10;
// // console.log(guests);

// // // Nullish: null and undefined (NOT 0 or '')
// // const guestCorrect = restaurant.numGuests ?? 10;
// // console.log(guestCorrect);

// // console.log(`---- OR ----`);
// // // Use ANY data type, return ANY data type, short-circuiting
// // console.log(3 || 'Kirill');
// // console.log('' || 'Kirill');
// // console.log(true || 0);
// // console.log(undefined || null);

// // console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// // restaurant.numGuests = 0;
// // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guests1);

// // const guests2 = restaurant.numGuests || 10;
// // console.log(guests2);

// // console.log(`---- AND ----`);

// // console.log(0 && 'Jonas');
// // console.log(7 && 'Jonas');

// // console.log('Hello' && 23 && null && 'Kirill');

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza(`mushrooms`, `spinach`);
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// //The spread and rests syntax both look exactly the same, but they work in opposite ways, depending on where they are used.
// //So the spread operator is used where we would otherwise write values, separated by a comma.
// //On the other hand, the rest pattern is basically used where we would otherwise write variable names separated by commas.

// // 1) Destructuring
// //SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// //REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];

// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);
// //the rest syntax collects all the array after the last variable. It does not include any skipped elements.

// //Objects
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(sat, weekDays);

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('dough', 'salami', 'olives', 'tomato');
// restaurant.orderPizza('mushrooms');

// ////////////////////////////////////////////
// //The Spread Operator TODO (...)

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Kirill';
// const letters = [...str, '', 'G.'];
// console.log(letters);
// console.log(...str);

// // Real-world example
// const ingredients = [
//   // prompt("Let's make your pasta! Ingredient 1?"),
//   // prompt("Let's make pasta! Ingredient 2?"),
//   // prompt("Let's make pasta! Ingredient 3?"),
// ];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// // Objects

// const newRestaurant = { foundedIn: 2005, ...restaurant, founder: 'Rocco' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Pizza Squad';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// // DESCTUCTURING OBJECT TODO {}
// restaurant.orderDelivery({
//   time: '12:05',
//   address: 'Paepargi 41-3',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Tuha 7-2',
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// /////////////////////////////////////////
// // DESCTUCTURING ARRAYS TODO []

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(3, 1);
// console.log(starter, mainCourse);

// //Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values
// const [p = 1, q = 1, r = 1] = [8, 2];
// console.log(p, q, r);

// // This can be useful, when we get data from an API.

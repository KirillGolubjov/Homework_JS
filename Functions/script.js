'use strict';

/////////////////////////////////////////////////////////////
// // Default Parameters
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //  // S5
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('AH350');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 3);
// createBooking('LH123', 4);
// createBooking('LH123', undefined, 1000);

/////////////////////////////////////////////////////////////
// // How Passing Arguments Works: Value vs. Reference
// const flight = 'LH234';
// const kirill = {
//   name: 'Kirill Golubjov',
//   passport: 39004132236,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH199';
//   passenger.name = 'MR.' + passenger.name;

//   if (passenger.passport === 39004132236) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// // checkIn(flight, kirill);
// // console.log(flight);
// // console.log(kirill);

// // // Is the same as doing...
// // const flightNum = flight;
// // const passenger = kirill;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000);
// };

// newPassport(kirill);
// checkIn(flight, kirill);

/////////////////////////////////////////////////////
// // Functions Accepting Callback Functions
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log('👋');
// };
// document.body.addEventListener('click', high5);

// ['Kirill', 'Nadya', 'Misha'].forEach(high5);

// const allWords = function (str) {
//   return str.toUpperCase();
// };

// const lastWord = function (str) {
//   const [a, b, c] = str.split(' ');
//   return [a, b, c.toUpperCase()].join(' ');
// };

// const trans = function (str, fn) {
//   console.log(`original string: ${str}`);
//   console.log(`another string: ${fn(str)}`);
//   console.log(`mutated string: ${fn.name}`);
// };

// trans('we have lastword', lastWord);

/////////////////////////////////////////////////////
// // Functions Returning Functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Kirill');
// greeterHey('Steven');

// greet('Hello')('Kirill');

// //Challenge
// const greetArr = greeting => nickname => console.log(`${greeting} ${nickname}`);
// greetArr('Yo')('Chepa');

// const farewell = bye => {
//   return nickname => {
//     console.log(`${bye} ${nickname}!`);
//   };
// };

// const gBye = farewell('Bye');
// gBye('Serz');
// farewell('Bye bye')('my friend');

///////////////////////////////////////////////////////////////////////////////
// // The call and apply Methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function (){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Kirill Golubjov');
lufthansa.book(635, 'Nadezhda Volokitina');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT Work
//book(23, 'Anton Golubjov');

// Call method
book.call(eurowings, 23, 'Antonina Golubjova');
console.log(eurowings);

book.call(lufthansa, 239, 'Aleksandr Golubjov');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 283, 'Anton Golubjov');
console.log(swiss);

// Apply method
const flightData = [583, 'Suzanna Ovcharkovich'];
book.apply(swiss, flightData);

console.log(swiss);

book.call(swiss, ...flightData); // same is .apply method

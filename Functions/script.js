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
const flight = 'LH234';
const kirill = {
  name: 'Kirill Golubjov',
  passport: 39004132236,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH199';
  passenger.name = 'MR.' + passenger.name;

  if (passenger.passport === 39004132236) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, kirill);
// console.log(flight);
// console.log(kirill);

// // Is the same as doing...
// const flightNum = flight;
// const passenger = kirill;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(kirill);
checkIn(flight, kirill);

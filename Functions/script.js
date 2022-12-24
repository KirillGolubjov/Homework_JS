'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //  // S5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('AH350');
createBooking('LH123', 2, 800);
createBooking('LH123', 3);
createBooking('LH123', 4);
createBooking('LH123', undefined, 1000);

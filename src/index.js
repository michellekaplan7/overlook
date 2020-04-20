import $ from 'jquery';
import ApiController from './api-controller';
import Hotel from './Hotel.js';
import Guest from './Guest.js';
import Manager from './Manager.js';
import Booking from './Booking.js';
import Room from './Room.js';
import domUpdates from './dom-updates.js';

import './css/base.scss';

let api = new ApiController();
let guest;
let manager;
let hotel;


const fetchData = () => {
  let guestsData = api.getGuestsData();
  let roomsData = api.getRoomsData();
  let bookingsData = api.getBookingsData();

  Promise.all([guestsData, roomsData, bookingsData])
    .then(finalValues => {
      hotel = new Hotel(new Date(), finalValues[0].users, finalValues[1].rooms, finalValues[2].bookings);
      hotel.getTodaysDate();
      console.log(hotel)
      console.log(finalValues)
      if (document.location.pathname === '/guest.html') {
        welcomeGuest();
        domUpdates.displayGuestTotalAmounts(hotel.rooms, guest);
        getGuestBookingHistory()
      }
    }).catch(error => console.log(error.message))

}


//EVENT LISTENERS
$('.sign-in-button').on('click', logIn);
$('.logout').on('click', logOut);


function logIn() {
  // event.preventDefault();
  let arr = $('#username').val().split('r');
  console.log(arr)
  let guestID = Number(arr[1]);

  if (guestID > 50) {
    domUpdates.showLoginErrorMessage();
  }

  else if ($('#username').val() === 'manager' && $('#password').val() === 'overlook2020') {
    window.location = './manager.html';
  } else if ($('#username').val().includes('customer') && $('#password').val() === 'overlook2020') {
    storeIDLocalStorage();
    window.location = './guest.html';

  } else if (($('#username').val() !== 'manager' ||
  $('#password').val() === 'overlook2020') ||
  !$('#username').val().includes('customer')) {
    $('#username').val('');
    $('#password').val('');
    domUpdates.showLoginErrorMessage();
  }
}

function storeIDLocalStorage() {
  let arr = $('#username').val().split('r');
  let guestID = arr[1];
  window.localStorage.setItem('id', guestID);
}


function logOut() {
  domUpdates.showLogIn();
}

function welcomeGuest() {
  let guestID = Number(window.localStorage.getItem('id'));
  let name = hotel.findCurrentGuest(guestID);
  let obj = {
    id: guestID,
    name: name.name,
  }
  guest  = new Guest(obj, hotel.findGuestBookings(guestID));
  console.log('guest', guest)
  console.log('guest.myBookings', guest.myBookings)

  domUpdates.displayGuestNameWelcome(guest);
}

function getGuestBookingHistory() {
  const result = guest.myBookings.map(booking => {
    let bookedHistory = {};
    bookedHistory.roomNumber = booking.roomNumber;
    bookedHistory.date = booking.date;
    return bookedHistory
  })
  result.forEach(booking => {
    $('.customerview-booking-cards-container').append(
      `<div class="customerview-booking-card">
      <p class="customerview-booking-card-info">Room Number: ${booking.roomNumber} </p>
      <p class="customerview-booking-card-info">Date: ${booking.date} </p>
      </div>`
    )
  })
}



fetchData()

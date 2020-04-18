import $ from 'jquery';
import './css/base.scss';
import ApiController from './api-controller';
import domUpdates from './dom-updates.js';
import Guest from './Guest.js';
import Booking from './Booking.js'

let api = new ApiController();
let guest = new Guest(guestData, bookingsData);
let booking;


const fetchData = () => {
  let bookingsData = api.getBookingsData();
  let roomsData = api.getRoomsData();

  Promise.all([bookingsData, roomsData])
    .then(finalValues => {
      let bookingsData = finalValues[0];
      let roomsData = finalValues[1];
      console.log(finalValues)
    }).catch(error => console.log(error.message))
}

const fetchUsers = () => {
  let guestData = api.getGuestsData();

  Promise.resolve(guestData)
  .then(data => {
    console.log(data)
  })
}


$('.sign-in-button').click(function() {
  console.log($('#password').val())
  if (($('#username').val()) === '' && ($('#password').val()) === '') {
    domUpdates.displayEmptyFieldsErrorMessage()
  } if (($('#username').val()) === '' && ($('#password').val())) {
    domUpdates.displayMissingUsername()
  } if (($('#username').val()) && ($('#password').val()) === '') {
    domUpdates.displayMissingPassword()
  } if (($('#username').val()) === 'manager' && ($('#password').val()) !== 'overlook2020') {
    domUpdates.displayIncorrectEntry()
  } if (($('#username').val()) !== 'manager' && ($('#password').val()) === 'overlook2020') {
    domUpdates.displayIncorrectEntry()
  } if (($('#username').val()) === 'manager' && ($('#password').val()) === 'overlook2020') {
    domUpdates.displayManagerDashboard()
    fetchData();
  }
});

$('.logout').click(function() {
    domUpdates.displayLogin();
});


fetchUsers()

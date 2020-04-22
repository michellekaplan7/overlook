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
        getGuestBookingHistory();
      } else if (document.location.pathname === '/manager.html') {
        welcomeManager();
        getKPIs();
        getGuestInfo();
      }
    }).catch(error => console.log(error.message))

}


//EVENT LISTENERS
$('.sign-in-button').on('click', logIn);
$('.logout').on('click', logOut);
$('.submit-date').on('click', searchRooms);
$('.submit-filter').on('click', filterRoomResults);
$('.search-guest-button').on('click', getGuestInfo);
$('.find-bookings-to-delete-button').on('click', findBookingToDelete)



function logIn() {
  let arr = $('#username').val().split('r');
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

//------------------------GUEST DASHBOARD------------------------------------

function welcomeGuest() {
  let guestID = Number(window.localStorage.getItem('id'));
  let name = hotel.findCurrentGuest(guestID);
  let obj = {
    id: guestID,
    name: name.name,
  }
  guest  = new Guest(obj, hotel.findGuestBookings(guestID));
  domUpdates.displayGuestNameWelcome(guest);
}

function getGuestBookingHistory() {
  const result = guest.myBookings.map(booking => {
    let bookedHistory = {};
    bookedHistory.id = booking.id;
    bookedHistory.roomNumber = booking.roomNumber;
    bookedHistory.date = booking.date;
    return bookedHistory
  })
  result.forEach(booking => {
    $('.customerview-booking-cards-container').append(
      `<div class="customerview-booking-card">
      <p class="customerview-booking-card-info">Booking ID: ${booking.id} </p>
      <p class="customerview-booking-card-info">Room Number: ${booking.roomNumber} </p>
      <p class="customerview-booking-card-info">Date: ${booking.date} </p>
      </div>`
    )
  })
}

function searchRooms() {
  let selectedDate = $('#date').val().split('-').join('/')
  let availableRoomsByDate = hotel.findRoomsAvailableByDate(selectedDate, hotel.rooms, hotel.bookings)

  domUpdates.displayRoomsAvailableByDateSelected(availableRoomsByDate);
  if (document.location.pathname === '/guest.html') {
    $('.book-button').on('click', guestAddBooking);
  } else {
    $('.book-button').on('click', managerAddBooking);
  }
  return availableRoomsByDate
}

function filterRoomResults() {
  let availableRoomsByDate = searchRooms()
  let filterType = $('#roomtype-select').val().split('-').join(' ')
  let filteredRooms = availableRoomsByDate.filter(room => room.roomType === filterType)

  domUpdates.displayRoomsAvailableByDateSelected(filteredRooms);
  if (document.location.pathname === '/guest.html') {
    $('.book-button').on('click', guestAddBooking);
  } else {
    $('.book-button').on('click', managerAddBooking);
  }
}


function guestAddBooking(e) {
  let selectedDate = $('#date').val().split('-').join('/')
  let roomNumber = e.target.parentNode.parentNode.dataset.id

  guest.bookARoom(guest.id, selectedDate, roomNumber)
  e.target.parentNode.parentNode.remove()
}


//------------------------MANAGER DASHBOARD------------------------------------

function welcomeManager() {
  manager = new Manager();
  domUpdates.displayManagerNameWelcome(manager);
}

function getKPIs() {
  getTodaysRevenue();
  getPercentageRoomsOccupied();
  getRoomsAvailable();
}

function getTodaysRevenue() {
  let revenue = manager.calculateTotalRevenueForToday(hotel.bookings, hotel.rooms, hotel.date).toFixed(2);
  domUpdates.displayRevenue(revenue);
}

function getPercentageRoomsOccupied() {
  let percentOccupied = manager.calculatePercentageOfRoomsOccupiedForToday(hotel.bookings, hotel.rooms, hotel.date).toFixed(0);
  domUpdates.displayPercentageRoomsOccupied(percentOccupied);
}

function getRoomsAvailable() {
  let roomsAvailable = hotel.findRoomsAvailableByDate().length;
  domUpdates.displayNumberOfRoomsAvailable(roomsAvailable);
}


function getGuestInfo() {
  let searchedName = $('#searchbar').val().toLowerCase();
  let matchedName = hotel.guests.find(user => {
    let foundUser;
    if (user.name.toLowerCase().split(' ')[0] === searchedName) {
      foundUser = user;
    } else if (user.name.toLowerCase().split(' ')[1] === searchedName) {
      foundUser = user;
    }
    return foundUser;
  })
  let matchedNameID = matchedName.id;
  let matchedNameBookings = hotel.findGuestBookings(matchedNameID);

  guest = new Guest({id: matchedNameID, name: matchedName.name}, matchedNameBookings)
  $('.customer-details').attr('data-id', guest.id)
  domUpdates.displaySearchedGuestInfo(guest, hotel.rooms);
  domUpdates.displaySearchedGuestBookings(guest)
  return guest;
}

function managerSearchRooms() {
  let selectedDate = $('#date').val().split('-').join('/')
  let availableRoomsByDate = hotel.findRoomsAvailableByDate(selectedDate, hotel.rooms, hotel.bookings)

  domUpdates.displayRoomsAvailableByDateSelected(availableRoomsByDate);
  $('.managerview-book-button').on('click', managerAddBooking);
  return availableRoomsByDate
}

function managerFilterRoomResults() {
  let availableRoomsByDate = searchRooms()
  let filterType = $('#roomtype-select').val().split('-').join(' ')
  let filteredRooms = availableRoomsByDate.filter(room => room.roomType === filterType)

  domUpdates.displayRoomsAvailableByDateSelected(filteredRooms);
  $('.managerview-book-button').on('click', managerAddBooking);
}


function managerAddBooking(e) {
  let selectedDate = $('#date').val().split('-').join('/')
  let roomNumber = e.target.parentNode.parentNode.dataset.id

  manager.bookARoom($('.customer-details').attr('data-id'), selectedDate, roomNumber)
  e.target.parentNode.parentNode.remove()
}

function findBookingToDelete() {
  console.log(guest);
  domUpdates.displayBookingsToDelete(guest)

//   When click on delete a booking, gather all guest bookings for CURRENT guest  //  [guestBookings]
//  Filter those bookings by comparing the date of the bookings to todays date. // [guestBookings.filter]
// If the booking date is greater than todays date {
// 	return booking
// }
}




fetchData()

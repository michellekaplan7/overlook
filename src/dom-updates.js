import $ from 'jquery';
import Guest from './Guest.js';
import Manager from './Manager.js';

let domUpdates = {
  showLoginErrorMessage() {
    $('.login-error-message').text(`*Invalid login information. Please try again.*`)
  },

  showLogIn() {
    window.location = './index.html';
  },

  displayGuestTotalAmounts(rooms, guest) {
    $('#customerview-total-amount-spent').text(`Total Amount Spent $${guest.calculateTotalAmountSpent(rooms).toFixed(2)}`)
  },

  displayGuestNameWelcome(guest) {
    $('.customer-welcome').text(`Welcome back ${guest.name}!`);
  },

  displayManagerNameWelcome(manager) {
    $('.manager-welcome').text(`Hello ${manager.username}!`);
  },

  displayRevenue(revenue) {
    $('.total-revenue').text('$' + revenue);
  },

  displayPercentageRoomsOccupied(percentOccupied) {
    $('.total-percent-occupied').text(percentOccupied + '%')
  },

  displayNumberOfRoomsAvailable(roomsAvailable) {
    $('.total-rooms-available').text(roomsAvailable)
  },

  displayRoomsAvailableByDateSelected(searchedRooms) {
    $('.customerview-make-bookings-container').html('')
    searchedRooms.forEach(room => {
      $('.customerview-make-bookings-container').append(
        `<div data-id="${room.number}" class="customerview-room-details-card">
        <p class="customerview-room-details-info">Room Number: ${room.number} </p>
        <p class="customerview-room-details-info">Room Type: ${room.roomType} </p>
        <p class="customerview-room-details-info">Bed Type: ${room.bedSize} </p>
        <p class="customerview-room-details-info">Number of Beds: ${room.numBeds} </p>
        <p class="customerview-room-details-info">Bidet: ${room.bidet} </p>
        <p class="customerview-room-details-info">Cost Per Night: ${room.costPerNight} </p>
        <div class="customerview-book-button-container">
        <button type="button" class="customerview-book-button">BOOK</button>
        </div>
        </div>`
      )
      // $('.customerview-book-button').on('click', guestAddBooking);
    })
  },

}


export default domUpdates;

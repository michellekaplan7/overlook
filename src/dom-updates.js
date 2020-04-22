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
    $('.make-bookings-container').html('')
    if (searchedRooms.length === 0) {
        $('.make-bookings-container').prepend(`<p class="search-error-message">We're sorry, there are no rooms available for these search parameters. Please adjust your room search.</p>`);
        return
    }
    searchedRooms.forEach(room => {
      $('.make-bookings-container').append(
        `<div data-id="${room.number}" class="room-details-card">
        <p class="room-details-info">Room Number: ${room.number} </p>
        <p class="room-details-info">Room Type: ${room.roomType} </p>
        <p class="room-details-info">Bed Type: ${room.bedSize} </p>
        <p class="room-details-info">Number of Beds: ${room.numBeds} </p>
        <p class="room-details-info">Bidet: ${room.bidet} </p>
        <p class="room-details-info">Cost Per Night: ${room.costPerNight} </p>
        <div class="book-button-container">
        <button type="button" class="book-button">BOOK</button>
        </div>
        </div>`
      )
    })
  },

  displaySearchedGuestInfo(guest, rooms) {
    $('.customer-booking-history').html('')
    $('.customer-booking-history').append(
      `<div class="customer-booking-header">
        <p data-id=${guest.id} class="customer-heading">${guest.name}</p>
        <p class="customer-heading">Booking History</p>
        <p class="customer-heading">Total Amount Spent $${guest.calculateTotalAmountSpent(rooms).toFixed(2)}</p>
      </div>`
    )
  },

  displaySearchedGuestBookings(guest) {
    const result = guest.myBookings.map(booking => {
      let bookedHistory = {};
      bookedHistory.id = booking.id;
      bookedHistory.roomNumber = booking.roomNumber;
      bookedHistory.date = booking.date;
      return bookedHistory
    })
    result.forEach(booking => {
      $('.booking-cards-container').append(
        `<div class="booking-card">
        <p class="booking-card-info">Booking ID: ${booking.id} </p>
        <p class="booking-card-info">Room Number: ${booking.roomNumber} </p>
        <p class="booking-card-info">Date: ${booking.date} </p>
        </div>`
      )
    })
  },

  // displaySearchErrorMessage() {
  //   $('.search-error-message').removeClass('hidden');
  // },

}


export default domUpdates;

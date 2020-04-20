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

  displayRoomsAvailable(roomsAvailable) {
    $('.total-rooms-available').text(roomsAvailable)
  },

}


export default domUpdates;

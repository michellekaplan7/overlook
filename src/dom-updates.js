import $ from 'jquery'
import Guest from './Guest.js'

let domUpdates = {
  showLoginErrorMessage() {
    $('.login-error-message').text(`*Invalid login information. Please try again.*`)
  },

  showLogIn() {
    window.location = './index.html';
  },

  displayGuestTotalAmounts(rooms, guest) {
    $('#customerview-total-amount-spent').text(`Total Amount Spent $${guest.calculateTotalAmountSpent(rooms)}`)
  },

}


export default domUpdates;


// function getCustomerTotalAmountSpent(roomData) {
//   console.log(total)
//   let total = guest.calculateTotalAmountSpent(roomData)
//   $('#customerview-total-amount-spent').text(`Total Amount Spent ${total}`)
// }

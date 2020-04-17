import $ from 'jquery'

let domUpdates = {
  displayEmptyFieldsErrorMessage() {
    $('.login-error-message').text(`*Both fields are required*`)
  },

  displayMissingPassword() {
    $('.login-error-message').text(`*A password is required*`)
  },

  displayMissingUsername() {
    $('.login-error-message').text(`*A username is required*`)
  },
}


export default domUpdates;

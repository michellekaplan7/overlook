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

  displayIncorrectEntry() {
    $('.login-error-message').text(`*Either the username or password is incorrect. Please try again.*`)
  },

  // displayManagerDashboard() {
  //   $('nav').removeClass('hidden');
  //   $('.manager-dashboard-container').removeClass('hidden');
  //   $('main').addClass('hidden');
  // },

  // displayLogin() {
  //   $('nav').addClass('hidden');
  //   $('.manager-dashboard-container').addClass('hidden');
  //   $('main').addClass('main');
  // }
}


export default domUpdates;

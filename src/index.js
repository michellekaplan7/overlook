import $ from 'jquery';
import './css/base.scss';
import ApiController from './api-controller';
import domUpdates from './dom-updates.js'

let api = new ApiController();


const fetchData = () => {
  let bookingsData = api.getBookingsData();
  let roomsData = api.getRoomsData();

  Promise.all([bookingsData, roomsData])
    .then(finalValues => {
      let bookingsData = finalValues[0];
      let roomsData = finalValues[1];
    }).catch(error => console.log(error.message))
}

const fetchUsers = () => {
  let guestData = api.getGuestsData();

  Promise.resolve(guestData)
  .then(data => {
    console.log(data)
  })
}


$( ".sign-in-button" ).click(function() {
  console.log($('#password').val())
  if (($('#username').val()) === '' && ($('#password').val()) === '') {
    domUpdates.displayEmptyFieldsErrorMessage()
  } if (($('#username').val()) === '' && ($('#password').val())) {
    domUpdates.displayMissingUsername()
  } if (($('#username').val()) && ($('#password').val()) === '') {
    domUpdates.displayMissingPassword()
  }
});


fetchUsers()
fetchData();

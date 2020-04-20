import $ from 'jquery';
import Guest from './Guest.js';
import Hotel from './Hotel.js';

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

  // getGuestBookingHistory(guest) {
  //   const result = guest.myBookings.map(booking => {
  //     let bookedHistory = {};
  //     bookedHistory.roomNumber = booking.roomNumber;
  //     bookedHistory.date = booking.date;
  //     return bookedHistory
  //   })
  //   result.forEach(booking => {
  //     $('.customerview-booking-cards-container').append(
  //       `<div class="customerview-booking-card">
  //       <p class="customerview-booking-card-info">Room Number: ${booking.roomNumber} </p>
  //       <p class="customerview-booking-card-info">Date: ${booking.date} </p>
  //       </div>`
  //     )
  //   })
  // },

}


export default domUpdates;
//
// function generateBookingHistory(arrayOfBookings) {
//   arrayOfBookings.sort((a, b) => {
//     if (b.date < a.date) {
//       return -1
//     } else if (b.date > a.date) {
//       return 1
//     }
//   });
//
//   arrayOfBookings.forEach((obj, index) => {
//     $('.customer-booking-history-div').append(`
//   <div class="history-results-card" tabindex='${index}'>
//   <div class='history-room-card-div'>
//       <h3 class="history-roomnum-card-h3">Room Num: ${obj.roomNumber}</h3>
//   </div>
//   <div class='history-date-card-div'>
//       <h3 class='history-date-card-h3'>${obj.date}</h3>
//   </div>
//   `)
//   });
// }

//
// const displayRecipes = (recipeArray) => {
//   recipeArray.map(recipe => {
//     recipesContainer.innerHTML += `
//     <div class="recipe-card">
//       <section class="recipe-title-container">
//         <h4 class="recipe-title">${recipe.name}</h4>
//       </section>
//       <section class="recipe-image-container">
//         <img class="recipe-image" src="${recipe.image}" />
//       </section>
//       <section class="recipe-buttons">
//         <button class="recipe-button fav"><img data-id="${recipe.id}" class="empty-heart filled-heart" src="assets/unfavorited.svg" alt="unfilled in heart"></button>
//         <button class="recipe-button cook"><img data-id="${recipe.id}" class="toCook not-to-cook" src="assets/not_added_to_cook.svg" alt="unfilled in silverware"></button>
//         </section>
//         </div>`
//   })
// }

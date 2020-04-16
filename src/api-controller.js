class ApiController {
  constructor() {
    this.rootUrl = "https://fe-apps.herokuapp.com/api/v1/overlook/1904"
  }

  getGuestsData() {
    let url = `${this.rootUrl}/users/users`
    return fetch(url).then(response => response.json());
  }

  getBookingsData() {
    let url = `${this.rootUrl}/bookings/bookings`
    return fetch(url).then(response => response.json());
  }

  getRoomsData() {
    let url = `${this.rootUrl}/rooms/rooms`
    return fetch(url).then(response => response.json());
  }

//   postBooking(id, userID, date, roomNumber, roomServiceCharges) {
//   let bookingObject = {
//     "id": Number(id),
//     "userID": Number(userID),
//     "date": (date),
//     "roomNumber": Number(roomNumber),
//     "roomServiceCharges": (roomServiceCharges)
//   }
//   let url = `${this.rootUrl}/bookings/bookings`;
//   return fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(bookingObject),
//   })
//     .then(response => console.log(response.json()))
//     .catch(err => console.log(err.message));
// }

}

export default ApiController;

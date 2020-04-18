class Guest {
  constructor(guestDetails, bookingsData) {
    this.id = guestDetails.id;
    this.name = guestDetails.name;
    this.myBookings = bookingsData;
  }

  getFirstName() {
    let firstName = this.name.split(' ', 1).join();
    return firstName;
  }

  bookARoom(userID, date, roomNumber) {
    let bookingObject = {
      "userID": Number(userID),
      "date": (date),
      "roomNumber": Number(roomNumber),
    }
    let url = 'https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings';
    return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingObject),
      })
      .then(response => console.log(response.json()))
      .catch(err => console.log(err.message));
  }

  calculateTotalAmountSpent(roomData) {
    return this.myBookings.map(booking => {
      let cost;
      roomData.forEach(room => {
        if (booking.roomNumber === room.number) {
          cost = room.costPerNight;
        }
      })
      return cost;
    })
    .reduce((acc, cost) => {
      acc += cost
      return acc
    }, 0)
  }


}

export default Guest;

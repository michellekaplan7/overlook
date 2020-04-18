class Manager {
  constructor(id = 'manager', username = 'Michelle') {
    this.id = id;
    this.username = username;
  }

  deleteBooking(id) {
    let deleteBookingObject = {
      id: Number(id),
    }
    let url = `${this.rootUrl}/bookings/bookings`;
    return fetch(url, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(deleteBookingObject)
    })
      .catch(error => console.log(err.message));
  }

  bookARoom(userID, date, roomNumber) {
    let bookingObject = {
      "userID": Number(userID),
      "date": (date),
      "roomNumber": Number(roomNumber),
    }
    let url = `${this.rootUrl}/bookings/bookings`;
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

  calculateTotalRevenueForToday(bookingsData, roomsData, todaysDate) {
    let todaysBookings = bookingsData.filter(booking => booking.date === todaysDate)
    let revenue = todaysBookings.reduce((acc, bookedRoom) => {
      roomsData.forEach(room => {
        if(room.number === bookedRoom.roomNumber) {
          acc += room.costPerNight
        }
      })

      return acc
    }, 0)
    return Number(revenue.toFixed(2));
  }

  calculatePercentageOfRoomsOccupiedForToday(bookingsData, roomsData, todaysDate) {
    let todaysBookingsLength = bookingsData.filter(booking => booking.date === todaysDate).length;
    let percentageOfRoomsOccupiedToday = (todaysBookingsLength / roomsData.length) * 100;
    return percentageOfRoomsOccupiedToday;
  }


}

export default Manager;

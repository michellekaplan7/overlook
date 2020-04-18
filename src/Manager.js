class Manager {
  constructor(id = 'manager', username = 'Michelle') {
    this.id = id;
    this.username = username;
  }

  deleteBooking() {
    //call ApiController deleteBooking(id)
  }

  addBooking() {
    //call bookARoom(userID, date, roomNumber) from ApiController class??
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

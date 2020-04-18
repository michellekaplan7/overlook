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

  addBooking() {
    //call bookARoom() from ApiController class??
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

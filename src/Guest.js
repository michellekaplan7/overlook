class Guest {
  constructor(guestDetails, bookingsData) {
    this.id = guestDetails.id;
    this.name = guestDetails.name;
    this.myBookings = this.findMyBookings(guestDetails, bookingsData)
  }

  getFirstName() {
    let firstName = this.name.split(' ', 1).join();
    return firstName;
  }

  findMyBookings(guestDetails, bookingsData) {
    console.log('bookingsData', bookingsData)
    let myBookings = [];

  }

  bookARoom() {

  }

  calculateTotalAmountSpent() {

  }

  filterByRoomType() {

  }

}

export default Guest;


// -Look into/iterate over bookings data, and
// filter the current usersID, which is bookings.userID.
// Then, grab that roomNumber, which is bookings.roomNumber
// and iterate through the rooms data to find that associated
// room number which is rooms.number.
// -Then, display that room information (potentially without
//   the number) and potentially pulling in the date for that
//   room which is found in bookings at bookings.date.

class Booking {
  constructor(bookingDetails) {
    this.id = bookingDetails.id;
    this.userID = bookingDetails.userID;
    this.date = bookingDetails.date;
    this.roomNumber = bookingDetails.roomNumber;
    this.roomServiceCharges = bookingDetails.roomServiceCharges;
  }
}

export default Booking;

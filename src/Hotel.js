class Hotel {
  constructor(date, guests, rooms, bookings) {
    this.date = date;
    this.guests = guests;
    this.rooms = rooms;
    this.bookings = bookings;
  }

  filterByRoomType(type) {
    return this.rooms.filter(room => type === room.roomType);
  }

  findCurrentGuest(id) {
    return this.guests.find(guest => guest.id === id);
  }

  findGuestBookings(id) {
    return this.bookings.filter(booking => id === booking.userID);
  }

  getTodaysDate() {
    let date = this.date.toISOString().slice(0,10);
    this.date = date.split('-').join('/');
  }

  findRoomsAvailableByDate(date = this.date, rooms = this.rooms, bookings = this.bookings) {
    let bookedRoomNumbers = bookings.filter(booking => booking.date === date).map(booking => booking.roomNumber);
    let roomsAvailable = rooms.filter(room => {
      if (!bookedRoomNumbers.includes(room.number)) {
        return room;
      }
    })
    return roomsAvailable;
  }

}

export default Hotel;

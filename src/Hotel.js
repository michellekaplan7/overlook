class Hotel {
  constructor(date, guests, rooms, bookings) {
    this.date = date;
    this.guests = guests;
    this.rooms = rooms;
    this.bookings = bookings;
  }

  filterByRoomType() {

  }

  findCurrentGuest(id) {
    return this.guests.find(guest => guest.id === id)
  }

  getTodaysDate() {

  }

  findRoomsAvailableByDate() {

  }


}

export default Hotel;

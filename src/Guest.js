class Guest {
  constructor(guestDetails) {
    this.id = guestDetails.id;
    this.name = guestDetails.name;
  }

  getFirstName() {
    let firstName = this.name.split(' ', 1).join();
    return firstName;
  }

}

export default Guest;

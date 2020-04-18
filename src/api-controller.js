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


}

export default ApiController;

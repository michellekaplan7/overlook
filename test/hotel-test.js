import { expect } from 'chai';
import Hotel from '../src/Guest';
import roomsData from '../data/rooms-testData';
import bookingsData from '../data/bookings-testData';
import guestsData from '../data/guests-testData';


describe('Hotel', function() {
  let hotel;

beforeEach(() => {
  hotel = new Hotel (new Date(), guestsData, roomsData, bookingsData)
});

it('should find the current guest that is logged in', function() {
  expect(hotel.findCurrentGuest(7)).to.eq(
    {
      "id": 7,
      "name": "Dell Rath"
    })
});

});

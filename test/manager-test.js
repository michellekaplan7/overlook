import {expect} from 'chai';

import Manager from '../src/Manager';
import roomsData from '../data/rooms-testData';
import bookingsData from '../data/bookings-testData';

describe('Manager', function() {
  let manager;

  beforeEach(() => {
    manager = new Manager();
  });

  it("should have an id", function() {
      expect(manager.id).to.eq("manager")
  });

it("should have a username", function() {
  expect(manager.username).to.eq("Michelle")
});

it("should be able to calculate the total revenue for todays date", function() {
  let todaysDate = "2020/02/03";
  expect(manager.calculateTotalRevenueForToday(bookingsData, roomsData, todaysDate)).to.eq(840.41)
});

it("should be able to calculate the percentage of rooms occupied for todays date", function() {
  let todaysDate = "2020/02/03";
  expect(manager.calculatePercentageOfRoomsOccupiedForToday(bookingsData, roomsData, todaysDate)).to.eq(12)
});

});

import {expect} from 'chai';

import Room from '../src/Room';
import roomsData from '../data/rooms-testData';


describe('Room', function() {
  let room;

  beforeEach(() => {
    room = new Room({
      "number": 1,
      "roomType": "residential suite",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 358.4
    });
  });

  it("should have a room number", function() {
    expect(room.number).to.eq(1);
  });

  it("should have a room type", function() {
    expect(room.roomType).to.eq("residential suite");
  });

  it("should return whether the room has a bidet or not", function() {
    expect(room.bidet).to.eq(true);
  });

  it("should return the bed size", function() {
    expect(room.bedSize).to.eq("queen");
  });

  it("should return the number of beds", function() {
    expect(room.numBeds).to.eq(1);
  });

  it("should return the cost per night", function() {
    expect(room.costPerNight).to.eq(358.4);
  });


});

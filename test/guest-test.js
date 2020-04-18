import { expect } from 'chai';
import Guest from '../src/Guest';
import roomsData from '../data/rooms-testData';

describe('Guest', function() {
  let guest;
  let bookingsData;


beforeEach(() => {

  bookingsData = [
  {
    "id": "5fwrgu4i7k55hl6sz",
    "userID": 1,
    "date": "2020/02/04",
    "roomNumber": 1,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55hl6t5",
    "userID": 1,
    "date": "2020/01/24",
    "roomNumber": 24,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55hl6t6",
    "userID": 1,
    "date": "2020/01/10",
    "roomNumber": 12,
    "roomServiceCharges": []
  },
]
  guest = new Guest({id: 1, name: "Jim James"}, bookingsData);
});

  it('should be a function', function() {
    expect(Guest).to.be.a('function');
  });

  it('should be an instance of Guest', function() {
    expect(guest).to.be.an.instanceof(Guest);
  });

  it('should return guest id', function() {
    expect(guest.id).to.equal(1);
  });

  it('should find the guests bookings', function() {
    expect(guest.myBookings).to.equal(bookingsData);
  });

  it('should return guest name', function() {
    expect(guest.name).to.equal("Jim James");
  });

  it('should return guest first name', function() {
    expect(guest.getFirstName()).to.equal("Jim");
  });

  it('should calculate the total amount spent', function() {
    expect(guest.calculateTotalAmountSpent(roomsData)).to.equal(857.73);
  });


});

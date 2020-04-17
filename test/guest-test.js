import { expect } from 'chai';
import Guest from '../src/Guest';

describe('Guest', function() {
  let guest;


beforeEach(() => {
  guest = new Guest({id: 1, name: "Leatha Ullrich"});
});

  it('should be a function', function() {
    expect(Guest).to.be.a('function');
  });

  it('should be an instance of Guest', function() {
    expect(guest).to.be.an.instanceof(Guest);
  });

  it('should return guest first name', function() {
    expect(guest.getFirstName()).to.equal("Leatha");
  })

  it('should find the guests bookings', function() {
    expect(guest.findMyBookings()).to.equal
  })

});

# Overlook Hotel

Overlook was a one week solo project assigned for Module 2 of the Turing School of Software Development and Design Front End Engineering program. Overlook is a hotel management application that have both a guest and manager portal. Both the guest and manager can view the guests' booking history, spending, and book a room. The manager has a dashboard that shows total revenue for the day, rooms available, and percentage occupied.


## GIF of working application
- When you get to the page, you can log in as a customer. In this case username was customer7 and password is overlook2020.
![overlook-customer-login](https://media.giphy.com/media/J2g6P9TSCBSRAeYyHi/giphy.gif)

- As a customer, you can see a dashboard with a list of your booking history, as well as the total amount you've spent. You can also book a room by selecting a date and filtering out the room type. If there aren't any rooms that match the search query, an error message will appear. Otherwise, you click the book button to book a room and it's immediately removed from the DOM.
![overlook-customer-book-room](https://media.giphy.com/media/UVTMOX0mlNDVO5ayHf/giphy.gif)

- When you get to the page, you can also log in as a manager. The username is manager and the password is overlook2020.
![overlook-manager-login](https://media.giphy.com/media/YrrT17mSoUT9pKE3pI/giphy.gif)

- As a manager, you can search for a specific guest and see their booking history and the total amount they've spent. You can then also book a room for that specific guest you've searched for. The same as the customer, you can search for a room by date and filter by room type. If there aren't any rooms that match the search query, an error message will appear. Otherwise, you can click the book button to book a room and it's immediately removed from the DOM.
![overlook-manager-book-room](https://media.giphy.com/media/dZY1FHoIq4UvBsTJoM/giphy.gif)

- As a manager, you can search for a specific guest and click 'find bookings to delete'. A list of their future bookings will appear. If they don't have any future bookings, an error message will appear. Otherwise, you can click on the delete booking and the booking will be deleted, along with the booking card being removed from the DOM.
![overlook-manager-book-room](https://media.giphy.com/media/Y4WBwJZ1p2pTvcU19C/giphy.gif)

## Setup

1. Clone down this repo
2. Install the library dependencies. Run:
```
npm install
```
3. Then, run `npm start` in your terminal. Go to `http://localhost:8080/` and you should see the page there! Then, you can enter `control + c` in your terminal to stop the server at any time.
4. Log in as a Guest with - username: customer[1-50] (e.g. customer7), password: overlook2020. OR log in as a Manager with - username: manager, password: overlook2020.

## Goals and Objectives
- Use OOP to drive the design of the application and the code
- Work with an API to send and receive data
- Create a robust test suite that thoroughly tests all functionality of a client-side application

## Technologies Used
- jQuery
- Sass
- Mocha & Chai
- the fetch API (GET, POST, DELETE)
- Webpack

## Future Iterations
- DRYing up code
- Implement testing with spies
- Cross-browser compatibility
- Media queries for mobile responsiveness
- Fix issues that are marked in the issues of this GitHub project

## Contributor
- [Michelle Kaplan](https://github.com/MichelleKaplan7)

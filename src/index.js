import $ from 'jquery';
import './css/base.scss';
import ApiController from './api-controller';

let api = new ApiController();


const fetchData = () => {
  let guestData = api.getUsersData()
  let bookingsData = api.getHydrationData();
  let roomsData = api.getSleepData();

  Promise.all([guestData, bookingsData, roomsData])
    .then(finalValues => {
      let guestData = finalValues[0];
      let bookingsData = finalValues[1];
      let roomsData = finalValues[2];
      // startApp(userData.userData, hydrationData.hydrationData, sleepData.sleepData, activityData.activityData);
    }).catch(error => console.log(error.message))
}


fetchData();

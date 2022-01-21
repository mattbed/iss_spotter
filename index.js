const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, nextPass) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  for (let time of nextPass) {
    let date = new Date(time.risetime);
    console.log(`Next pass at ${date} for ${time.duration} seconds!`);
  }
});

//fetchMyIP((error, ip) => {
//  if (error) {
//    console.log("It didn't work!" , error);
//    return;
//  }
//
//  console.log('It worked! Returned IP:' , ip);
//});

//fetchCoordsByIP("108.162.161.37", (error, coords) => {
//  if (error) {
//   console.log("It didn't work!" , error);
//    return;
//  }
//  console.log('It worked! Returned coordinates:' , coords);
//});

//fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error, coords) => {
//  if (error) {
//    console.log("It didn't work!", error);
//    return;
//  }
//  console.log("It worked! Returned coordinates:", coords);
//});
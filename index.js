const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
//  if (error) {
//    console.log("It didn't work!" , error);
//    return;
//  }
//
//  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP("108.162.161.37", (error, coords) => {
//  if (error) {
//   console.log("It didn't work!" , error);
//    return;
//  }
//  console.log('It worked! Returned coordinates:' , coords);
});
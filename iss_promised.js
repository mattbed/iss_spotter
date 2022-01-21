const request = require('request-promise-native');

const fetchMyIp = function () {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIp = function(body) {
  const url = "https://api.freegeoip.app/json/" + JSON.parse(body).ip + "?apikey=596515a0-7a4a-11ec-bb85-0fa5332fb44f";
  return request(url);
};

const fetchISSFlyOverTimes = function(body) {
  const url = "https://iss-pass.herokuapp.com/json/?lat=" + JSON.parse(body).latitude + "&lon=" + JSON.parse(body).longitude;
  return request(url);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIp()
    .then(fetchCoordsByIp)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
  });
};

module.exports = { nextISSTimesForMyLocation };
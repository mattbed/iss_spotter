const request = require('request');

const fetchMyIP = function(callback) {
  request("https://api.ipify.org?format=json", (error, response, data) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${data}`;
      callback(Error(msg), null);
      return;
    }
    const ipParsed = JSON.parse(data).ip;
    callback(null, ipParsed);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  const url = "https://api.freegeoip.app/json/" + ip + "?apikey=596515a0-7a4a-11ec-bb85-0fa5332fb44f";
  request(url, (error, response, data) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates. Response: ${data}`;
      callback(Error(msg), null);
      return;
    }
    const { latitude, longitude } = JSON.parse(data);
    callback(null, { latitude, longitude });
  });
};

const fetchISSFlyOverTimes = function(coords, callback) {
  const lat = coords.latitude;
  const lon = coords.longitude;
  const url = "https://iss-pass.herokuapp.com/json/?lat=" + lat + "&lon=" + lon;
  request(url, (error, response, data) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching fly-over times. Response: ${data}`;
      callback(Error(msg), null);
      return;
    }
    const flyOvers = JSON.parse(data).response;
    callback(null, flyOvers);
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
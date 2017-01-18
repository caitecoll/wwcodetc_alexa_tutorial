'use strict';
var _ = require('lodash');

function FactHelper() {}

var facts = [
  'A year on Mercury is just 88 days long.',
  'Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.',
  'Venus rotates anti-clockwise, possibly because of a collision in the past with an asteroid.',
  'On Mars, the Sun appears about half the size as it does on Earth.',
  'Earth is the only planet not named after a god.',
  'Jupiter has the shortest day of all the planets.',
  'The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.',
  'The Sun contains 99.86% of the mass in the Solar System.',
  'The Sun is an almost perfect sphere.',
  'A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.',
  'Saturn radiates two and a half times more energy into space than it receives from the sun.',
  'The temperature inside the Sun can reach 15 million degrees Celsius.',
  'The Moon is moving approximately 3.8 cm away from our planet every year.'
];

FactHelper.prototype.requestFact = function() {
  return this.getFact().then(
    function(response) {
      console.log('success - received fact');
      return response.body;
    }
  );
};

FactHelper.prototype.getFact = function(airportCode) {
  var factArr = this.facts;
  var factIndex = Math.floor(Math.random() * factArr.length);
  var randomFact = factArr[factIndex];
  // var options = {
  //   method: 'GET',
  //   uri: ENDPOINT + airportCode,
  //   resolveWithFullResponse: true,
  //   json: true
  // };
  return randomFact;
};

FactHelper.prototype.formatFactResponse = function() {
  // var weather = _.template('The current weather conditions are ${weather}, ${temp} and wind ${wind}.')({
  //   weather: airportStatus.weather.weather,
  //   temp: airportStatus.weather.temp,
  //   wind: airportStatus.weather.wind
  // });
  // if (airportStatus.delay === 'true') {
  //   var template = _.template('There is currently a delay for ${airport}. ' +
  //     'The average delay time is ${delay_time}. ' +
  //     'Delay is because of the following: ${delay_reason}. ${weather}');
  //   return template({
  //     airport: airportStatus.name,
  //     delay_time: airportStatus.status.avgDelay,
  //     delay_reason: airportStatus.status.reason,
  //     weather: weather
  //   });
  // } else {
  //   //no delay
  //   return _.template('There is currently no delay at ${airport}. ${weather}')({
  //     airport: airportStatus.name,
  //     weather: weather
  //   });
  // }
};

module.exports = FactHelper;

//Bonus: take in state and city as arguments instead of hardcoding


//Require apiKey
const secretKey = require('./env.js')
//Require the request library
const request = require('./node_modules/request/');

//What is the `request` library you ask?
//Google `npm request` and you can find out!



// Set the API URL we are hitting, with our API Key and zipcode

//The actual request sending

request('http://api.wunderground.com/api/' + secretKey + '/conditions/q/CO/Denver.json', function (error, response, body) {
  //Inside that callback
let object = JSON.parse(body);
let denverWeather = object.current_observation.weather

  console.log("The weather in Denver is " + denverWeather + ".")
  //Print out the weather result


});

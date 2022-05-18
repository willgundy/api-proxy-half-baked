require('dotenv').config();
const fetch = require('node-fetch');

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};


exports.handler = async (event, context) => {
  try {
    const geoCodeResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${event.queryStringParameters.filter}&limit=${1}&appid=${process.env.WEATHER_AUTH_KEY}`);

    const [{ lat, lon, name }] = await geoCodeResponse.json();
    console.log(lat, lon, name);

    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${process.env.WEATHER_AUTH_KEY}`);

    console.log(weatherResponse);
    const data = await weatherResponse.json();
    const json = JSON.stringify({ data });


    return { 
      statusCode: 200, 
      headers,
    // this is where you shoot data back to the user. right now it's sending an empty object--replace this with the weather data. remember, you do need to stringify it, otherwise netlify gets mad. ¯\_(ツ)_/¯
      body: json,
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};

require('dotenv').config();
const fetch = require('node-fetch');

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};


exports.handler = async (event) => {
  try {

    const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${event.queryStringParameters.filter}`);
    const data = await response.json();
    const json = JSON.stringify({ data });


    return { 
      statusCode: 200, 
      headers,
    // this is where you shoot data back to the user. right now it's sending an empty object--replace this with the pokemon data. remember, you do need to stringify it, otherwise netlify gets mad. ¯\_(ツ)_/¯
      body: json,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};

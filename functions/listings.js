require('dotenv').config();
const fetch = require('node-fetch');

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};


exports.handler = async (event, context) => {
  try {
    const response = await fetch(`https://api.bridgedataoutput.com/api/v2/actris_ref/listings?access_token=${process.env.MLS_AUTH_KEY}&limit=100&StandardStatus=Active`);
    const data = await response.json();
    const json = JSON.stringify({ data });

    console.log(response);
    
    return { 
      statusCode: 200, 
      headers,
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

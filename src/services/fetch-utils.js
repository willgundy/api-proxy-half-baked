export async function getPokemon(filter) {
  const response = await fetch(`/.netlify/functions/pokemon?filter=${filter}`);
  const data = await response.json();

  console.log(data);

  return data;
}

export async function getWeather({ city }) {
  const response = await fetch(`/.netlify/functions/weather?filter=${city}`);
  const data = await response.json();

  console.log(data);
  
  return data;
}

export async function getYelpInfo({ city, state }) {
  const response = await fetch(`/.netlify/functions/yelp?filter=${city}`);
  const data = await response.json();

  console.log(data);
    
  return data;
}
export async function getPokemon(filter) {
  const response = await fetch(`/.netlify/functions/pokemon?filter=${filter}`);
  const data = await response.json();

  return data;
}

export async function getWeather({ city }) {
  const response = await fetch(`/.netlify/functions/weather?filter=${city}`);
  const data = await response.json();
  
  return data;
}

export async function getYelpInfo({ city }) {
  const response = await fetch(`/.netlify/functions/yelp?filter=${city}`);
  const data = await response.json();
    
  return data;
}
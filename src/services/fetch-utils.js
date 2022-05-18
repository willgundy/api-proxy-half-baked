export async function getPokemon(filter) {
  const response = await fetch(`/.netlify/functions/pokemon?filter=${filter}`);
  const data = await response.json();

  console.log(data);

  return data;
}

export async function getWeather(filter) {
  const response = await fetch(`/.netlify/functions/weather?filter=${filter}`);
  const data = await response.json();

  console.log(data);
  
  return data;
}

export async function getYelpInfo({ city, state, country }) {
  const response = await fetch(`/.netlify/functions/yelp?filter=${city}`);
  const data = await response.json();

  console.log(data);
    
  return data;
}
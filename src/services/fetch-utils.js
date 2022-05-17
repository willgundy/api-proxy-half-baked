export async function getPokemon(filter) {
  const response = await fetch(`/.netlify/functions/pokemon?filter=${filter}`);
  const data = await response.json();

  return data;
}

export async function getWeather(filter) {
  const response = await fetch(`/.netlify/functions/weather?filter=${filter}`);
  const data = await response.json();
  
  return data;
}

export async function getYelpInfo(filter) {
  const response = await fetch(`/.netlify/functions/yelp?filter=${filter}`);
  const data = await response.json();
    
  return data;
}
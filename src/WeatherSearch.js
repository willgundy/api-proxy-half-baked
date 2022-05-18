import { useState } from 'react';
import { getWeather } from './services/fetch-utils';
import Spinner from './Spinner';
import Weather from './Weather';

export default function WeatherSearch() {
      // you'll need to track your weather search results, the loading state, and a form field for location with a default value.
  const [filters, setFilters] = useState({
    city: 'Portland',
    state: '',
    country: '',
  });
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
    
  async function handleWeatherSubmit(e) {
    e.preventDefault();
    
    setIsLoading(true);
    
    const { data } = await getWeather(filters);
        
    setIsLoading(false);
    
    setWeather(data.daily);
  }

  console.log(weather);
      
  return (
    <section className='weather'>
      {/* make the fetch on submit */}
      <form onSubmit={handleWeatherSubmit}>
            Search weather for a city
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <label>
          <input value={filters.city} onChange={e => setFilters({ ...filters, city: e.target.value })}/>
        </label>
        <button>Get Weather</button>
      </form>
      {/* Make a ForecastList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
      {isLoading ? <Spinner /> :
        <div>
          {weather && <h1>{'Weather for ' + filters.city}</h1>}
          {weather && <div className='cardContainer'>
            {weather.map((weath, i) => <Weather key={i} weath={weath} />)}
          </div>}
        </div>}
    </section>
  );

}

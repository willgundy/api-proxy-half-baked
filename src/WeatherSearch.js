import { useState } from 'react';
import { getWeather } from './services/fetch-utils';
import Spinner from './Spinner';

export default function WeatherSearch() {
      // you'll need to track your weather search results, the loading state, and a form field for location with a default value.
  const [filters, setFilters] = useState({
    city: '',
    state: '',
    country: '',
  });
  const [weather, setWeather] = useState([]);
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
          city
          <input value={filters.city} onChange={e => setFilters({ ...filters, city: e.target.value })}/>
        </label>
        <label>
          state
          <input value={filters.state} onChange={e => setFilters({ ...filters, state: e.target.value })}/>
        </label>
        <label>
          country
          <input value={filters.country} onChange={e => setFilters({ ...filters, country: e.target.value })}/>
        </label>
        <button>Get Weather</button>
      </form>
      {/* Make a ForecastList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
      {isLoading ? <Spinner /> :
        weather.map((weath, i) => <div key={i}>{weath.pressure}</div>)}
    </section>
  );

}

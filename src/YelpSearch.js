import { useState } from 'react';
import { getYelpInfo } from './services/fetch-utils';

export default function YelpSearch() {
    // you'll need to track your yelp search results, the loading state, and a form field for location with a default value.
  const [filters, setFilters] = useState({
    city: '',
    state: '',
    country: '',
  });
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleYelpSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    const { data } = await getYelpInfo(filters);
    
    setIsLoading(false);

    console.log(restaurants);

    setRestaurants(data.results);
  }
  
  return (
    <section className='yelp'>
      {/* make the fetch on submit */}
      <form onSubmit={handleYelpSubmit}>
        Search yelp for a city
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
        <button>Search Yelp</button>
      </form>
      {/* Make a BusinessesList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
      {isLoading ? <div>spinner</div> :
        restaurants.map((restaurant, i) => <div key={i}>{restaurant}</div>)}
    </section>
  );
}
  

import { useState } from 'react';
import { getYelpInfo } from './services/fetch-utils';
import Spinner from './Spinner';
import Restaurant from './Restaurant';

export default function YelpSearch() {
    // you'll need to track your yelp search results, the loading state, and a form field for location with a default value.
  const [filters, setFilters] = useState({
    city: 'Portland',
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

    setRestaurants(data.businesses);
  }

  console.log(restaurants);
  
  return (
    <section className='yelp'>
      {/* make the fetch on submit */}
      <h1>Yelp!</h1>
      <form onSubmit={handleYelpSubmit}>
        Search yelp for a city
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <label>
          <input value={filters.city} onChange={e => setFilters({ ...filters, city: e.target.value })}/>
        </label>
        <button>Search Yelp</button>
      </form>
      {/* Make a BusinessesList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
      {isLoading ? <Spinner /> :
        <div className='cardContainer'>
          {restaurants.map((restaurant, i) => <Restaurant key={i} restaurant={restaurant} />)}
        </div>}
    </section>
  );
}
  

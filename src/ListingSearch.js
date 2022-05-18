import { useState } from 'react';
import { getListings } from './services/fetch-utils';
import Spinner from './Spinner';

export default function ListingSearch() {
      // you'll need to track your weather search results, the loading state, and a form field for location with a default value.
  const [filters, setFilters] = useState({
    lowPrice: 0,
    highPrice: 10000000
  });
  const [listings, setListings] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
    
  async function handleListingsSubmit(e) {
    e.preventDefault();
    
    setIsLoading(true);
    
    const { data } = await getListings(filters);
        
    setIsLoading(false);
    
    setListings(data.bundle);
  }
      
  return (
    <section className='listings'>
      <form onSubmit={handleListingsSubmit}>
            Search Housing Listings in a City
        <label>
          Low List Price:
          <input type={'number'} value={filters.lowPrice} onChange={e => setFilters({ ...filters, lowPrice: e.target.value })}/>
        </label>
        <label>
          High List Price:
          <input type={'number'} value={filters.highPrice} onChange={e => setFilters({ ...filters, highPrice: e.target.value })}/>
        </label>
        <button>Get Listings</button>
      </form>
      {/* Make a ForecastList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
      {isLoading ? <Spinner /> :
        <div>
          {listings && <h1>{'List Prices between ' + filters.lowPrice + ' ' + filters.highPrice}</h1>}
          {listings && <div className='cardContainer'>
            {listings.map((listing, i) => <div key={i} className='card'>{listing.UnparsedAddress}</div>)}
          </div>}
        </div>}
    </section>
  );

}

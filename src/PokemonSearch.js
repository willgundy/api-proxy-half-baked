import { useState } from 'react';
import { getPokemon } from './services/fetch-utils';
import Spinner from './Spinner';

export default function PokemonSearch() {
      // you'll need to track your pokemon search results, the loading state, and one form field: name. For this form field, set a real initial values (like 'pikachu') so the form populates with a default value.
  const [filter, setFilter] = useState('pikachu');
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  async function handlePokemonSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    const { data } = await getPokemon(filter);
    
    setIsLoading(false);

    console.log(data);

    setPokemon(data.results);
  }
      
  return (
    <section className='pokemon'>
      {/* make the fetch on submit */}
      <form onSubmit={handlePokemonSubmit}>
            Search pokemon for a city
        <input value={filter} onChange={e => setFilter(e.target.value)}/>
        <button>Get pokemon</button>
      </form>
      {/* Make a PokemonList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
      {isLoading ? <Spinner /> :
        pokemon.map((poke, i) => <div key={i}>{poke.pokemon}</div>)}
    </section>
  );

}

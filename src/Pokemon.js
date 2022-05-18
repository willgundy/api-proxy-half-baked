import React from 'react';

export default function Pokemon({ pokemon }) {
  function capitalizeFirstLetter(pokemon) {
    return pokemon.charAt(0).toUpperCase() + pokemon.slice(1);
  }
  return (
    <div className='card' key={pokemon.id} style={{ backgroundColor: pokemon.color_1 }}>
      <h2>{capitalizeFirstLetter(pokemon.pokemon)}</h2>
      <img src={pokemon.url_image}/>
      <label className='flex-column'>
            Type:
        <p className='attribute'>{capitalizeFirstLetter(pokemon.type_1)}</p>
      </label>
      <label className='flex-column'>
            HP:
        <p className='attribute'>{pokemon.hp}</p>
      </label>
      <label className='flex-column'>
            Speed:
        <p className='attribute'>{pokemon.speed}</p>
      </label>
    </div>
  );
}

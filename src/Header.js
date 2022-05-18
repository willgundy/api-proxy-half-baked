import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <NavLink className='Nav' exact to={'/pokemon'}>Pokedex</NavLink>
      <NavLink className='Nav' exact to={'/weather'}>Weather</NavLink>
      <NavLink className='Nav' exact to={'/yelp'}>Yelp</NavLink>
      <NavLink className='Nav' exact to={'/listings'}>Listings</NavLink>
    </header>
  );
}

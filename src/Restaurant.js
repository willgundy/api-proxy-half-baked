import React from 'react';

export default function Restaurant({ restaurant }) {
  return (
    <div className='card'>
      <h2>{restaurant.name}</h2>
      <img src={restaurant.image_url}/>
      <label className='flex-column'>
            Price:
        <p className='attribute'>{restaurant.price}</p>
      </label>
      <label className='flex-column'>
            Rating:
        <p className='attribute'>{restaurant.rating + '/5'}</p>
      </label>
      <label className='flex-column'>
            Reviews:
        <p className='attribute'>{restaurant.review_count}</p>
      </label>
    </div>
  );
}

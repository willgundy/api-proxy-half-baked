import React from 'react';

export default function Weather({ weath }) {
  return (
    <div className='weatherCard' key={weath.id} style={{ backgroundColor: weath.color_1 }}>
      <h3>{String(new Date(weath.dt * 1000).toDateString())}</h3>
      <p>{weath.weather[0].main}</p>
      <p>{'High: ' + Math.max(...Object.values(weath.temp))}</p>
      <p>{'Low: ' + Math.min(...Object.values(weath.temp))}</p>
    </div>
  );
}

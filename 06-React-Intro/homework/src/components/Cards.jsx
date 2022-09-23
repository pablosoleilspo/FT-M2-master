import React from 'react';
import Card from './Card';
import style from './Cards.module.css';


export default function Cards({ cities }) { // cities= []
  // acá va tu código
  // tip, podés usar un map

  if (!cities.length) return <h1>No hay ciudades</h1>

  return (
    <div className={style.fondo}>
      {cities.map((city) => (
        <Card
          max={city.main.temp_max}
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          key={city.id}
          onClose={() => alert(city.name)}
        />
      ))}
    </div>
  )
};
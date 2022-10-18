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

// otra forma de hacerlo 

// export default function Cards(props) {
//   console.log(props)
//   // acá va tu código
//   // tip, podés usar un map
//   return (
//     <div>
//        {/* Si en props recibimos un array tenemos que mapearlo, estamos hablando de codigo JS, necesitamos las llaves */}
//       {
//         props.cities.map( (city) => 
//           <Card
//           name = {city.name}
//           max= {city.main.temp_max}
//           min= {city.main.temp_min}
//           onClose= {() => alert(city.name)}
//           img= {city.weather[0].icon}
//           // Necesitamos una key
//           key = {city.id}
//           />
//           )
//         //  UTILIZAMOS UNA ESTRUCTURA Y LA REUTILIZAMOS 
//       }
//     </div>
//   )
// };
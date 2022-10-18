import React from 'react';
import style from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  return <div className={style.cuadros}>
    <button onClick={props.onClose} className={`${style.btn} ${style.btncolor}`}>X</button>
     <h1>{props.name}</h1>
     <p>{props.min}</p>
     <p>{props.max}</p>
     <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="img clima" />
  </div>
};

//  otra forma de hacerlo 


// export default function Card({name, max, min, onClose, img}) {
//   // acá va tu código
//   return (
//     <div>
// {/* Si hacemos destructuring, reemplazados a props */}
//       <button onClick={onClose}>x</button>
//       <h4>{name}</h4>
//       <p>Min: {min}º</p>
//       <p>Max: {max}º</p>
//       <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img not found" />
//     </div>
//   )
// };
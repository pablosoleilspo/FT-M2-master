import React from 'react';
import style from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  return <div className={style.cuadros}>
    <button onClick={props.onClose}>X</button>
     <h1>{props.name}</h1>
     <p>{props.min}</p>
     <p>{props.max}</p>
     <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="img clima" />
  </div>
};
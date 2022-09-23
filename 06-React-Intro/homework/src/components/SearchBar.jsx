import React from 'react';
import style from './SearchBar.module.css';
export default function SearchBar(props) {
  // acá va tu código
  return <div className={style.input}>
    <input type="text" name='' placeholder='Buscar ciudad' className={style.copiar} />
    <button onClick={() => props.onSearch("Buscando...")} className={style.boton}>Buscar</button>
  </div>
};
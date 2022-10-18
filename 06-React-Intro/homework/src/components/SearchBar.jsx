import React from 'react';
import style from './SearchBar.module.css';
export default function SearchBar(props) {
  // acá va tu código
  return <div className={style.input}>
    <input type="text" name='' placeholder='Buscar ciudad 🔎' className={style.copiar} />
    <button onClick={() => props.onSearch("Buscando...")} className={style.boton}>Buscar</button>
  </div>
};

// otra forma

// import React from 'react';

// export default function SearchBar(props) {
//   // acá va tu código
//   return (
//     <div>
//       <input type="text" placeholder='🔍Cuidad...' />
//       <button onClick={() => props.onSearch('Buscando...')}>Add</button>
//     </div>
//     )
// };

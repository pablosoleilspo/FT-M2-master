import React, { useState, useEffect, useRef } from 'react';
import './Timer.css'

const Timer = () => {

    // const [segundos, setSegundos] = useState(0);
    // const [activo, setActivo] = useState(false);
    // const [tipo, setTipo] = useState('Contador');
    
    const [state, setState] = useState({
      segundos: 0,
      activo: false,
      tipo: 'Contador'
    })

    useEffect(() => {
      let intervalo = null;
      if (state.activo && state.tipo === 'Contador') {
        intervalo = setInterval(() => {
          setState({
            ...state,
            segundos: state.segundos + 1
          });
        }, 1000);
      }
      if(state.activo && state.tipo === "Cuenta Regresiva") {
        intervalo = setInterval(()=> {
          setState({
            ...state,
            segundos: state.segundos - 1
          })
        },1000)
      }
      if (!state.activo && state.segundos !== 0 && state.tipo === 'Contador') {
        clearInterval(intervalo);
      }
      if(state.segundos === 0 && state.tipo === "Cuenta Regresiva"){
        reset()
        clearInterval(intervalo)
      }
      return () => clearInterval(intervalo);
    }, [state.activo, state.segundos, state.tipo]);
  

    //const dispatch = useDispatch()
    //connt history = useHistory()
    const myRef = useRef(null)

    function agregaSegundos(){
      let ref = myRef.current.value
      setState({
        ...state,
        segundos: ref
      })
}
    // const initialState = {
    //   segundos: 0
    // }
    //state = initialState
    //state.segundos

function toggle() {
  setState ({
    ...state, 
    activo: !state.activo
  })
}

function reset() {
  setState ({
    ...state,
    segundos: 0,
    activo: false
  })
}

function cambioTipo(){
  if(state.tipo === 'Contador') setState({...state, tipo: 'Cuenta Regresiva'})
  if(state.tipo === "Cuenta Regresiva") setState({...state, tipo: "Contador"})
}
  return (
    <div className="app">
      <div className="time">
        {state.segundos} ⌛
      </div>
      <div className="row">
      <button onClick={toggle} className={`button button-primary button-primary-${state.activo ? 'active' : 'inactive'}`}>
          {state.activo ? 'Pausa' : 'Inicio' }
        </button>
        <button  onClick={reset} className="button-secondary">
          Reset
        </button>
      </div>
      <button className="button" onClick={cambioTipo}>
          {state.tipo}
      </button>
      {state.tipo === 'Cuenta Regresiva' &&  <input type="number" placeholder="Ingresa Segundos" autoComplete="off" ref={myRef} onChange={agregaSegundos}/>}
    </div>
  );
};

export default Timer;
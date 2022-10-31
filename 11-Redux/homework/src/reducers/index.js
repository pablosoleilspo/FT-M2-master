import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload
      }
    // completa para este caso
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload
      }
    // Fill para este otro
    default:
      return state;
  }
};
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { addMovieFavorite, getMovies } from '../../actions'



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
          {
            this.props.movies.map(m=>(
              <div key={m.imdbID}>
                <Link to= {`/movie/${m.imdbID}`}>
                    <span> {m.Title} </span>
                    <img src={m.Poster} alt= "img not found"/>
                </Link>
                <button onClick={()=> this.props.addMovieFavorite({title: m.Title, imdbID: m.imdbID}) }>Fav</button>
              </div>
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state)=> {
  return {
    movies: state.moviesLoaded
  }
}

// const mapDispatchToProps = (dispatch) =>{
//   return {
//     addMovieFavorite: (payload)=>dispatch(addMovieFavorite(payload)),
//     getMovies: (titulo)=> dispatch(getMovies(titulo)),
//   }
// }

//                                            destructuring de nuestras acciones
export default connect(mapStateToProps, {addMovieFavorite, getMovies})(Buscador);

//Si utilizamos esta opcion, debemos generar la funcion de la linea 67
//export default connect(mapStateToProps, mapDispatchToProps)(Buscador);

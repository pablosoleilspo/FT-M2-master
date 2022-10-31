import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeFavourite } from '../../actions';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */}
          {
            this.props.fav.map(m=> (
              <div key={m.imdbID}>
                <Link to={`/movie/${m.imdbID}`}>
                  <li>{m.title} </li>
                </Link>
                <button onClick={()=> this.props.removeFavourite(m.imdbID)}>x</button>
              </div>
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps= (state)=> {
  return {
    //fav es una variable, puede recibir otro nombre. Nos va a permitir acceder a ella, a traves de props
    //state.moviesFavourites es mi estado inicial
    fav: state.moviesFavourites
  }
}

export default connect(mapStateToProps, {removeFavourite})(ConnectedList);

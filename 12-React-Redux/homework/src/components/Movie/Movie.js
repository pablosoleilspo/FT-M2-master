import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    //Cuando el componente se monta, debemos despachar la accion getMovieDetail
    componentDidMount(){
        this.props.getMovieDetail(this.props.match.params.id)
    }

    //Cuando el componente se desmonta, podemos limpiar el detalle
    componentWillUnmount(){
        this.props.getMovieDetail({})
    }

    render() {
        return (
            <div className="movie-detail">
                <h3>{this.props.detail.Title}</h3>
                <p>{this.props.detail.Year}</p>
                <img src={this.props.detail.Poster} alt="img not found"/>
                <p>{this.props.detail.Plot}</p>
            </div>
        );
    }
}

const mapStateToProps = (state)=> {
    return {
        detail: state.movieDetail
    }
}

export default connect(mapStateToProps, { getMovieDetail })(Movie);
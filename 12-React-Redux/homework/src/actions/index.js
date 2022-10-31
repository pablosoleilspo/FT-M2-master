//Funciones de acciones
export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
}

//Para hacer funciones asincronas, debemos utilizar el middleware thunk, de react-thunk.
export function getMovies(titulo) {
    return function(dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=cc28d1fe&s=" + titulo)
        //Luego de ir a buscar la info a la api
        //debemos pasar esa respuesta a json()
        .then(response => response.json())
        .then(json => {
        dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
}

export function getMovieDetail(idMovie){
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=cc28d1fe&i=${idMovie}`)
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: "GET_MOVIE_DETAIL",
                payload: data
            })
        })

    }
}

export function removeFavourite(idMovie){
    return {type: "REMOVE_FAVOURITE", payload: idMovie}
}

const initialState = {
    moviesFavourites : [],
    moviesLoaded : [],
    movieDetail : {}
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_MOVIE_FAVORITE":
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.concat(action.payload)
                //Otra opcion:
                // moviesFavourites: [...state.moviesFavourites, action.payload]
            }
        
        case "GET_MOVIES":
            return {
                ...state,
                moviesLoaded: action.payload.Search
            }
        
        case "REMOVE_FAVOURITE":
            return{
                ...state,
                moviesFavourites: state.moviesFavourites.filter(movie => movie.imdbID !== action.payload)
            }
        case "GET_MOVIE_DETAIL":
            return {
                ...state,
                movieDetail: action.payload
            }
    
        default:
            return {...state}
    }
}

export default rootReducer
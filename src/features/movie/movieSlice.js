import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    movies: []
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: (state, action) => {
        state.movies = action.payload
    }
})

//dispatch actions
export const {setMovies} = movieSlice.actions;

export const selectMovies  = (state) => state.movie.movies;

export default movieSlice.reducer
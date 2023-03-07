import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (page: any) => {
	const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false$(page)&page=${page}`);
	console.log(response.data);
	return response.data.results;
});
export const fetchMoviesByGenre = createAsyncThunk('movies/fetchMovies', async (genreId: number) => {
	const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genreId}`);
	console.log(response.data);
	return response.data.results;
});

export const fetchMovieData = createAsyncThunk('movies/fetchMovieData', async (link: number) => {
	const response = await axios.get(`https://api.themoviedb.org/3/movie/${link}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
	console.log(response.data);
	return response.data;
});
interface fetchMoviesState {
	movie: any;
	loading: boolean;
	error: string | null;
}

const initialState: fetchMoviesState = {
	movie: [],
	loading: false,
	error: null,
};

const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMovies.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchMovies.fulfilled, (state, action) => {
				state.loading = false;
				state.movie = action.payload;
			})
			.addCase(fetchMovies.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'An error occurred';
      });
    
	},
});
export const movieByGenreSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMoviesByGenre.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchMoviesByGenre.fulfilled, (state, action) => {
				state.loading = false;
				state.movie = action.payload;
			})
			.addCase(fetchMoviesByGenre.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'An error occurred';
			});
	},
});

export const movieDataSlice = createSlice({
	name: 'movieData',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMovieData.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchMovieData.fulfilled, (state, action) => {
				state.loading = false;
				state.movie = action.payload;
				console.log(state.movie);
			})
			.addCase(fetchMovieData.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'An error occurred';
			});
	},
});

export default movieSlice.reducer;

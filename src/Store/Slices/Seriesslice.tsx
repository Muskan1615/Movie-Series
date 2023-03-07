import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSeries = createAsyncThunk('series/fetchSeries', async (page: any) => {
	const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);
	console.log(response.data);
	return response.data.results;
});

export const fetchSeriesByGenre = createAsyncThunk('series/fetchSeries', async (genreId: number) => {
	const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genreId}`);
	console.log(response.data);
	return response.data.results;
});

export const fetchSeriesData = createAsyncThunk('series/fetchSeriesData', async (link: number) => {
	const response = await axios.get(`https://api.themoviedb.org/3/tv/${link}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
	console.log(response.data);
	return response.data;
});
interface fetchSeriesState {
	series: any;
	loading: boolean;
	error: string | null;
}

const initialState: fetchSeriesState = {
	series: [],
	loading: false,
	error: null,
};
export const seriesByGenreSlice = createSlice({
	name: 'series',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSeriesByGenre.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchSeriesByGenre.fulfilled, (state, action) => {
				state.loading = false;
				state.series = action.payload;
			})
			.addCase(fetchSeriesByGenre.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'An error occurred';
			});
	},
});

export const seriesDataSlice = createSlice({
	name: 'seriesData',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSeriesData.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchSeriesData.fulfilled, (state, action) => {
				state.loading = false;
				state.series = action.payload;
			})
			.addCase(fetchSeriesData.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'An error occurred';
			});
	},
});
const seriesSlice = createSlice({
	name: 'series',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSeries.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchSeries.fulfilled, (state, action) => {
				state.loading = false;
				state.series = action.payload;
			})
			.addCase(fetchSeries.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'An error occurred';
			});
	},
});

export default seriesSlice.reducer;

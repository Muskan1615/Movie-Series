import { configureStore } from '@reduxjs/toolkit';
import movieSlice, { movieDataSlice } from './Slices/Movieslice';
import trendingSlice, { trendingDataSlice } from './Slices/Trendingslice';
import seriesSlice, { seriesDataSlice } from './Slices/Seriesslice';
import searchmovieSlice, { searchseriesSlice } from './Slices/MovieSearchslice';
// import searchseriesSlice from "./Slices/SeriesSearchslice";

export const store = configureStore({
	reducer: {
		trending: trendingSlice,
		trendingData: trendingDataSlice.reducer,
		movies: movieSlice,
		movieData: movieDataSlice.reducer,
		series: seriesSlice,
		seriesData: seriesDataSlice.reducer,
		searchmovie: searchmovieSlice,
		seriesdata: searchseriesSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

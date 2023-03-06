import { configureStore } from "@reduxjs/toolkit";
import movieSlice  from "./Slices/Movieslice";
import trendingSlice from "./Slices/Trendingslice";
import seriesSlice from "./Slices/Seriesslice";
import searchmovieSlice,{searchseriesSlice} from "./Slices/MovieSearchslice";
// import searchseriesSlice from "./Slices/SeriesSearchslice";

export const store = configureStore({
  reducer: {
    trending: trendingSlice,
    movies: movieSlice,
    series: seriesSlice,
    searchmovie: searchmovieSlice,
    seriesdata: searchseriesSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
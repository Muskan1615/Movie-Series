import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSearch = createAsyncThunk(
  "moviesearch/fetchSearch",
  async (searchText:string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&include_adult=false&include_video=false`
    );
    console.log(response.data);
      return response.data.results;
  }
);

interface fetchMSearchState {
	moviesearch: any;
	loading: boolean;
	error: string | null;
}

const initialStatemovie:fetchMSearchState = {
  moviesearch: [],
  loading: false,
  error: null,
};

const searchmovieSlice = createSlice({
  name: "moviesearch",
  initialState: initialStatemovie,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.loading = false;
        state.moviesearch = action.payload;
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});


export const fetchSeriesSearch = createAsyncThunk(
  "seriessearch/fetchSeriesSearch",
  async (searchText:string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&include_adult=false&include_video=false`
    );
    console.log(response.data);
      return response.data.results;
  }
);

interface fetchSearchState {
	data: any;
	loading: boolean;
	error: string | null;
}

const initialStateseries:fetchSearchState = {
  data: null,
  loading: false,
  error: null,
};

export const searchseriesSlice = createSlice({
  name: "seriessearch",
  initialState:initialStateseries,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeriesSearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSeriesSearch.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSeriesSearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export default searchmovieSlice.reducer;
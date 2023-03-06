import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
	seriessearch: any;
	loading: boolean;
	error: string | null;
}

const initialState:fetchSearchState = {
  seriessearch: [],
  loading: false,
  error: null,
};

const searchseriesSlice = createSlice({
  name: "seriessearch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeriesSearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSeriesSearch.fulfilled, (state, action) => {
        state.loading = false;
        state.seriessearch = action.payload;
      })
      .addCase(fetchSeriesSearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});



export default searchseriesSlice.reducer;

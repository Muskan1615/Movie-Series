import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTrending = createAsyncThunk(
  "trendings/fetchTrending",
  async (page:any) => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    console.log(response.data);
      return response.data.results;
  }
);
interface fetchTrendingState {
	trending: any;
	loading: boolean;
	error: string | null;
}

const initialState:fetchTrendingState = {
  trending: [],
  loading: false,
  error: null,
};

const trendingSlice = createSlice({
  name: "trendings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrending.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrending.fulfilled, (state, action) => {
        state.loading = false;
        state.trending = action.payload;
      })
      .addCase(fetchTrending.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});



export default trendingSlice.reducer;

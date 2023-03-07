import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTrending = createAsyncThunk(
  "trendings/fetchTrending",
  async (page: any) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    console.log(response.data);
    return response.data.results;
  }
);

export const fetchTrendingData = createAsyncThunk(
  "trendings/fetchTrendingData",
  async (link: number) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day${link}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    console.log(response.data);
    return response.data;
  }
);

interface fetchTrendingState {
  trending: any;
  loading: boolean;
  error: string | null;
}

const initialState: fetchTrendingState = {
  trending: [],
  loading: false,
  error: null,
};

export const trendingDataSlice = createSlice({
  name: "trendingData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrendingData.fulfilled, (state, action) => {
        state.loading = false;
        state.trending = action.payload;
      })
      .addCase(fetchTrendingData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

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

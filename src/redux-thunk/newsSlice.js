import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import requestGetNews from "../sagas/news/requests";

export const setLoading = createAction("setLoading");

export const handleFetchNews = createAsyncThunk(
  "news/handleFetchNews",
  async (query) => {
    const response = await requestGetNews(query);
    return response.data.hits;
  }
);

const initialState = {
  news: [],
  loading: true,
  query: "",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
  },
  extraReducers: (builders) => {
    builders
      .addCase(handleFetchNews.fulfilled, (state, action) => {
        state.hits = action.payload;
        state.loading = false;
      })
      .addCase(handleFetchNews.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(handleFetchNews.rejected, (state, action) => {
        state.loading = true;
        state.hits = [];
      })
      .addCase(setLoading, (state, action) => {
        state.loading = action.payload;
      });
  },
});

// export const { setLoading } = newsSlice.actions;

export default newsSlice.reducer;

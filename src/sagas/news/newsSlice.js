import { createAction, createSlice } from "@reduxjs/toolkit";

export const updateLoadingAction = createAction("updateLoading");

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    loading: true,
    query: "",
  },
  reducers: {
    setNews: (state, action) => ({
      ...state,
      hits: action.payload,
    }),
    getNews() {},
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    setQuery: (state, action) => ({
      ...state,
      query: action.payload,
    }),
  },
  extraReducers: (builder) =>
    builder.addCase(updateLoadingAction, (state, action) => {
      state.loading = action.payload;
    }),
});

export const { getNews, setLoading, setNews, setQuery } = newsSlice.actions;

export default newsSlice.reducer;

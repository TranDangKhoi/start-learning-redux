import { createAsyncThunk } from "@reduxjs/toolkit";
import requestGetNews from "./requests";

// Có thể tách ra thành một file riêng
export const handleFetchNews = createAsyncThunk(
  "news/handleFetchNews",
  async (query) => {
    const response = await requestGetNews(query);
    return response.data.hits;
  }
);

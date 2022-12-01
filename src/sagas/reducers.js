import { combineReducers } from "@reduxjs/toolkit";
// import newsSlice from "./news/newsSlice";
import newsSlice from "../redux-thunk/newsSlice";

export const reducer = combineReducers({
  news: newsSlice,
});

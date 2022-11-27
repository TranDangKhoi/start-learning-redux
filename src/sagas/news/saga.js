import { takeLatest } from "redux-saga/effects";
import handleGetNews from "./handlers";
import { getNews } from "./newsSlice";
export default function* newsSaga() {
  yield takeLatest(getNews.type, handleGetNews);
}

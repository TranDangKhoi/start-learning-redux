import { call, put, select } from "redux-saga/effects";
import { setLoading, setNews } from "./newsSlice";
import requestGetNews from "./requests";
export default function* handleGetNews({ payload, type }) {
  let query = "";
  try {
    const newsQuery = yield select((state) => state.news.query);
    newsQuery === "" ? (query = "react") : (query = payload);
    yield put(setLoading(true));
    const response = yield call(requestGetNews, query);
    const { hits } = response.data;
    yield put(setNews(hits));
    yield put(setLoading(false));
  } catch (err) {
    console.log(err);
  }
}

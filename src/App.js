import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getNews } from "./sagas/news/newsSlice";
// Redux-saga architecture: Cấu trúc
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  const hits = useSelector((state) => state.news.hits);
  console.log("log ~ App ~ news", hits);
  return <div></div>;
}

export default App;

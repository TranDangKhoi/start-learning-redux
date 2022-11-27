import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import HackerNews from "./components/HackerNews";
import { getNews } from "./sagas/news/newsSlice";
// Redux-saga architecture: Cấu trúc
function App() {
  return (
    <div>
      <HackerNews></HackerNews>
    </div>
  );
}

export default App;

import "./App.css";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";
function App() {
  const { count } = useSelector((state) => state.counter);
  return (
    <div>
      <h2>The count from Counter.js is: {count}</h2>
      <Counter></Counter>
    </div>
  );
}

export default App;

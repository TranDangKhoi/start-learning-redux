import "./App.css";
import { useSelector } from "react-redux";
import Card from "./components/Card";
import SwitchDarkMode from "./components/SwitchDarkMode";
import Counter from "./components/Counter";
function App() {
  const globalOptions = useSelector((state) => state.global);
  console.log(globalOptions);

  return (
    <div>
      <SwitchDarkMode></SwitchDarkMode>
      <Card></Card>
      <Counter></Counter>
    </div>
  );
}

export default App;

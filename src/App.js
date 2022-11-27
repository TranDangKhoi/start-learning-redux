import { useEffect } from "react";
import "./App.css";
import HackerNews from "./components/HackerNews";
function App() {
  useEffect(() => {
    function* generatorFunc() {
      console.log("running");
      let id = 1;
      while (true) {
        yield id;
        id++;
      }
    }
    const gen = generatorFunc();
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.throw(new Error("Error!")));
  }, []);
  return (
    <div>
      <HackerNews></HackerNews>
    </div>
  );
}

export default App;

import "./App.css";
import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
import SidebarToggleButton from "./components/SidebarToggleButton";
function App() {
  const globalOptions = useSelector((state) => state.global);
  console.log(globalOptions);

  return (
    <div>
      <Sidebar></Sidebar>
      <SidebarToggleButton></SidebarToggleButton>
    </div>
  );
}

export default App;

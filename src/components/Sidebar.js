import React from "react";
import { useSelector } from "react-redux";

const links = ["Dashboard", "Ecommerce", "Super market", "Long vision"];
const Sidebar = () => {
  const globalOptions = useSelector((state) => state.global);
  const { showSidebar } = globalOptions;
  return (
    <div
      className={`w-[300px] bg-slate-500 rounded shadow fixed top-0 left-0 bottom-0 transition-all duration-500 ${
        showSidebar ? "-translate-x-[200%]" : ""
      }`}
    >
      {links.map((item) => (
        <div
          className="p-4 text-white cursor-pointer hover:bg-slate-700"
          key={item}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

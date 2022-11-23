import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useDarkMode from "../hooks/useDarkMode";
import { toggleDarkMode } from "../redux-toolkit/globalSlice";

const SwitchDarkMode = () => {
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useDarkMode();

  useEffect(() => {
    dispatch(toggleDarkMode(darkMode));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    dispatch(toggleDarkMode(darkMode));
  };
  return (
    <button
      className="p-4 text-white bg-blue-500 rounded-lg"
      onClick={handleToggleDarkMode}
    >
      Toggle dark mode
    </button>
  );
};

export default SwitchDarkMode;

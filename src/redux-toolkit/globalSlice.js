import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    darkMode: false,
    showSidebar: false,
  },
  reducers: {
    toggleDarkMode: (state, { payload }) => {
      return {
        ...state,
        darkMode: payload,
      };
    },
    toggleShowSidebar: (state, { payload }) => {
      return {
        ...state,
        showSidebar: payload,
      };
    },
  },
});

export const { toggleDarkMode, toggleShowSidebar } = globalSlice.actions;
export default globalSlice.reducer;

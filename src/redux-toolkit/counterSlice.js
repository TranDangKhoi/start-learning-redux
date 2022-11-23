import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => ({
      ...state,
      count: state.count + 1,
    }),

    decrement: (state) => ({
      ...state,
      count: state.count - 1,
    }),

    incrementByValue: (state, { payload }) => ({
      ...state,
      count: state.count + payload,
    }),

    decrementByValue: (state, { payload }) => ({
      ...state,
      count: state.count - payload,
    }),
  },
});

export const { increment, decrement, incrementByValue, decrementByValue } =
  counterSlice.actions;

export default counterSlice.reducer;

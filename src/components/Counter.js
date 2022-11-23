import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
} from "../redux-toolkit/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementByValue = () => {
    dispatch(incrementByValue({ value: 10 }));
  };
  const handleDecrementByValue = () => {
    dispatch(decrementByValue({ value: 10 }));
  };
  return (
    <div className="flex flex-col items-center p-5 dark:bg-slate-900 bg-white shadow-lg border border-gray-300 dark:border-slate-800 w-[200px] mx-auto mt-10">
      <h2 className="mb-5 dark:text-white">Count: {count}</h2>
      <div className="flex items-center justify-center dark:text-white gap-x-5">
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleIncrementByValue}>+10</button>
        <button onClick={handleDecrementByValue}>-10</button>
      </div>
    </div>
  );
};

export default Counter;

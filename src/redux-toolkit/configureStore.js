import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice, { incrementByValue } from "./counterSlice";
import globalSlice from "./globalSlice";
// High order function:
// const loggerMiddleware = function(store){
//   return function(next){
//     return function(action){
//       // Your code here
//     }
//   }
// }
// Viết rút gọn lại:
const loggerMiddleware = (store) => (next) => (action) => {
  console.log(action);
  // Sửa lại giá trị của payload
  action.payload = 10;
  // Thêm next(action) để lifecycle được tiếp tục
  next(action);
};
const reducer = combineReducers({
  // counterSlice và globalSlice là Reducer
  counter: counterSlice,
  global: globalSlice,
});

// store
const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(loggerMiddleware),
});

store.subscribe(() => {
  // javascript observer pattern
  console.log(`Current statte: ${store.getState().counter.count}`);
});

store.dispatch(incrementByValue(1));
store.dispatch(incrementByValue(3));
store.dispatch(incrementByValue(5));

export default store;

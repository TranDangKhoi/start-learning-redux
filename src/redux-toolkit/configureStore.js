import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterSlice, { incrementByValue } from "./counterSlice";
import globalSlice from "./globalSlice";
import createSagaMiddleware from "@redux-saga/core";
const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = (store) => (next) => (action) => {
  console.log(action);
  // Sửa lại giá trị của payload
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
  middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});

// store.subscribe(() => {
//   // javascript observer pattern
//   console.log(`Current statte: ${store.getState().counter.count}`);
// });

// store.dispatch(incrementByValue(1));
// store.dispatch(incrementByValue(3));
// store.dispatch(incrementByValue(5));

// sagaMiddleware.run(rootSaga);

export default store;

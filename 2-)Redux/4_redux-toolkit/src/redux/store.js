import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import taskReducer from "./slices/taskSlice";

/*
 * createStore vs configureStore
 * reducer'ları otomatik birleştirir
 * thunk içerisinde kurulu olarak gelir
 * devtools (geliştirici araçları) kurulu gelir
 */

const store = configureStore({
  reducer: {
    counterReducer,
    taskReducer,
  },
});

export default store;

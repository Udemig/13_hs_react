import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

// combineReducers ile projede bulunan reducer'lar birleştirilerek bir tane rootReducer elde edilir.Elde edilen rootReducer ise createStore komutu ile store a tanıtılır.
const rootReducer = combineReducers({ counterReducer, todoReducer });

const store = createStore(rootReducer);

export default store;

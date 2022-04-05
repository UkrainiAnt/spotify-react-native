import counterReducer from "./slices/counter.slice";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  counter: counterReducer,
});

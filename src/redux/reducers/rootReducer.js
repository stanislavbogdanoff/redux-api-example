import { combineReducers } from "redux";
import colorReducer from "./colorReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  color: colorReducer,
});

export default rootReducer;

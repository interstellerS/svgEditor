import { combineReducers } from "redux";
import shapes from "./shapes";

const rootReducer = combineReducers({
  svg: shapes
});

export default rootReducer;

import { combineReducers } from "redux";
import shapes from "./shapes";
import svgActions from "./svgActions";

const rootReducer = combineReducers({
  svg: shapes,
  svgActions
});

export default rootReducer;

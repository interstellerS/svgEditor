import { createStore, compose } from "redux";
import rootReducer from "./reducers";
//const enhancer = compose(DevTools.instrument());
const store = createStore(
  rootReducer,
  window.devToolsExtension && window.devToolsExtension()
);

export default store;

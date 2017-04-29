import "styles/vendors";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";

import { App } from "containers";
import { DevTools } from "containers";

import rootReducer from "redux/reducers";

//const enhancer = compose(DevTools.instrument());
const store = createStore(
  rootReducer,
  window.devToolsExtension && window.devToolsExtension()
);

render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById("container")
);

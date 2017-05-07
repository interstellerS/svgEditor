import "styles/vendors";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { App } from "containers";
import { DevTools } from "containers";

import store from "redux/store";

render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById("container")
);

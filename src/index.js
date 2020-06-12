import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducers";

import App from "./App";

const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);

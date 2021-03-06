import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App/App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Store/Store";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import store from "./reducers";
import "../public/style.css";

render(
  <Provider store={store}>
    <div id="stylized">component-less</div>
  </Provider>,
  document.getElementById("app")
);

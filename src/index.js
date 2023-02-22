import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "App";
import { Provider } from "react-redux";
import "./index.css";

import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/react-pizza-v2">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

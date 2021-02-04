import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/main.scss";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./utilities/context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

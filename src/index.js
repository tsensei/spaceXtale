import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataProvider } from "./providers/DataContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <DataProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataProvider>,
  document.getElementById("root")
);

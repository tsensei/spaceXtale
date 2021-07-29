import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ScrollToTop from "./utils/scrollToTop";
import { DataProvider } from "./providers/DataContext";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <DataProvider>
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
  </DataProvider>,
  document.getElementById("root")
);

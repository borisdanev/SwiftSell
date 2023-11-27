import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./style/style.css";
import "./style/responsive.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
const rootEl = document.querySelector("#root");
const root = createRoot(rootEl);
root.render(
  <Router>
    <App />
  </Router>
);

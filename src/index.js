import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Helmet, HelmetProvider } from "react-helmet-async";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet></Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

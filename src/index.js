import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Helmet, HelmetProvider } from "react-helmet-async";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="twitter:card" content="summary" />
        <meta name="Twitter:site" content="@mikan_54951" />
        <meta name="twitter:title" content="スッキリ報告" />
        <meta name="twitter:description" content="はーーすっきりした" />
        <meta
          name="twitter:image"
          content="https://2.bp.blogspot.com/-PZ6b5vGDuAE/VYJjWRTCK5I/AAAAAAAAuas/3MWHtJZTLXc/s400/toilet_benza_shimeru_girl.png"
        />
        <title>スッキリ報告</title>
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/index.css";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <Helmet>
      <meta name="google-adsense-account" content="ca-pub-2590867190158667" />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2590867190158667"
        crossorigin="anonymous"
      ></script>
    </Helmet>
    <App />
  </HelmetProvider>
);

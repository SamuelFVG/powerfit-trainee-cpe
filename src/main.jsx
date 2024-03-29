import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes.jsx";
import { GlobalStyles } from "./GlobalStyles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Routes />
    <GlobalStyles />
  </React.StrictMode>
);

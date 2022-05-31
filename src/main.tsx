import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CurrencyProvider } from "./context";
import "./styles/globals.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CurrencyProvider>
      <App />
    </CurrencyProvider>
  </React.StrictMode>
);

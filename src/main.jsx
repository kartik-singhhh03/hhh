import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { PropertiesProvider } from "./context/PropertiesProvider.jsx";
import "./styles.css";
import "./hardening.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PropertiesProvider>
        <App />
      </PropertiesProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

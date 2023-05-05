import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/theme";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

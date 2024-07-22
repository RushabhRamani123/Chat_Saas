import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router>
      <App />
      </Router>
    </LocalizationProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css"; // Ensure Tailwind CSS is working
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is loaded after Tailwind

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

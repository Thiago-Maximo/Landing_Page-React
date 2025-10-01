import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css"; // 👈 importa o CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // 👈 importa o JS para navbar colapsar

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./context/authContext";

// It is used for cookie
axios.defaults.withCredentials = true;
// url root
axios.defaults.baseURL = "http://localhost:4004/api";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);

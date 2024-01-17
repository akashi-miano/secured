import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecoveryPage from "./components/routes/RecoveryPage.jsx";
import CloudPage from "./components/routes/CloudPage.jsx";
import ContactPage from "./components/routes/ContactPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recovery" element={<RecoveryPage />} />
      <Route path="/cloud" element={<CloudPage />} />
      <Route path="/contacts" element={<ContactPage />} />
    </Routes>
  </BrowserRouter>
);

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard"; // New Page
import LoginPage from "./pages/LoginPage"; // Example Login Page
import PeakHour from "./pages/peakHour";

function App() {
  return (
  
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/station/dashboard" element={<Dashboard />} />
          <Route path="/station/dashboard/peakhour" element={<PeakHour />} />
          <Route path="/grid/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    
  );
}

export default App;

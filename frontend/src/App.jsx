import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
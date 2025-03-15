import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Activities from "./Activities";
import Hackathon from "./Hackathon"; // Import the Hackathon page
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Activities />} />
            <Route path="/hackathon" element={<Hackathon />} />
            {/* Add routes for Internships and Projects later */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

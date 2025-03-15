import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Activities from "./Activities";
import Hackathon from "./Hackathon";
import Internship from "./Internship";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            {/* Redirect / to /activities */}
            <Route path="/" element={<Navigate to="/activities" />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/hackathon" element={<Hackathon />} />
            <Route path="/internship" element={<Internship />} />
            {/* Add routes for Projects later */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

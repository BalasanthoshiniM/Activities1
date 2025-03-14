import React from "react";
import "./Sidebar.css";
import logo from "./assets/logo.png"; // ✅ Correct Import

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="VCET Logo" className="logo" />
        <h2>VCET</h2>
      </div>
      <ul className="nav-links">
        <li>Overview</li>
        <li>Internships</li>
        <li>Projects</li>
        <li>Hackathons</li>
      </ul>
    </div>
  );
};

export default Sidebar;

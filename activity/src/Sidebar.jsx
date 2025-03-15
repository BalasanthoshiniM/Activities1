import React from "react";
import "./Sidebar.css";
import logo from "./assets/logo.png"; // ✅ Correct Import

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="VCET Logo" className="logo" />
        <h2 className="college-name">VCET</h2> {/* Increased font size */}
      </div>
      <ul className="nav-links">
        <li>Internships</li>
        <li>Hackathons</li>
        <li>Projects</li>
      </ul>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "./assets/logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="VCET Logo" className="logo" />
        <h2 className="college-name">VCET</h2>
      </div>
      <ul className="nav-links">
        <li><Link to="/internships" className="nav-item">Internships</Link></li>
        <li><Link to="/hackathon" className="nav-item">Hackathons</Link></li>
        <li><Link to="/projects" className="nav-item">Projects</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;

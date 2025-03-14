import React, { useState } from "react";
import "./Activities.css";

const Activities = () => {
  const [activeTab, setActiveTab] = useState("Overall");

  const renderContent = () => {
    switch (activeTab) {
      case "Overall":
        return <h2>Activities Overview</h2>;
      case "Internships":
        return <h2>In-house Internships</h2>;
      case "Projects":
        return <h2>Projects (In Progress & Completed)</h2>;
      case "Hackathons":
        return <h2>Hackathons Conducted</h2>;
      default:
        return <h2>Welcome</h2>;
    }
  };

  return (
    <div className="container">
      <div className="sidebar">
        <button onClick={() => setActiveTab("Overall")}>Overall</button>
        <button onClick={() => setActiveTab("Internships")}>Internships</button>
        <button onClick={() => setActiveTab("Projects")}>Projects</button>
        <button onClick={() => setActiveTab("Hackathons")}>Hackathons</button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Activities;


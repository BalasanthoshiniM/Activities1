import React from "react";
import "./Activities.css";

const Activities = () => {
  return (
    <div className="activities-container">
      <h1>Activities</h1>
      <div className="activity-list">
        <div className="activity-card">📌 Workshop on AI & ML</div>
        <div className="activity-card">🚀 Hackathon: Code Sprint 2025</div>
        <div className="activity-card">🔬 Research on IoT Applications</div>
        <div className="activity-card">🏆 In-house Internship Projects</div>
      </div>
    </div>
  );
};

export default Activities;

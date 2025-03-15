import React from "react";
import "./Hackathon.css";

const Hackathon = () => {
  return (
    <div className="hackathon-container">
      <h1 className="hackathon-title">Hackathons</h1>
      <div className="hackathon-content">
        <div className="hackathon-item">
          <h2>🚀 Hackathon 2024</h2>
          <p>Exciting coding competition with teams from different colleges.</p>
          <div className="placeholder-image">Image Placeholder</div>
        </div>

        <div className="hackathon-item">
          <h2>🏆 Hackathon 2023</h2>
          <p>AI and ML-based hackathon with innovative projects.</p>
          <div className="placeholder-video">Video Placeholder</div>
        </div>
      </div>
    </div>
  );
};

export default Hackathon;

import React from "react";
import "./Internship.css";

const Internship = () => {
  return (
    <div className="internship-container">
      <h1 className="internship-title">Internships</h1>
      <div className="internship-content">
        <div className="internship-item">
          <h2>💼 Summer Internship 2024</h2>
          <p>Gain hands-on experience in software development with top companies.</p>
          <div className="placeholder-image">Image Placeholder</div>
        </div>

        <div className="internship-item">
          <h2>🌍 Remote Internship 2023</h2>
          <p>Work from anywhere and collaborate on real-world projects.</p>
          <div className="placeholder-video">Video Placeholder</div>
        </div>
      </div>
    </div>
  );
};

export default Internship;

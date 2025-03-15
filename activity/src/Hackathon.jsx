import React from "react";
import "./Hackathon.css";
import hackathonImg from "./assets/hackathon2024.jpg";  // ✅ Ensure correct path
import hackathonVideo from "./assets/hackathon2023.mp4"; // ✅ Ensure correct path

const Hackathon = () => {
  return (
    <div className="hackathon-container">
      <h1 className="hackathon-title">Hackathons</h1>
      <div className="hackathon-content">
        <div className="hackathon-item">
          <h2>🚀 Hackathon 2024</h2>
          <p>Exciting coding competition with teams from different colleges.</p>
          <img src={hackathonImg} alt="Hackathon 2024" className="hackathon-image" />
        </div>

        <div className="hackathon-item">
          <h2>🏆 Hackathon 2023</h2>
          <p>AI and ML-based hackathon with innovative projects.</p>
          <video controls className="hackathon-video">
            <source src={hackathonVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hackathon;

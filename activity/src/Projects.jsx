import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const ongoingProjects = [
    {
      id: 1,
      name: "AI Chatbot",
      team: ["Alice", "Bob", "Charlie"],
      mentor: "Dr. Smith",
      description: "An AI chatbot designed to assist customers with queries.",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      name: "Smart Traffic System",
      team: ["David", "Eve", "Frank"],
      mentor: "Dr. Johnson",
      description: "A smart system that optimizes traffic flow using AI.",
      video: "https://www.youtube.com/embed/IHZwWFHWa-w",
    },
    {
      id: 3,
      name: "Virtual Assistant",
      team: ["George", "Hannah", "Ian"],
      mentor: "Dr. Wilson",
      description: "A voice-based AI virtual assistant.",
      video: "https://www.youtube.com/embed/Tl0iAh1bKxU",
    },
    {
      id: 4,
      name: "Smart Agriculture System",
      team: ["Jack", "Kelly", "Leo"],
      mentor: "Dr. Adams",
      description: "An IoT-based system to monitor soil moisture and climate.",
      video: "https://www.youtube.com/embed/WzV4rQdzyv4",
    },
    {
      id: 5,
      name: "AI-Powered Resume Analyzer",
      team: ["Mia", "Noah", "Olivia"],
      mentor: "Dr. Carter",
      description: "An AI tool to analyze resumes and suggest improvements.",
      video: "https://www.youtube.com/embed/Zv11L-ZfrSg",
    },
  ];

  const completedProjects = [
    {
      id: 6,
      name: "E-commerce Website",
      team: ["Grace", "Henry", "Isabel"],
      mentor: "Dr. Lee",
      description: "An online platform for a clothing brand.",
      video: "https://www.youtube.com/embed/V-_O7nl0Ii0",
    },
    {
      id: 7,
      name: "Health Monitoring System",
      team: ["Jack", "Kate", "Leo"],
      mentor: "Dr. Brown",
      description: "A wearable device for tracking health metrics.",
      video: "https://www.youtube.com/embed/6Dh-RL__uN4",
    },
    {
      id: 8,
      name: "Automated Library System",
      team: ["Paul", "Quinn", "Rachel"],
      mentor: "Dr. Green",
      description: "An automated book issuing and tracking system.",
      video: "https://www.youtube.com/embed/lY2yjAdbvdQ",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects-container">
      <h2>Projects</h2>

      {/* Ongoing Projects */}
      <div className="projects-section">
        {/* Ongoing Projects Section */}
        <div className="project-category">
          <h3>Ongoing Projects</h3>
<<<<<<< HEAD
          <div className="project-list">
            {ongoingProjects.map((project) => (
              <div key={project.id} className="project-card" onClick={() => setSelectedProject(project)}>
                <h4>{project.name}</h4>
                <p><strong>Mentor:</strong> {project.mentor}</p>
                <p><strong>Team:</strong> {project.team.join(", ")}</p>
=======
          <div className="project-grid">
            {ongoingProjects.map((project) => (
              <div 
                key={project.id} 
                className="project-card" 
                onClick={() => setSelectedProject(project)}
              >
                <h4>{project.name}</h4>
                <p><strong>Mentor:</strong> {project.mentor}</p>
>>>>>>> eeae61f3ca172fd347692b9ffb5a04972fb6e33d
              </div>
            ))}
          </div>
        </div>

<<<<<<< HEAD
        {/* Completed Projects */}
        <div className="project-category">
          <h3>Completed Projects</h3>
          <div className="project-list">
            {completedProjects.map((project) => (
              <div key={project.id} className="project-card" onClick={() => setSelectedProject(project)}>
                <h4>{project.name}</h4>
                <p><strong>Mentor:</strong> {project.mentor}</p>
                <p><strong>Team:</strong> {project.team.join(", ")}</p>
=======
        {/* Completed Projects Section */}
        <div className="project-category">
          <h3>Completed Projects</h3>
          <div className="project-grid">
            {completedProjects.map((project) => (
              <div 
                key={project.id} 
                className="project-card" 
                onClick={() => setSelectedProject(project)}
              >
                <h4>{project.name}</h4>
                <p><strong>Mentor:</strong> {project.mentor}</p>
>>>>>>> eeae61f3ca172fd347692b9ffb5a04972fb6e33d
              </div>
            ))}
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Enlarged Project Details Card */}
=======
      {/* Project Details Modal */}
>>>>>>> eeae61f3ca172fd347692b9ffb5a04972fb6e33d
      {selectedProject && (
        <div className="project-details-card">
          <h3>{selectedProject.name}</h3>
          <p><strong>Team Members:</strong> {selectedProject.team.join(", ")}</p>
          <p><strong>Faculty Mentor:</strong> {selectedProject.mentor}</p>
          <p><strong>Description:</strong> {selectedProject.description}</p>
          <div className="video-container">
            <iframe 
              src={selectedProject.video} 
              title="Project Video Demo" 
              frameBorder="0" 
              allowFullScreen
            ></iframe>
          </div>
          <button className="close-btn" onClick={() => setSelectedProject(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Projects;

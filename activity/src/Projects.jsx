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
  ];

  const completedProjects = [
    {
      id: 3,
      name: "E-commerce Website",
      team: ["Grace", "Henry", "Isabel"],
      mentor: "Dr. Lee",
      description: "An online platform for a clothing brand.",
      video: "https://www.youtube.com/embed/V-_O7nl0Ii0",
    },
    {
      id: 4,
      name: "Health Monitoring System",
      team: ["Jack", "Kate", "Leo"],
      mentor: "Dr. Brown",
      description: "A wearable device for tracking health metrics.",
      video: "https://www.youtube.com/embed/6Dh-RL__uN4",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="projects-container">
      <h2>Projects</h2>

      <div className="projects-section">
        <div className="project-category">
          <h3>Ongoing Projects</h3>
          <table className="project-table">
            <thead>
              <tr>
                <th>Project Name</th>
              </tr>
            </thead>
            <tbody>
              {ongoingProjects.map((project) => (
                <tr key={project.id} onClick={() => handleProjectClick(project)}>
                  <td>{project.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="project-category">
          <h3>Completed Projects</h3>
          <table className="project-table">
            <thead>
              <tr>
                <th>Project Name</th>
              </tr>
            </thead>
            <tbody>
              {completedProjects.map((project) => (
                <tr key={project.id} onClick={() => handleProjectClick(project)}>
                  <td>{project.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

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

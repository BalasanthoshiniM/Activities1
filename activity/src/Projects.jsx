import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const ongoingProjects = [
    { id: 1, name: "AI Chatbot", description: "An AI chatbot for customer service." },
    { id: 2, name: "Smart Traffic System", description: "A system to optimize traffic flow using AI." },
  ];

  const completedProjects = [
    { id: 3, name: "E-commerce Website", description: "An online store for a clothing brand." },
    { id: 4, name: "Health Monitoring System", description: "A wearable device for tracking health metrics." },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="projects-container">
      <h2>Projects</h2>

      <div className="tables-container">
        {/* Ongoing Projects Table */}
        <div className="table-wrapper">
          <h3>Ongoing Projects</h3>
          <table>
            <thead>
              <tr>
                <th>Project Name</th>
              </tr>
            </thead>
            <tbody>
              {ongoingProjects.map((project) => (
                <tr key={project.id} onClick={() => handleProjectClick(project)}>
                  <td className="clickable">{project.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Completed Projects Table */}
        <div className="table-wrapper">
          <h3>Completed Projects</h3>
          <table>
            <thead>
              <tr>
                <th>Project Name</th>
              </tr>
            </thead>
            <tbody>
              {completedProjects.map((project) => (
                <tr key={project.id} onClick={() => handleProjectClick(project)}>
                  <td className="clickable">{project.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Display Selected Project Details */}
      {selectedProject && (
        <div className="project-details">
          <h3>{selectedProject.name}</h3>
          <p>{selectedProject.description}</p>
        </div>
      )}
    </div>
  );
};

export default Projects;

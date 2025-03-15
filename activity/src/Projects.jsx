import React from "react";
import "./Projects.css";

const Projects = () => {
  const ongoingProjects = [
    { id: 1, name: "AI Chatbot", team: "Team Alpha", status: "In Progress" },
    { id: 2, name: "Smart Traffic System", team: "Team Beta", status: "In Progress" },
  ];

  const completedProjects = [
    { id: 1, name: "E-commerce Website", team: "Team Gamma", status: "Completed" },
    { id: 2, name: "Health Monitoring System", team: "Team Delta", status: "Completed" },
  ];

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
                <th>ID</th>
                <th>Project Name</th>
                <th>Team</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {ongoingProjects.map((project) => (
                <tr key={project.id}>
                  <td>{project.id}</td>
                  <td>{project.name}</td>
                  <td>{project.team}</td>
                  <td>{project.status}</td>
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
                <th>ID</th>
                <th>Project Name</th>
                <th>Team</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {completedProjects.map((project) => (
                <tr key={project.id}>
                  <td>{project.id}</td>
                  <td>{project.name}</td>
                  <td>{project.team}</td>
                  <td>{project.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import "./CombinedStyles.css";

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <ul className="sidebar-menu">
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/hackathon">Hackathon</Link></li>
        <li><Link to="/internship">Internship</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </div>
  );
};

// Activities Component
const Activities = () => {
  return (
    <div className="activities-container">
      <div className="activities-header">
        <h1 className="activities-main-title">Activities</h1>
        <p className="activities-brief">
          Discover a world of opportunities through our diverse range of activities. 
          From hands-on projects to professional development, we offer something for everyone.
        </p>
      </div>
      <div className="activities-image-section">
        <div className="activities-image-grid">
          <div className="activity-image">
            <img src="/activity1.jpg" alt="Activity 1" />
          </div>
          <div className="activity-image">
            <img src="/activity2.jpg" alt="Activity 2" />
          </div>
          <div className="activity-image">
            <img src="/activity3.jpg" alt="Activity 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Hackathon Component
const Hackathon = () => {
  const hackathonData = {
    title: "Hackathon 2025",
    date: "January 13,2025",
    facultyIncharges: [
      "Dr. Sarah Johnson - Computer Science",
      "Prof. Michael Chen - Information Technology",
      "Dr. Emily Brown - Electronics"
    ],
    topTeams: [
      {
        rank: 1,
        name: "Tech Innovators",
        project: "AI-Powered Healthcare Assistant",
        members: [
          "SRI ANNAPOORANI S",
          "SUBASHINI G",
          "SWATHI T C",
          "SHREENITHA S",
          "SOWMIYA N",
          "SWETHA S"
        ]
      },
      {
        rank: 2,
        name: "Code Warriors",
        project: "Smart City Solutions",
        members: [
          "HARSHINI V",
          "KARTHIGA S",
          "JEYASHREE T N",
          "HARIHARAPRIYA R S",
          
        ]
      },
      {
        rank: 3,
        name: "Digital Pioneers",
        project: "Sustainable Energy Monitor",
        members: [
          "VITHESH T",
          "VISHAL J",
          "KARUPPASAMY M",
          "VISHAAL S",
          "SANTHOSH KUMAR K S D"
         
        ]
      },
      {
        rank: 4,
        name: "Future Builders",
        project: "Virtual Learning Platform",
        members: [
          "ARUNA T",
          "SHREE VIKHASHINI J",
          "SUSHMITHA T",
          "PRIYADHARSHINI R",
          "RAJADHARSHINI R",
          "AZHAGU MEENA G"
        ]
      },
      {
        rank: 5,
        name: "Innovation Squad",
        project: "Smart Agriculture System",
        members: [
          "AMBREIN S",
          "BALASANTHOSHINI M",
          "BAVAKARNI G",
          "SHONAA L R",
          "PRIYANKA K P",
          "ADHARSHANA M V"
        ]
      },
      {
        rank: 6,
        name: "Tech Titans",
        project: "IoT Security System",
        members: [
          "LOGESH KUMAR M",
          "NAGAVISHNU KARTHICK B S",
          "DEVIS ARUNA DEVI D",
          "VISHNU PRIYA T K",
          "JEEVAJOTHI M",
          "SHANMUGAPIRIYAN M"
        ]
      }
    ],
    images: [
      "/hackathon1.jpg",
      "/hackathon2.jpg",
      "/hackathon3.jpg"
    ]
  };

  return (
    <div className="hackathon-container">
      <div className="hackathon-header">
        <h1 className="hackathon-main-title">{hackathonData.title}</h1>
        <p className="hackathon-date">Held on: {hackathonData.date}</p>
      </div>

      <div className="hackathon-content">
        <div className="hackathon-section faculty-section">
          <h2>Faculty Incharges</h2>
          <ul className="faculty-list">
            {hackathonData.facultyIncharges.map((faculty, index) => (
              <li key={index}>{faculty}</li>
            ))}
          </ul>
        </div>

        <div className="hackathon-section teams-section">
          <h2>Heartiest Congratulations To the Winning Teams</h2>
          <div className="teams-grid">
            {hackathonData.topTeams.map((team) => (
              <div key={team.rank} className="team-card">
                <div className="team-rank">#{team.rank}</div>
                <div className="team-members">
                  {team.members.map((member, index) => (
                    <span key={index} className="member">{member}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hackathon-section images-section">
          <h2>Event Gallery</h2>
          <div className="hackathon-image-grid">
            {hackathonData.images.map((image, index) => (
              <div key={index} className="hackathon-image">
                <img src={image} alt={`Hackathon ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Internship Component
const Internship = () => {
  const internshipData = {
    title: "In-House Internship",
    images: [
      "/internship1.jpg",
      "/internship2.jpg",
      "/internship3.jpg"
    ],
    projects: [
      {
        id: 1,
        name: "Smart Campus Management System",
        faculty: "Dr. Sarah Wilson",
        members: [
          "SRI ANNAPOORANI S",
          "SUBASHINI G",
          "SWATHI T C",
          "SHREENITHA S",
          "SOWMIYA N",
          "SWETHA S"
        ]
      },
      {
        id: 2,
        name: "AI-Powered Learning Platform",
        faculty: "Prof. Robert Johnson",
        members: [
          "HARSHINI V",
          "KARTHIGA S",
          "JEYASHREE T N",
          "HARIHARAPRIYA R S",
          "KAVIYA S",
          "KEERTHANA S"
        ]
      },
      {
        id: 3,
        name: "IoT Security Framework",
        faculty: "Dr. Emily Chen",
        members: [
          "VITHESH T",
          "VISHAL J",
          "KARUPPASAMY M",
          "VISHAAL S",
          "SANTHOSH KUMAR K S D",
          "SELVAMANI K"
        ]
      },
      {
        id: 4,
        name: "Virtual Learning Platform",
        faculty: "Dr. Michael Brown",
        members: [
          "ARUNA T",
          "SHREE VIKHASHINI J",
          "SUSHMITHA T",
          "PRIYADHARSHINI R",
          "RAJADHARSHINI R",
          "AZHAGU MEENA G"
        ]
      },
      {
        id: 5,
        name: "Smart Agriculture System",
        faculty: "Prof. Lisa Anderson",
        members: [
          "AMBREIN S",
          "BALASANTHOSHINI M",
          "BAVAKARNI G",
          "SHONAA L R",
          "PRIYANKA K P",
          "ADHARSHANA M V"
        ]
      },
      {
        id: 6,
        name: "IoT Security System",
        faculty: "Dr. David Lee",
        members: [
          "LOGESH KUMAR M",
          "NAGAVISHNU KARTHICK B S",
          "DEVIS ARUNA DEVI D",
          "VISHNU PRIYA T K",
          "JEEVAJOTHI M",
          "SHANMUGAPIRIYAN M"
        ]
      }
    ]
  };

  return (
    <div className="internship-container">
      <div className="internship-header">
        <h1 className="internship-main-title">{internshipData.title}</h1>
      </div>

      <div className="internship-section images-section">
        <div className="internship-image-grid">
          {internshipData.images.map((image, index) => (
            <div key={index} className="internship-image">
              <img src={image} alt={`Internship ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {internshipData.projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3 className="project-name">{project.name}</h3>
              <div className="faculty-in-charge">
                <span className="faculty-label">Faculty Mentor:</span>
                <span className="faculty-name">{project.faculty}</span>
              </div>
            </div>
            <div className="team-members">
              <h4 className="members-title">Team Members</h4>
              {project.members.map((member, index) => (
                <span key={index} className="member">{member}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Projects Component
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const ongoingProjects = [
    { id: 1, title: "Web Development", description: "Building a responsive website" },
    { id: 2, title: "Mobile App", description: "Developing an iOS application" },
  ];

  const completedProjects = [
    { id: 3, title: "E-commerce Platform", description: "Completed online store" },
    { id: 4, title: "Portfolio Website", description: "Personal portfolio project" },
  ];

  return (
    <div className="projects-container">
      <div className="projects-section">
        <div className="project-category">
          <h2>Ongoing Projects</h2>
          <div className="project-list">
            {ongoingProjects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="project-category">
          <h2>Completed Projects</h2>
          <div className="project-list">
            {completedProjects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <div className="project-details-card">
          <h2>{selectedProject.title}</h2>
          <p>{selectedProject.description}</p>
          <button onClick={() => setSelectedProject(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/activities" />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/hackathon" element={<Hackathon />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App; 
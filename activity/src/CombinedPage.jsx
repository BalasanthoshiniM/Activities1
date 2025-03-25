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
  const activitiesData = {
    title: "Activities",
    brief: "Explore our exciting activities and events! 🎉",
    images: [
      "/activity/src/assets/act1.jpg",
      "/activity2.jpg",
      "/activity3.jpg"
    ]
  };

  return (
    <div className="activities-container">
      <div className="activities-header">
        <h1 className="activities-main-title">{activitiesData.title}</h1>
        <p className="activities-brief">{activitiesData.brief}</p>
      </div>
      <div className="activities-image-section">
        <div className="activities-image-grid">
          {activitiesData.images.map((image, index) => (
            <div key={index} className="activity-image">
              <img src={image} alt={`Activity ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Hackathon Component
const Hackathon = () => {
  const hackathonData = {
    title: "Hackathon 2024",
    date: "March 15-17, 2024",
    images: [
      "/hackathon1.jpg",
      "/hackathon2.jpg",
      "/hackathon3.jpg"
    ],
    topTeams: [
      {
        rank: 1,
        teamName: "Tech Innovators",
        project: "AI-Powered Healthcare System",
        members: [
          "SRI ANNAPOORANI S",
          "SUBASHINI G",
          "SWATHI TC",
          "SHREENITHA S",
          "SOWMIYA N",
          "SWETHA S"
        ]
      },
      {
        rank: 2,
        teamName: "Code Warriors",
        project: "Smart City Solutions",
        members: [
          "HARSHINI V",
          "KARTHIGA S",
          "JEYASHREE TN",
          "HARIHARAPRIYA RS"
          
        ]
      },
      {
        rank: 3,
        teamName: "Digital Pioneers",
        project: "Blockchain Security",
        members: [
          "VITHESH T",
          "VISHAL J",
          "KARUPPASAMY M",
          "VISHAAL S",
          "SANTHOSH KUMAR KSD"
          
        ]
      },
      {
        rank: 4,
        teamName: "Future Builders",
        project: "IoT Smart Home",
        members: [
          "ARUNA T",
          "SHREE VIKHASHINI J",
          "SUSHMITHA T",
          "PRIYADHARSHINI M",
          "RAJADHARSHINI R",
          "AZHAGU MEENA G"
        ]
      },
      {
        rank: 5,
        teamName: "Innovation Squad",
        project: "AR Education Platform",
        members: [
          "AMBREIN S",
          "BALASANTHOSHINI M",
          "BAVAKARNI G",
          "ADHARSHANA MV",
          "PRIYANKA KP",
          "SHONAA LR"
        ]
      },
      {
        rank: 6,
        teamName: "Tech Titans",
        project: "IoT Security System",
        members: [
          "LOGESH KUMAR M",
          "NAGAVISHNU KARTHICK BS",
          "DEVIS ARUNA DEVI D",
          "VISHNU PRIYA TK",
          "JEEVAJOTHI M",
          "SHANMUGAPRIYAN M"
        ]
      }
    ]
  };

  return (
    <div className="hackathon-container">
      <div className="hackathon-header">
        <h1 className="hackathon-main-title">{hackathonData.title} 🏆</h1>
        <p className="hackathon-date">{hackathonData.date}</p>
      </div>

      <div className="hackathon-content">
        <div className="hackathon-section">
          <h2>Event Gallery 📸</h2>
          <div className="hackathon-image-grid">
            {hackathonData.images.map((image, index) => (
              <div key={index} className="hackathon-image">
                <img src={image} alt={`Hackathon ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="hackathon-section">
          <h2>Top Teams 🏅</h2>
          <div className="teams-grid">
            {hackathonData.topTeams.map((team) => (
              <div key={team.rank} className="team-card">
                <div className="team-rank">#{team.rank}</div>
                <div className="team-members">
                  <h4>Team Members</h4>
                  {team.members.map((member, index) => (
                    <span key={index} className="member">{member}</span>
                  ))}
                </div>
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
        name: "Faculty Data Management System",
        faculty: "PADMA DEVI S",
        members: [
          "HARISH KS",
          "SIVASAKTHIVEL P",
          "NAGASURYA TG",
          "PRANAV MV",
          "ASWIN KUMAR G"
          
        ]
      },
      {
        id: 2,
        name: "Lab Session Management System",
        faculty: "PADMA DEVI S",
        members: [
          "ADITHYA R",
          "HARI KRISHNAN S",
          "MITHUN KUMAR SR",
          "SURYA NAARAAYANAN CV",
          "THARUN VV"
          
        ]
      },
      {
        id: 3,
        name: "Student Data Management System",
        faculty: "SHANTHALAKSHMI REVATHY J",
        members: [
          "MADHAVA K",
          "HARSHA VARTHANAN S",
          "RITIKA SACHDEVA M",
          "MANASADEVI TG",
          "MATCHARANI J"
         
        ]
      },
      {
        id: 4,
        name: "Internal Event Management System",
        faculty: "SHANTHALAKSHMI REVATHY J",
        members: [
          "ALEX PANDIYAN M",
          "ARUN KUMAR K",
          "DAVID DHINAKARAN J",
          "HARISH V",
          "SURYA PRAKASH M"
          
        ]
      },
      {
        id: 5,
        name: "Leave Approval System",
        faculty: "Dr.A.M.RAJESWARI",
        members: [
          "DINESH KUMAR KK",
          "UDHAYA CHANDRA",
          "PANDIAN S",
          "VINOTH KUMAR KB"
          
        ]
      },
      {
        id: 6,
        name: "Defaulter Tracking System",
        faculty: "Mrs.SAHEBZATHI",
        members: [
          "ABITHA SRI G",
          "MUTHIESWARI S",
          "SANJANA R"
          
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
    { 
      id: 101, 
      title: "Learning Management System", 
      faculty: "Dr. Sarah Wilson",
      members: [
        "SRI ANNAPOORANI S",
        "SUBASHINI G",
        "SWATHI T C",
        "SHREENITHA S",
        "SOWMIYA N",
        "SWETHA S"
      ],
      demoVideo: "/demo1.mp4"
    },
    { 
      id: 102, 
      title: "Student Performance Tracker", 
      faculty: "Prof. Robert Johnson",
      members: [
        "HARSHINI V",
        "KARTHIGA S",
        "JEYASHREE T N",
        "HARIHARAPRIYA R S",
        "KAVIYA S",
        "KEERTHANA S"
      ],
      demoVideo: "/demo2.mp4"
    },
    { 
      id: 103, 
      title: "Alumini Connect", 
      faculty: "Dr. Emily Chen",
      members: [
        "VITHESH T",
        "VISHAL J",
        "KARUPPASAMY M",
        "VISHAAL S",
        "SANTHOSH KUMAR K S D",
        "SELVAMANI K"
      ],
      demoVideo: "/demo3.mp4"
    },
    { 
      id: 104, 
      title: "Student Hub", 
      faculty: "Dr. Michael Brown",
      members: [
        "ARUNA T",
        "SHREE VIKHASHINI J",
        "SUSHMITHA T",
        "PRIYADHARSHINI R",
        "RAJADHARSHINI R",
        "AZHAGU MEENA G"
      ],
      demoVideo: "/demo4.mp4"
    },
    { 
      id: 105, 
      title: "Coding Platform", 
      faculty: "Prof. Lisa Anderson",
      members: [
        "AMBREIN S",
        "BALASANTHOSHINI M",
        "BAVAKARNI G",
        "SHONAA L R",
        "PRIYANKA K P",
        "ADHARSHANA M V"
      ],
      demoVideo: "/demo5.mp4"
    }
  ];

  const completedProjects = [
    { 
      id: 201, 
      title: "Quiz", 
      faculty: "Dr. David Lee",
      members: [
        "LOGESH KUMAR M",
        "NAGAVISHNU KARTHICK B S",
        "DEVIS ARUNA DEVI D",
        "VISHNU PRIYA T K",
        "JEEVAJOTHI M",
        "SHANMUGAPIRIYAN M"
      ],
      demoVideo: "/demo6.mp4"
    },
    { 
      id: 202, 
      title: "Leave Management System", 
      faculty: "Prof. James Wilson",
      members: [
        "ALEX TURNER",
        "SOPHIE CHEN",
        "RYAN PARK",
        "EMMA WILSON",
        "JAMES BROWN",
        "LILY ZHANG"
      ],
      demoVideo: "/demo7.mp4"
    },
    { 
      id: 203, 
      title: "QB To QP Converter", 
      faculty: "Dr. Rachel Chen",
      members: [
        "JOHN DOE",
        "JANE SMITH",
        "MIKE JOHNSON",
        "SARAH WILSON",
        "DAVID BROWN",
        "EMMA DAVIS"
      ],
      demoVideo: "/demo8.mp4"
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-section">
        <div className="project-category">
          <h2>Ongoing Projects 🚀</h2>
          <div className="project-list">
            {ongoingProjects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <h3>{project.title}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="project-category">
          <h2>Completed Projects 🎯</h2>
          <div className="project-list">
            {completedProjects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <h3>{project.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <div className="project-details-overlay">
          <div className="project-details-card">
            <button className="close-button" onClick={() => setSelectedProject(null)}>×</button>
            <h2>{selectedProject.title}</h2>
            <div className="project-details-content">
              <div className="project-faculty">
                <h3>Faculty Mentor</h3>
                <p>{selectedProject.faculty}</p>
              </div>
              <div className="project-members">
                <h3>Team Members</h3>
                <div className="members-grid">
                  {selectedProject.members.map((member, index) => (
                    <span key={index} className="member">{member}</span>
                  ))}
                </div>
              </div>
              <div className="project-demo">
                <h3>Demo Video</h3>
                <video controls className="demo-video">
                  <source src={selectedProject.demoVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
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
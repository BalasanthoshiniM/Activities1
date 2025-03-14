import React from "react";
import Sidebar from "./Sidebar";
import Activities from "./Activities";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Activities />
      </div>
    </div>
  );
};

export default App;

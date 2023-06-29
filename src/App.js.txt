import React from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Safety from "./Components/Safety";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="main">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="nav">
        <div className="navbar">
          <Navbar />
        </div>

        <div>
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/Safety" element={<Safety />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

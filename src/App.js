import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Safety from "./Components/Safety";
import Dashboard from "./Components/Dashboard";
import Line from './Components/Line';
import Raised from './Components/Raised';
import Manager from "./Components/Manager";

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

        <div className="content">
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/Safety" element={<Safety />} />
            <Route path="/Line" element={<Line />} />
            <Route path="/Raised" element={<Raised />} />
            <Route path="/Manager" element={<Manager />} />
          </Routes>
        </div>

        <div className="footer">
          <div className="app-footer" style={{
            marginTop: '2rem',
            background: '#fff',
            padding: '1.25rem',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            boxShadow: '0 4px 20px 1px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.08)'
          }}>
            <div className="footer-bottom d-flex justify-content-center align-items-center">
              <div className="align-items-center">
                <div>
                  <p className="m-0" style={{
                    textAlign: "center",
                    display: "block",
                    marginBlockStart: "1em",
                    marginBlockEnd: "1em",
                    marginInlineStart: "0px",
                    marginInlineEnd: "0px",
                  }}>© {new Date().getFullYear()} Jindal Steel &amp; Power | All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

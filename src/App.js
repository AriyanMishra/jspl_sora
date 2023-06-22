import React from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Employees from "./Components/Employees";
import Home from "./Components/Home";

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
            <Route path="/" exact element={<Home />} />
            <Route path="/employees" element={<Employees />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

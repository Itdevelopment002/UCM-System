import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './components/Register/Register';
import Login from './components/Login/Login'; 
import Dashboard from './components/FormBoard/FormBoard';  // Import the new Dashboard component
import { Link } from 'react-router-dom';
import ConstructionDemolishManagement from "./components/LandingPage/ConstructionDemolishManagement";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Correctly set up the landing page route */}
          <Route path="/" element={<ConstructionDemolishManagement />} />

          {/* Routes for Register and Login */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Route to Dashboard */}
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

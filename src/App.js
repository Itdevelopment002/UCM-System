import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './components/Register/Register';
import Dashboard from './components/FormBoard/FormBoard';  
import { Link } from 'react-router-dom';
import ConstructionDemolishManagement from "./components/LandingPage/ConstructionDemolishManagement";
import Otp from './components/Login/Otp';
import Verification from './components/Login/Verification';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Correctly set up the landing page route */}
          <Route path="/" element={<ConstructionDemolishManagement />} />

          {/* Routes for Register and Login */}
          <Route path="/register" element={<Register />} />
          <Route path="/Otp" element={<Otp />} />
          <Route path="/verification" element={<Verification/>} />


          {/* Route to Dashboard */}
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

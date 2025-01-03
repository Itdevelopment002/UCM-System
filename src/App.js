import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ConstructionDemolishManagement from './components/LandingPage/ConstructionDemolishManagement';

import Register from './components/Register/Register';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* <Header />
        <Sidebar /> */}
        <Routes>
          {/* Route for RegisterPage */}
          <Route path="/register" element={<Register />} />
          
          {/* Landing Page */}
          <Route path="/" element={<ConstructionDemolishManagement />} />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;

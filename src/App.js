import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ConstructionDemolishManagement from './components/LandingPage/ConstructionDemolishManagement';

import Register from './components/Register/Register';
import Form from './components/Form/Form';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* <Header />
        <Sidebar />
        <Form /> */}
        <Routes>
          {/* Route for RegisterPage */}
          <Route path="/register" element={<Register />} />
         <Route path='login' element={<Login />} />
         
          <Route path="/" element={<ConstructionDemolishManagement />} />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;

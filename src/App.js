import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Hwizardbar from './components/Form/Hwizardbar'; // Import Hwizardbar
import FunctionalRequiremnt from './components/Form/FunctionalRequiremnt'; // Import your form
import Login from './components/Login/Login'; // Example: You can import more forms here
import NoticeDetails from './components/Form/NoticeDetails';
import CountOrder from './components/Form/CountOrder';
import ComplaintDetails from './components/Form/ComplaintDetails';
import Remark from './components/Form/Remark';
import DemolitionOrder from './components/Form/DemolitionOrder';
import { StepProvider } from './components/StepContext';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
    <StepProvider>
    <Sidebar />
        <div className="main-content">
          <Hwizardbar /> {/* Hwizardbar stays at the top */}
          <div className="form-container">
            <Routes>
              <Route path="/form" element={<FunctionalRequiremnt />} />
              <Route path="/complain-details" element={<ComplaintDetails />} />
              <Route path="/count-order" element={< CountOrder />}/>
              <Route path="/notice-details" element={<NoticeDetails />} />
              <Route path="/login" element={<Login />} /> {/* Example of another route */}
              <Route path="/remark" element={<Remark />} /> 
              <Route path="/demolition-order" element={<DemolitionOrder />} /> 
              {/* Add more routes here for other forms */}
            </Routes>
          </div>
        </div>
    </StepProvider>
      </div>
    </Router>
  );
}

export default App;

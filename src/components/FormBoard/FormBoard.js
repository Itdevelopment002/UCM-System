import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Hwizardbar from '../Hwizardbar/Hwizardbar'; 
import FunctionalRequiremnt from '../Form/FunctionalRequiremnt'; 
import NoticeDetails from '../Form/NoticeDetails';
import CountOrder from '../Form/CountOrder';
import ComplaintDetails from '../Form/ComplaintDetails';
import Remark from '../Form/Remark';
import DemolitionOrder from '../Form/DemolitionOrder';
import { StepProvider } from '../StepContext';
import './FormBoard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <StepProvider>
        <Sidebar />
       
        <div className="main-content">
        <Hwizardbar /> {/* Make sure this is fixed at the top */}
          <div >
            <Routes>
              <Route path="/form" element={<FunctionalRequiremnt />} />
              <Route path="/complain-details" element={<ComplaintDetails />} />
              <Route path="/count-order" element={<CountOrder />} />
              <Route path="/notice-details" element={<NoticeDetails />} />
              <Route path="/remark" element={<Remark />} />
              <Route path="/demolition-order" element={<DemolitionOrder />} />
            </Routes>
         </div>
        </div>
      </StepProvider>
    </div>
  );
};

export default Dashboard;

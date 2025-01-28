import React, { useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Hwizardbar from '../Hwizardbar/Hwizardbar'; 
import FunctionalRequiremnt from '../Form/FunctionalRequiremnt'; 
import NoticeDetails from '../Form/NoticeDetails';
import CountOrder from '../Form/CountOrder';
import ComplaintDetails from '../Form/ComplaintDetails';
import Remark from '../Form/Remark';
import DemolitionOrder from '../Form/DemolitionOrder';
import { StepProvider } from '../Context/StepContext';
import './FormBoard.css';

const Dashboard = () => {
  
  const [activeForm, setActiveForm] = useState(0); 
  
  const handleStepChange = (step) => {
    setActiveForm(step); 
  };
  
  const formComponents = [
    FunctionalRequiremnt,
    ComplaintDetails,
    NoticeDetails,
    DemolitionOrder,
    CountOrder,
    Remark,
  ];

  
  const CurrentForm = formComponents[activeForm];

  return (
    <div className="dashboard-container">
      <Header />
      <StepProvider>
        <Sidebar />
        <div className="main-content">
          {/* Pass activeForm and onStepChange to Hwizardbar */}
          <Hwizardbar 
            activeForm={activeForm} 
            onStepChange={(index) => setActiveForm(index)} 
          />

          <div className="form-content">
            {/* Render the active form */}
            <CurrentForm
              onNext={() => setActiveForm((prev) => Math.min(prev + 1, formComponents.length - 1))} 
              onPrevious={() => setActiveForm((prev) => Math.max(prev - 1, 0))} 
            />
          </div>
        </div>
      </StepProvider>
    </div>
  );
};

export default Dashboard;

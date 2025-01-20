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
import { StepProvider } from '../StepContext';
import './FormBoard.css';

const Dashboard = () => {
  // State to track the active form
  const [activeForm, setActiveForm] = useState(0); // Index-based navigation
  
  const handleStepChange = (step) => {
    setActiveForm(step); // Update active form
  };
  // List of form components
  const formComponents = [
    FunctionalRequiremnt,
    ComplaintDetails,
    NoticeDetails,
    DemolitionOrder,
    CountOrder,
    Remark,
  ];

  // Render the current form based on activeForm index
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
              onNext={() => setActiveForm((prev) => Math.min(prev + 1, formComponents.length - 1))} // Go to the next form
              onPrevious={() => setActiveForm((prev) => Math.max(prev - 1, 0))} // Go to the previous form
            />
          </div>
        </div>
      </StepProvider>
    </div>
  );
};

export default Dashboard;

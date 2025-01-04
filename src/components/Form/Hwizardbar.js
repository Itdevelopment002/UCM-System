import React, { useContext } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { StepContext } from '../StepContext'; // Import shared context
import './Hwizardbar.css';

const Hwizardbar = () => {
  const navigate = useNavigate();
  const { activeStep, setActiveStep } = useContext(StepContext); // Use shared state

  const steps = [
    { name: 'Information Collection Form', path: '/form', tab: 'info' },
    { name: 'Complaint Details', path: '/complain-details', tab: 'complaint' },
    { name: 'Notice Details', path: '/notice-details', tab: 'notice' },
    { name: 'Demolition Details', path: '/demolition-order', tab: 'demolition' },
    { name: 'Court Order Details', path: '/count-order', tab: 'court' },
    { name: 'Submission Details', path: '/remark', tab: 'submission' },
  ];

  const handleTabClick = (route, index) => {
    setActiveStep(index); // Update global active step
    navigate(route); // Navigate to the desired route
  };

  return (
    <div className="container-bar">
      <div className="first-row">
        <div>
          <h3 className="heading">Functional Requirements</h3>
        </div>
        <div className="arrow-buttons">
          <button
            className="arrow-button"
            onClick={() => activeStep > 0 && handleTabClick(steps[activeStep - 1].path, activeStep - 1)}
            disabled={activeStep === 0} // Disable button on the first tab
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            className="arrow-button"
            onClick={() => activeStep < steps.length - 1 && handleTabClick(steps[activeStep + 1].path, activeStep + 1)}
            disabled={activeStep === steps.length - 1} // Disable button on the last tab
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
      <div className="tab-container">
        {steps.map((step, index) => (
          <div
            key={step.tab}
            className={`tab tab-width-${step.tab} ${activeStep === index ? 'active' : ''}`}
            onClick={() => handleTabClick(step.path, index)}
          >
            <div className="tab-text">{step.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hwizardbar;

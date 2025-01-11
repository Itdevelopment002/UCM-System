import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useStepContext } from '../StepContext'; // Use custom hook to access context
import './Hwizardbar.css';

const Hwizardbar = () => {
  const navigate = useNavigate();
  const { activeStep, setActiveStep } = useStepContext();

  const steps = [
    { name: 'Information Collection Form', path: '/dashboard/form', tab: 'info' },
    { name: 'Complaint Details', path: '/dashboard/complain-details', tab: 'complaint' },
    { name: 'Notice Details', path: '/dashboard/notice-details', tab: 'notice' },
    { name: 'Demolition Details', path: '/dashboard/demolition-order', tab: 'demolition' },
    { name: 'Court Order Details', path: '/dashboard/count-order', tab: 'court' },
    { name: 'Remark', path: '/dashboard/remark', tab: 'submission' },
  ];

  const handleTabClick = (route, index) => {
    setActiveStep(index);
    navigate(route);
  };

  // Inline style for the arrow buttons
  const arrowButtonStyle = (isDisabled) => ({
    backgroundColor: isDisabled ? 'grey' : '#5038ed', // default blue background
   
    cursor: isDisabled ? 'not-allowed' : 'pointer',
   
    borderRadius: '50%', // Optional, for a rounded button
  });

  return (
    <div className="container-bar">
      <div className="first-row">
        <h3 className="heading1">Functional Requirements</h3>
        <div className="arrow-buttons">
          <button
            className="arrow-button"
            onClick={() => activeStep > 0 && handleTabClick(steps[activeStep - 1].path, activeStep - 1)}
            disabled={activeStep === 0}
            style={arrowButtonStyle(activeStep === 0)}
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            className="arrow-button"
            onClick={() => activeStep < steps.length - 1 && handleTabClick(steps[activeStep + 1].path, activeStep + 1)}
            disabled={activeStep === steps.length - 1}
            style={arrowButtonStyle(activeStep === steps.length - 1)}
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
      <div className="tab-container">
        {steps.map((step, index) => (
          <div
            key={step.tab}
            className={`tab ${activeStep === index ? 'active' : ''}`}
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

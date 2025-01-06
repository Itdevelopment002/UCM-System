import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useStepContext } from '../StepContext'; // Use custom hook to access context
import './Sidebar.css';
import bro from '../../images/bro.png';

const Sidebar = () => {
  const navigate = useNavigate();
  const { activeStep, setActiveStep } = useStepContext(); // Use shared state via hook

  const steps = [
    { name: 'Information Collection Form', path: '/dashboard/form' },
    { name: 'Complaint Details', path: '/dashboard/complain-details' },
    { name: 'Notice Details', path: '/dashboard/notice-details' },
    { name: 'Demolition Details', path: '/dashboard/demolition-order' },
    { name: 'Court Order Details', path: '/dashboard/count-order' },
    { name: 'Submission Details', path: '/dashboard/remark' },
  ];

  const handleStepClick = (index) => {
    setActiveStep(index);
    navigate(steps[index].path);
  };

  const handleNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
      navigate(steps[activeStep + 1].path);
    }
  };

  const handlePreviousStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
      navigate(steps[activeStep - 1].path);
    }
  };

  return (
    <div className="sidebar-outer-div">
      {steps.map((step, index) => (
        <div
          key={index}
          className="step-container"
          onClick={() => handleStepClick(index)}
        >
          <div className="step-text-container">
            <div className="step-number">Step {index + 1}</div>
            <div className="step-title">{step.name}</div>
          </div>
          <div className={`circle-button ${index === activeStep ? 'active' : ''}`}>
            <span>{index + 1}</span>
          </div>
        </div>
      ))}

      <div className="next-step-container">
        <button
          className="prev-step"
          onClick={handlePreviousStep}
          disabled={activeStep === 0}
        >
          <FaArrowLeft size={20} />
        </button>
        <button
           style={{fontSize:"12px"}}
          className="next-step1"
          onClick={handleNextStep}
          disabled={activeStep === steps.length - 1}
        >
          Next Step
          <FaArrowRight style={{ padding: '2px' }} size={20} />
        </button>
      </div>
      <img src={bro} style={{height:"130px", width:"250px", padding:"10px", marginTop:"0px"}} alt="bro" />
    </div>
  );
};

export default Sidebar;

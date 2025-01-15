import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useStepContext } from '../StepContext';
import './Sidebar.css';
import bro from '../../images/bro.png';

const Sidebar = () => {
  const navigate = useNavigate();
  const { activeStep, setActiveStep } = useStepContext();
  const location = useLocation(); // Access current path

  const steps = [
    { name: 'Information Collection Form', path: '/dashboard/form' },
    { name: 'Complaint Details', path: '/dashboard/complain-details' },
    { name: 'Notice Details', path: '/dashboard/notice-details' },
    { name: 'Demolition Details', path: '/dashboard/demolition-order' },
    { name: 'Court Order Details', path: '/dashboard/count-order' },
    { name: 'Remarks', path: '/dashboard/remark' },
  ];

  useEffect(() => {
    const currentStep = steps.findIndex((step) => step.path === location.pathname);
    if (currentStep !== -1) {
      setActiveStep(currentStep); // Set the active step based on the current path
    }
  }, [location.pathname, steps, setActiveStep]);

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
    <>
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
            <div
              className={`circle-button ${index === activeStep ? 'active' : ''}`}
              style={{
                position: 'relative',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: index === activeStep ? '#5038ed' : 'white',
                border: index === activeStep ? '1px solid #5038ed' : '1px solid gray',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: index === activeStep ? 'white' : 'gray',
                fontWeight: '600',
              }}
            >
              <span>{index + 1}</span>
              {index > 0 && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '50%',
                    width: '1px',
                    height: '20px',
                    backgroundColor: 'lightgray',
                    transform: 'translateX(-50%)',
                  }}
                ></div>
              )}
              {index < steps.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-20px',
                    left: '50%',
                    width: '1px',
                    height: '20px',
                    backgroundColor: 'lightgray',
                    transform: 'translateX(-50%)',
                  }}
                ></div>
              )}
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
            className="next-step1"
            onClick={handleNextStep}
            disabled={activeStep === steps.length - 1}
          >
            Next Step
            <FaArrowRight style={{ padding: '2px' }} size={20} />
          </button>
        </div>
      </div>

      <img
        src={bro}
        alt="bro"
        className="sidebar-image"
      />
    </>
  );
};

export default Sidebar;
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useStepContext } from "../StepContext";
import "./Hwizardbar.css";

const Hwizardbar = () => {
  const navigate = useNavigate();
  const { activeStep, setActiveStep } = useStepContext();
  const location = useLocation();

  const [filledSteps, setFilledSteps] = useState([]); // Track filled forms

  const steps = [
    { name: "Information Collection Form", path: "/dashboard/form", tab: "info" },
    { name: "Complaint Details", path: "/dashboard/complain-details", tab: "complaint" },
    { name: "Notice Details", path: "/dashboard/notice-details", tab: "notice" },
    { name: "Demolition Details", path: "/dashboard/demolition-order", tab: "demolition" },
    { name: "Court Order Details", path: "/dashboard/count-order", tab: "court" },
    { name: "Remark", path: "/dashboard/remark", tab: "submission" },
  ];

  useEffect(() => {
    const currentStep = steps.findIndex((step) => step.path === location.pathname);
    if (currentStep !== -1) {
      setActiveStep(currentStep);
    }
  }, [location.pathname, steps, setActiveStep]);

  const handleTabClick = (route, index) => {
    if (index <= activeStep || filledSteps.includes(index)) {
      // Allow navigation to the current or previously filled steps
      setActiveStep(index);
      navigate(route);
    }
  };

  const markStepAsFilled = (stepIndex) => {
    if (!filledSteps.includes(stepIndex)) {
      setFilledSteps((prev) => [...prev, stepIndex]); // Mark step as filled
    }
  };

  const arrowButtonStyle = (isDisabled) => ({
    backgroundColor: isDisabled ? "grey" : "#5038ed",
    cursor: isDisabled ? "not-allowed" : "pointer",
    borderRadius: "50%",
  });

  return (
    <div className="container-bar">
      <div className="first-row">
        <h3 className="heading1">Functional Requirements</h3>
        <div className="arrow-buttons">
          {/* Backward Arrow */}
          <button
            className="arrow-button"
            onClick={() =>
              activeStep > 0 && handleTabClick(steps[activeStep - 1].path, activeStep - 1)
            }
            disabled={activeStep === 0} // Backward always enabled after the first step
            style={arrowButtonStyle(activeStep === 0)}
          >
            <FaArrowLeft size={20} />
          </button>

          {/* Forward Arrow */}
          <button
            className="arrow-button"
            onClick={() => {
              if (activeStep < steps.length - 1) {
                markStepAsFilled(activeStep); // Mark the current step as filled
                handleTabClick(steps[activeStep + 1].path, activeStep + 1);
              }
            }}
            disabled={
              activeStep === steps.length - 1 || // Disable forward arrow on the last step
              !filledSteps.includes(activeStep) // Disable if the current step is not filled
            }
            style={arrowButtonStyle(
              activeStep === steps.length - 1 || !filledSteps.includes(activeStep)
            )}
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="tab-container">
        {steps.map((step, index) => (
          <div
            key={step.tab}
            className={`tab ${activeStep === index ? "active" : ""} ${
              filledSteps.includes(index) ? "filled" : ""
            }`}
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

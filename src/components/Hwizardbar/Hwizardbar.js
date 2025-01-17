import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useStepContext } from "../StepContext";
import "./Hwizardbar.css";

const Hwizardbar = () => {
  const navigate = useNavigate();
  const { activeStep, setActiveStep } = useStepContext();
  const location = useLocation(); // Access current path

  const [isAllFormsFilled, setIsAllFormsFilled] = useState(false); // Track if all forms are filled

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
      setActiveStep(currentStep); // Set the active step based on the current path
    }
  }, [location.pathname, steps, setActiveStep]);

  const handleTabClick = (route, index) => {
    setActiveStep(index);
    navigate(route);
  };

  // Disable/Enable Forward Arrow Logic
  const handleFormCompletion = (stepIndex) => {
    // Check if all forms (1-5) are filled
    if (stepIndex === 5) {
      setIsAllFormsFilled(true); // All forms filled
    } else {
      setIsAllFormsFilled(false); // Reset if not all forms are filled
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
            onClick={() => activeStep > 0 && handleTabClick(steps[activeStep - 1].path, activeStep - 1)}
            disabled={activeStep === 0}
            style={arrowButtonStyle(activeStep === 0)}
          >
            <FaArrowLeft size={20} />
          </button>

          {/* Forward Arrow */}
          <button
            className="arrow-button"
            onClick={() => {
              if (activeStep < steps.length - 1) {
                handleTabClick(steps[activeStep + 1].path, activeStep + 1);
                handleFormCompletion(activeStep + 1); // Check form completion after forward navigation
              }
            }}
            disabled={activeStep === steps.length - 1 || !isAllFormsFilled}
            style={arrowButtonStyle(activeStep === steps.length - 1 || !isAllFormsFilled)}
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="tab-container">
        {steps.map((step, index) => (
          <div
            key={step.tab}
            className={`tab ${activeStep === index ? "active" : ""}`}


          >
            <div className="tab-text">{step.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hwizardbar;
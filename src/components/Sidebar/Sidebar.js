import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useStepContext } from "../StepContext";
import "./Sidebar.css";
import bro from "../../images/bro.png";

const Sidebar = () => {
  const navigate = useNavigate();
  const { activeStep, setActiveStep } = useStepContext();
  const location = useLocation();

  const steps = [
    { name: "Information Collection Form", path: "/dashboard/form", completed: false },
    { name: "Complaint Details", path: "/dashboard/complain-details", completed: false },
    { name: "Notice Details", path: "/dashboard/notice-details", completed: false },
    { name: "Demolition Details", path: "/dashboard/demolition-order", completed: false },
    { name: "Court Order Details", path: "/dashboard/count-order", completed: false },
    { name: "Remarks", path: "/dashboard/remark", completed: false },
  ];

  const [stepStatus, setStepStatus] = useState(steps);

  useEffect(() => {
    const currentStep = stepStatus.findIndex((step) => step.path === location.pathname);
    if (currentStep !== -1) {
      setActiveStep(currentStep); // Set active step based on the current path
    }
  }, [location.pathname, stepStatus, setActiveStep]);

  const handleStepClick = (index) => {
    // Allow navigation only to the current or previous steps
    if (index <= activeStep) {
      setActiveStep(index);
      navigate(stepStatus[index].path);
    }
  };

  const handleCompleteStep = () => {
    // Mark the current step as completed and allow navigation to the next step
    setStepStatus((prevStatus) =>
      prevStatus.map((step, index) =>
        index === activeStep ? { ...step, completed: true } : step
      )
    );

    // Move to the next step if not at the last step
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
      navigate(stepStatus[activeStep + 1].path);
    }
  };

  const isStepClickable = (index) => index <= activeStep;

  return (
    <>
      <div className="sidebar-outer-div">
        {stepStatus.map((step, index) => (
          <div
            key={index}
            className={`step-container ${isStepClickable(index) ? "clickable" : "disabled"}`}
            onClick={() => handleStepClick(index)}
          >
            <div className="step-text-container">
              <div className="step-number">Step {index + 1}</div>
              <div className="step-title">{step.name}</div>
            </div>
            <div
              className={`circle-button ${index === activeStep ? "active" : ""} ${
                step.completed ? "completed" : ""
              }`}
              style={{
                position: "relative",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: step.completed
                  ? "#28a745"
                  : index === activeStep
                  ? "#5038ed"
                  : "white",
                border: step.completed
                  ? "1px solid #28a745"
                  : index === activeStep
                  ? "1px solid #5038ed"
                  : "1px solid gray",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: step.completed ? "white" : index === activeStep ? "white" : "gray",
                fontWeight: "600",
              }}
            >
              <span>{index + 1}</span>
              {index > 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "-20px",
                    left: "50%",
                    width: "1px",
                    height: "20px",
                    backgroundColor: "lightgray",
                    transform: "translateX(-50%)",
                  }}
                ></div>
              )}
              {index < steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "50%",
                    width: "1px",
                    height: "20px",
                    backgroundColor: "lightgray",
                    transform: "translateX(-50%)",
                  }}
                ></div>
              )}
            </div>
          </div>
        ))}

        <div className="next-step-container">
          <button
            className="next-step1"
            onClick={handleCompleteStep}
            disabled={activeStep === steps.length - 1}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next Step"}
          </button>
        </div>
      </div>

      <img src={bro} alt="bro" className="sidebar-image" />
    </>
  );
};

export default Sidebar;

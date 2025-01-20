import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useStepContext } from "../StepContext"; 
import "./Hwizardbar.css";

const Hwizardbar = ({ activeForm, onStepChange }) => {
  const { setActiveStep } = useStepContext(); 

  const loadFormState = () => {
    const savedState = localStorage.getItem("formFilled");
    return savedState ? JSON.parse(savedState) : new Array(6).fill(false);
  };

  const [formFilled, setFormFilled] = useState(loadFormState);

  const steps = [
    { name: "Information Collection Form", tab: "info" },
    { name: "Complaint Details", tab: "complaint" },
    { name: "Notice Details", tab: "notice" },
    { name: "Demolition Details", tab: "demolition" },
    { name: "Court Order Details", tab: "court" },
    { name: "Remark", tab: "submission" },
  ];

  const markFormAsFilled = () => {
    const updatedFormFilled = [...formFilled];
    updatedFormFilled[activeForm] = true;
    setFormFilled(updatedFormFilled);
    localStorage.setItem("formFilled", JSON.stringify(updatedFormFilled));
  };

  const arrowButtonStyle = (isDisabled) => ({
    backgroundColor: isDisabled ? "grey" : "#5038ed",
    cursor: isDisabled ? "not-allowed" : "pointer",
    borderRadius: "50%",
  });

  const canGoToNext = () => formFilled[activeForm];
  const canGoToPrev = () => activeForm > 0 || formFilled[activeForm];

  useEffect(() => {
    setActiveStep(activeForm); 
  }, [activeForm, setActiveStep]);

  return (
    <div className="container-bar">
      <div className="first-row">
        <h3 className="heading1">Functional Requirements</h3>
        <div className="arrow-buttons">
          <button
            className="arrow-button"
            onClick={() => activeForm > 0 && onStepChange(activeForm - 1)}
            disabled={activeForm === 0 || !canGoToPrev()}
            style={arrowButtonStyle(activeForm === 0 || !canGoToPrev())}
          >
            <FaArrowLeft size={20} />
          </button>

          <button
            className="arrow-button"
            onClick={() => {
              if (activeForm < steps.length - 1 && canGoToNext()) {
                markFormAsFilled();
                onStepChange(activeForm + 1);
              }
            }}
            disabled={activeForm === steps.length - 1 || !canGoToNext()}
            style={arrowButtonStyle(activeForm === steps.length - 1 || !canGoToNext())}
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="tab-container">
        {steps.map((step, index) => (
          <div
            key={step.tab}
            className={`tab ${activeForm === index ? "active" : ""}`}
            onClick={() => onStepChange(index)}
          >
            <div className="tab-text">{step.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hwizardbar;

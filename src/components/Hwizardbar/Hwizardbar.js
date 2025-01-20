import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Hwizardbar.css";

const Hwizardbar = ({ activeForm, onStepChange }) => {
  // Track the filled state of each form. We'll load this from localStorage or default to all false
  const loadFormState = () => {
    const savedState = localStorage.getItem("formFilled");
    return savedState ? JSON.parse(savedState) : new Array(6).fill(false); // Assuming 6 forms
  };

  const [formFilled, setFormFilled] = useState(loadFormState); // Track the filled forms

  const steps = [
    { name: "Information Collection Form", tab: "info" },
    { name: "Complaint Details", tab: "complaint" },
    { name: "Notice Details", tab: "notice" },
    { name: "Demolition Details", tab: "demolition" },
    { name: "Court Order Details", tab: "court" },
    { name: "Remark", tab: "submission" },
  ];

  // Mark the current form as filled and update localStorage
  const markFormAsFilled = () => {
    const updatedFormFilled = [...formFilled];
    updatedFormFilled[activeForm] = true;
    setFormFilled(updatedFormFilled);
    localStorage.setItem("formFilled", JSON.stringify(updatedFormFilled)); // Persist state
  };

  // Arrow button styles
  const arrowButtonStyle = (isDisabled) => ({
    backgroundColor: isDisabled ? "grey" : "#5038ed",
    cursor: isDisabled ? "not-allowed" : "pointer",
    borderRadius: "50%",
  });

  // Check if you can move to the next form (the forward arrow)
  const canGoToNext = () => {
    // Forward arrow is active only if the current form is filled
    // But it also needs the 6th form to be filled to activate further forms
    if (activeForm < 5) {
      return formFilled[5]; // Forward arrow is only enabled once the 6th form is filled
    }
    return formFilled[activeForm]; // Normal behavior for the last form
  };

  // Check if you can go to the previous form
  const canGoToPrev = () => {
    // Backward arrow is active if it's not the first form or the form is filled
    return activeForm > 0 || formFilled[activeForm];
  };

  useEffect(() => {
    // Automatically mark form as filled once you reach it (for example after submitting)
    // This logic could be replaced by actual form submission logic
    if (formFilled[activeForm]) return;
    // Simulate filling the form after navigating to it (mark as filled when you view it)
    markFormAsFilled();
  }, [activeForm]);

  return (
    <div className="container-bar">
      <div className="first-row">
        <h3 className="heading1">Functional Requirements</h3>
        <div className="arrow-buttons">
          {/* Backward Arrow */}
          <button
            className="arrow-button"
            onClick={() => activeForm > 0 && onStepChange(activeForm - 1)}
            disabled={activeForm === 0 || !canGoToPrev()}
            style={arrowButtonStyle(activeForm === 0 || !canGoToPrev())}
          >
            <FaArrowLeft size={20} />
          </button>

          {/* Forward Arrow */}
          <button
            className="arrow-button"
            onClick={() => {
              if (activeForm < steps.length - 1 && canGoToNext()) {
                markFormAsFilled(); // Mark current form as filled before going next
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
            onClick={() => onStepChange(index)} // Update form on tab click
          >
            <div className="tab-text">{step.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hwizardbar;

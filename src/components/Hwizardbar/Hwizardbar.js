import React, { useEffect, useState, useMemo } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useStepContext } from "../Context/StepContext";
import { useFormContext } from "../Context/FormContext"; // Import your FormContext
import "./Hwizardbar.css";

const Hwizardbar = ({ activeForm, onStepChange }) => {
  const { t } = useTranslation();
  const { setActiveStep } = useStepContext();
  const { formData } = useFormContext(); // Get formData from context

  const steps = useMemo(
    () => [
      { name: t("steps.informationCollectionForm"), tab: "info" },
      { name: t("steps.complaintDetails"),  tab: "complaint" },
      { name: t("steps.noticeDetails"),  tab: "notice" },
      { name: t("steps.demolitionDetails"),  tab: "demolition" },
      { name: t("steps.courtOrderDetails"),  tab: "court" },
      { name: t("steps.remark"),  tab: "submission" },
    ],
    [t]
  );

  const arrowButtonStyle = (isDisabled) => ({
    backgroundColor: isDisabled ? "grey" : "#5038ed",
    cursor: isDisabled ? "not-allowed" : "pointer",
    borderRadius: "50% ",
  });

  const canGoToNext = () => {
    // Check if the current form is filled 
    return formData[`form${activeForm + 1}`] && Object.keys(formData[`form${activeForm + 1}`]).length > 0; 
  };

  const canGoToPrev = () => activeForm > 0; 

  useEffect(() => {
    setActiveStep(activeForm);
  }, [activeForm, setActiveStep]);

  return (
    <div className="container-bar">
      <div className="first-row">
        <h3 className="heading1">{t("steps.functionalRequirements")}</h3>
        <div className="arrow-buttons">
          <button
            className="arrow-button"
            onClick={() => activeForm > 0 && onStepChange(activeForm - 1)}
            disabled={activeForm === 0}
            style={arrowButtonStyle(activeForm === 0)}
          >
            <FaArrowLeft size={20} style={{ color: "white" }} />
          </button>

          <button
            className="arrow-button"
            onClick={() => {
              if (activeForm < steps.length - 1 && canGoToNext()) {
                onStepChange(activeForm + 1); 
              }
            }}
            disabled={activeForm === steps.length - 1 || !canGoToNext()}
            style={arrowButtonStyle(activeForm === steps.length - 1 || !canGoToNext())}
          >
            <FaArrowRight size={20} style={{ color: "white" }} />
          </button>
        </div>
      </div>

      <div className="tab-container">
        {steps.map((step, index) => (
          <div
            key={step.tab}
            className={`tab ${activeForm === index ? "active" : ""}`}
          >
            <div className="tab-text">{step.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hwizardbar;
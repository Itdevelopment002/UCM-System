import React, { useEffect, useState, useMemo } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useStepContext } from "../StepContext";
import "./Hwizardbar.css";

const Hwizardbar = ({ activeForm, onStepChange }) => {
  const { t } = useTranslation();
  const { setActiveStep } = useStepContext();

  const loadFormState = () => {
    const savedState = localStorage.getItem("formFilled");
    return savedState ? JSON.parse(savedState) : new Array(6).fill(false);
  };

  const [formFilled, setFormFilled] = useState(loadFormState);

  const steps = useMemo(
    () => [
      { name: t("steps.informationCollectionForm"), path: "/dashboard/form", tab: "info" },
      { name: t("steps.complaintDetails"), path: "/dashboard/complaint-details", tab: "complaint" },
      { name: t("steps.noticeDetails"), path: "/dashboard/notice-details", tab: "notice" },
      { name: t("steps.demolitionDetails"), path: "/dashboard/demolition-order", tab: "demolition" },
      { name: t("steps.courtOrderDetails"), path: "/dashboard/court-order", tab: "court" },
      { name: t("steps.remark"), path: "/dashboard/remark", tab: "submission" },
    ],
    [t]
  );


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
        <h3 className="heading1">{t("steps.functionalRequirements")}</h3>
        <div className="arrow-buttons">
          <button
            onClick={() => activeForm > 0 && onStepChange(activeForm - 1)}
            disabled={activeForm === 0 || !canGoToPrev()}
            style={arrowButtonStyle(activeForm === 0 || !canGoToPrev())}
          >
            <FaArrowLeft size={20} />
          </button>


          <button
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
          >
            <div className="tab-text">{step.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hwizardbar;

import React, { useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useStepContext } from '../Context/StepContext';
import { useTranslation } from 'react-i18next';
import './Sidebar.css';
import bro from '../../images/bro.png';

const Sidebar = () => {
  const navigate = useNavigate();
  const { activeStep, setActiveStep } = useStepContext();
  const location = useLocation(); // Access current path
  const { t } = useTranslation();
 
  const steps = useMemo(() => [
    { name: t('form.infoCollectionForm'), path: '/dashboard/form' },
    { name: t('form.complaintDetails'), path: '/dashboard/complain-details' },
    { name: t('form.noticeDetails'), path: '/dashboard/notice-details' },
    { name: t('form.demolitionDetails'), path: '/dashboard/demolition-order' },
    { name: t('form.courtOrderDetails'), path: '/dashboard/count-order' },
    { name: t('form.remarks'), path: '/dashboard/remark' },
  ], [t]);
  

  return (
    <>
    <div className="sidebar-outer-div">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step-container ${index <= activeStep ? "clickable" : "disabled"}`}
        >
          <div className="step-text-container">
            <div className="step-number">{t('form.step')} {index + 1}</div>
            <div className="step-title">{step.name}</div>
          </div>
          <div
            className={`circle-button ${index === activeStep ? "active" : ""}`}
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
    </div>
     <img src={bro} alt="bro" className="sidebar-image" />
     </>
  );
};

export default Sidebar;
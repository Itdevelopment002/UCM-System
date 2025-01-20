import React from "react";
import { useStepContext } from "../StepContext"; 
import "./Sidebar.css";
import bro from "../../images/bro.png";
const Sidebar = () => {
  const { activeStep } = useStepContext(); 

  const steps = [
    { name: "Information Collection Form" },
    { name: "Complaint Details" },
    { name: "Notice Details" },
    { name: "Demolition Details" },
    { name: "Court Order Details" },
    { name: "Remarks" },
  ];

  return (
    <>
    <div className="sidebar-outer-div">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step-container ${index <= activeStep ? "clickable" : "disabled"}`}
        >
          <div className="step-text-container">
            <div className="step-number">Step {index + 1}</div>
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

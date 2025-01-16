// StepContext.js
import React, { createContext, useContext, useState } from 'react';

const StepContext = createContext();

export const useStepContext = () => {
  return useContext(StepContext);
};

export const StepProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);

  return (
    <StepContext.Provider value={{ activeStep, setActiveStep, isFormValid, setIsFormValid }}>
      {children}
    </StepContext.Provider>
  );
};

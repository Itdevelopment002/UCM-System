import React, { createContext, useContext, useState } from 'react';

const StepContext = createContext();

export const useStepContext = () => {
  return useContext(StepContext);
};

export const StepProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0); 

  return (
    <StepContext.Provider value={{ activeStep, setActiveStep }}>
      {children}
    </StepContext.Provider>
  );
};

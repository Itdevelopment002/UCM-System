import React, { createContext, useState } from 'react';

export const StepContext = createContext();

export const StepProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0); // Track active step globally

  return (
    <StepContext.Provider value={{ activeStep, setActiveStep }}>
      {children}
    </StepContext.Provider>
  );
};

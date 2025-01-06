import React, { createContext, useState, useContext } from 'react';

// Create the context
const StepContext = createContext();

// Custom hook to use the context
export const useStepContext = () => useContext(StepContext);

// StepProvider component to provide the context value
export const StepProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <StepContext.Provider value={{ activeStep, setActiveStep }}>
      {children}
    </StepContext.Provider>
  );
};

import React, { createContext, useContext, useState } from "react";

// Create Context
const FormContext = createContext();

// Custom hook to use the FormContext
export const useFormContext = () => {
  return useContext(FormContext);
};

// FormProvider component to wrap around your app or relevant parts of the component tree
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    isFormComplete: false,
    form1: {},
    form2:{},
    form3:{},
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

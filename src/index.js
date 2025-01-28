import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { FormProvider } from "./components/FormContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FormProvider>
        
        <App />
      </FormProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

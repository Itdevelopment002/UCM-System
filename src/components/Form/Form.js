import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Form.css';

const Form = () => {
  return (
    <div className="container-bar">
      <div className="first-row">
        <div>
          <h3 className="heading">Functional Requirements</h3>
        </div>

        <div className="arrow-buttons">
          <button className="arrow-button">
            <FaArrowLeft size={20} />
          </button>
          <button className="arrow-button">
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="tab-container">
        <div className={`tab tab-width-info active`}>
          <div className="tab-text">Information Collection Form</div>
        </div>
        <div className="tab tab-width-complaint">
          <div className="tab-text">Complaint Details</div>
        </div>
        <div className="tab tab-width-notice">
          <div className="tab-text">Notice Details</div>
        </div>
        <div className="tab tab-width-demolition">
          <div className="tab-text">Demolition Details</div>
        </div>
        <div className="tab tab-width-court">
          <div className="tab-text">Court Order Details</div>
        </div>
        <div className="tab tab-width-submission">
          <div className="tab-text">Submission Details</div>
        </div>
      </div>
    </div>
  );
};

export default Form;

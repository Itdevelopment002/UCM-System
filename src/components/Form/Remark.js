import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import "./FunctionalRequiremnt.css";

const Remark = () => {
  const [formData, setFormData] = useState({
    natureOfConstruction: "",
    remark: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate Remark
    if (!formData.remark.trim()) {
      newErrors.remark = "Remark is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form Data Submitted:", formData);
      toast.success("Form submitted successfully!"); // Success toast
      // Add your form submission logic here
    } 
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="remark-form">
        {/* Remark Field */}
        <div className="col mb-3">
          <div className="col-md-4 mt-3">
            <label htmlFor="remark" className="form-label label-small">
              Remark <span className="text-danger">*</span>
            </label>
            <textarea
              id="remark"
              name="remark"
              className={`form-control input-small text-box-height ${
                errors.remark ? "is-invalid" : ""
              }`}
              rows="4"
              placeholder="Write a long text here"
              value={formData.remark}
              onChange={handleChange}
            ></textarea>
            {errors.remark && <small className="text-danger">{errors.remark}</small>}
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn submit-btn-form">
          Submit 
        </button>
      </form>

      {/* Toast Container to display the notifications */}
      <ToastContainer />
    </div>
  );
};

export default Remark;

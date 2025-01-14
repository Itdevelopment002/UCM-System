import React, { useState } from "react";
import map from "../../images/map.png";
import locate from "../../images/location-icon.png";
import iconbg from "../../images/icon-bg.png";
import "./FunctionalRequiremnt.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
const ComplaintDetails = () => {
  const [formValues, setFormValues] = useState({
    complainantName: "",
    complainantContact: "",
    complaintDescription: "",
    hardCopyUpload: null,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value, files } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: files ? files[0] : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate Complainant Name
    if (!formValues.complainantName.trim()) {
      newErrors.complainantName = "Complainant Name is required.";
    }

    // Validate Complainant Contact
    if (!formValues.complainantContact.trim() || !/^\d{10}$/.test(formValues.complainantContact)) {
      newErrors.complainantContact = "Please enter a valid 10-digit contact number.";
    }

    // Validate Complaint Description
    if (!formValues.complaintDescription.trim()) {
      newErrors.complaintDescription = "Complaint Description is required.";
    }

    // Validate Hard Copy Upload
    if (!formValues.hardCopyUpload) {
      newErrors.hardCopyUpload = "Please upload a hard copy document.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted successfully!", formValues);
        toast.success("Form submitted successfully!"); // Success toast
      // Handle actual form submission logic here
    }
    else {
          toast.error("Please fill in all required fields."); // Error toast
        }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* Left Column - Complaint Details */}
          <div className="col-md-6">
            <div className="row">
              {/* Complainant Name */}
              <div className="mb-3 col-md-6">
                <label htmlFor="complainantName" className="form-label label-small">
                  Complaint Received from <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className={`form-control input-small ${errors.complainantName ? "is-invalid" : ""}`}
                  id="complainantName"
                  value={formValues.complainantName}
                  onChange={handleInputChange}
                  placeholder="Enter name"
                />
                {errors.complainantName && <small className="text-danger">{errors.complainantName}</small>}
              </div>

              {/* Complainant Contact */}
              <div className="mb-3 col-md-6">
                <label htmlFor="complainantContact" className="form-label label-small">
                  Complainant Contact Details <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className={`form-control input-small ${errors.complainantContact ? "is-invalid" : ""}`}
                  id="complainantContact"
                  value={formValues.complainantContact}
                  onChange={handleInputChange}
                  placeholder="Enter contact number"
                />
                {errors.complainantContact && <small className="text-danger">{errors.complainantContact}</small>}
              </div>
            </div>

            {/* Complaint Description */}
            <div className="mb-3">
              <label htmlFor="complaintDescription" className="form-label label-small">
                Complaint Description <span className="text-danger">*</span>
              </label>
              <textarea
                className={`form-control input-small text-box-height ${errors.complaintDescription ? "is-invalid" : ""}`}
                id="complaintDescription"
                rows="4"
                value={formValues.complaintDescription}
                onChange={handleInputChange}
                placeholder="Write a long text here"
              ></textarea>
              {errors.complaintDescription && <small className="text-danger">{errors.complaintDescription}</small>}
            </div>

            {/* Hard Copy Upload */}
            <div className="mb-3 col-md-12">
              <label htmlFor="hardCopyUpload" className="form-label label-small">
                Hard Copy Attachment (Offline Complaint Received) <span className="text-danger">*</span>
              </label>
              <div className="upload-container">
                <label
                  htmlFor="hardCopyUpload"
                  className="form-control input-small upload-label"
                  style={{ cursor: "pointer" }}
                >
                  <i className="fas fa-upload upload-icon input-small"></i> Upload Documents
                </label>
                <input
                  type="file"
                  className="form-control input-small d-none"
                  id="hardCopyUpload"
                  accept="image/*"
                  onChange={handleInputChange}
                />
              </div>
              {errors.hardCopyUpload && <small className="text-danger">{errors.hardCopyUpload}</small>}
            </div>
          </div>

          {/* Right Column - Attachments and Location */}
          {/* Reused existing logic */}
          <div className="col-md-6">
            {/* Attachments */}
            <div className="mb-3">
              <label className="form-label label-big">Complaint Attachments</label>
              <div className="divider-form"></div>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label label-small">Photos</label>
                  <div className="upload-container">
                    <label
                      htmlFor="photoUpload"
                      className="form-control input-small upload-label"
                      style={{ cursor: "pointer" }}
                    >
                      <i className="fas fa-upload upload-icon"></i> Upload Photos
                    </label>
                    <input type="file" className="form-control input-small d-none" id="photoUpload" accept="image/*" />
                  </div>
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label label-small">Videos</label>
                  <div className="upload-container">
                    <label
                      htmlFor="videoUpload"
                      className="form-control input-small upload-label"
                      style={{ cursor: "pointer" }}
                    >
                      <i className="fas fa-upload upload-icon"></i> Upload Videos
                    </label>
                    <input type="file" className="form-control input-small d-none" id="videoUpload" accept="video/*" />
                  </div>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div>
              <label className="form-label label-big fw-bold">Location Details</label>
              <div className="divider-form"></div>
              <div className="rounded">
                <div className="row" style={{ display: "inline-flex", gap: "25px" }}>
                  <div className="col">
                    <img src={map} alt="Map location" className="img-fluid rounded" />
                  </div>
                  <div className="col">
                    <p className="mb-1 text-secondary fw-bold">
                      Latitude <strong className="text-secondary fw-light">-28.7041</strong>
                    </p>
                    <p className="text-secondary fw-bold">
                      Longitude <strong className="text-secondary fw-light">-77.1025</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="btn submit-btn-form">
          Save and Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ComplaintDetails;

import React, { useState } from "react";
import map from "../../images/map.png";
import locate from "../../images/location-icon.png";
import iconbg from "../../images/icon-bg.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FunctionalRequiremnt.css";

const ComplaintDetails = () => {
  const [formValues, setFormValues] = useState({
    complainantName: "",
    complainantContact: "",
    complaintDescription: "",
    hardCopyUpload: null,
    photoUpload: null,
    videoUpload: null,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value, files } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: files ? files[0] : value,
    }));
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    if (files.length > 0) {
      setFormValues((prevValues) => ({
        ...prevValues,
        [id]: files[0],
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formValues.complainantName.trim()) {
      newErrors.complainantName = "Complainant Name is required.";
    }

    if (
      !formValues.complainantContact.trim() ||
      !/^\d{10}$/.test(formValues.complainantContact)
    ) {
      newErrors.complainantContact = "Please enter a valid 10-digit contact number.";
    }

    if (!formValues.complaintDescription.trim()) {
      newErrors.complaintDescription = "Complaint Description is required.";
    }

    if (!formValues.hardCopyUpload) {
      newErrors.hardCopyUpload = "Please upload a hard copy document.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      toast.success("Form submitted successfully!");
    } 
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="mb-3 col-md-6">
                <label htmlFor="complainantName" className="form-label label-small">
                  Complaint Received from <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="complainantName"
                  value={formValues.complainantName}
                  onChange={handleInputChange}
                  className={`form-control input-small ${
                    errors.complainantName ? "is-invalid" : ""
                  }`}
                  placeholder="Enter name"
                />
                {errors.complainantName && (
                  <small className="text-danger">{errors.complainantName}</small>
                )}
              </div>

              <div className="mb-3 col-md-6">
                <label htmlFor="complainantContact" className="form-label label-small">
                  Complainant Contact Details <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="complainantContact"
                  value={formValues.complainantContact}
                  onChange={handleInputChange}
                  className={`form-control input-small ${
                    errors.complainantContact ? "is-invalid" : ""
                  }`}
                  placeholder="Enter contact number"
                />
                {errors.complainantContact && (
                  <small className="text-danger">{errors.complainantContact}</small>
                )}
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="complaintDescription" className="form-label label-small">
                Complaint Description <span className="text-danger">*</span>
              </label>
              <textarea
                id="complaintDescription"
                value={formValues.complaintDescription}
                onChange={handleInputChange}
                className={`form-control input-small ${
                  errors.complaintDescription ? "is-invalid" : ""
                }`}
                rows="4"
                placeholder="Write a long text here"
              ></textarea>
              {errors.complaintDescription && (
                <small className="text-danger">{errors.complaintDescription}</small>
              )}
            </div>

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
                  <i className="fas fa-upload upload-icon"></i>
                  <span className="filename-gap">
                    {formValues.hardCopyUpload
                      ? formValues.hardCopyUpload.name
                      : "Upload Documents"}
                  </span>
                </label>
                <input
                  type="file"
                  id="hardCopyUpload"
                  onChange={handleFileChange}
                  className="form-control input-small d-none"
                  accept=".doc, .pdf"
                />
              </div>
              {errors.hardCopyUpload && (
                <small className="text-danger">{errors.hardCopyUpload}</small>
              )}
            </div>
          </div>

          <div className="col-md-6">
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
                      <i className="fas fa-upload upload-icon"></i>
                      <span className="filename-gap">
                        {formValues.photoUpload
                          ? formValues.photoUpload.name
                          : "Upload Photos"}
                      </span>
                    </label>
                    <input
                      type="file"
                      id="photoUpload"
                      onChange={handleFileChange}
                      className="form-control input-small d-none"
                      accept=".jpeg, .jpg, .png"
                    />
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
                      <i className="fas fa-upload upload-icon"></i>
                      <span className="filename-gap">
                        {formValues.videoUpload
                          ? formValues.videoUpload.name
                          : "Upload Videos"}
                      </span>
                    </label>
                    <input
                      type="file"
                      id="videoUpload"
                      onChange={handleFileChange}
                      className="form-control input-small d-none"
                      accept="video/*"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="form-label label-big fw-bold">Location Details</label>
              <div className="divider-form"></div>
              <div className="rounded">
                <div className="row" style={{ display: "inline-flex", gap: "25px" }}>
                  <div className="col">
                    <img src={map} alt="Map location" className="img-fluid rounded" />
                  </div>
                  <div className="col">
                  <div className="row ">
                      <div className="col d-flex align-items-center mb-2" style={{fontSize:"xx-large"}}>
                        <img src={locate} alt="location" className="img-fluid rounded" style={{width:"1.5rem"}} />
                        <div className="col d-flex align-items-center" style={{height:"1.5rem"}}>
                          <span className="me-2">
                            <i className="bi bi-geo-alt-fill text-primary"></i>
                          </span>
                          <strong className="text-secondary fw-light">Delhi</strong>
                        </div>
                        <div className="position-relative" style={{ top: "9%" , left:"105%"}}>
                          <img src={iconbg} alt="signup" className="img-fluid rounded" />
                          <i
                            className="fas fa-paper-plane text-white position-absolute"
                            style={{ top: "22%", left: "25%", fontSize: "1.2rem" }}
                          ></i>
                        </div>
                      </div>
                    </div>
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
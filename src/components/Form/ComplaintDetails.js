import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import map from "../../images/map.png";
import locate from "../../images/location-icon.png";
import iconbg from "../../images/icon-bg.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FunctionalRequiremnt.css";

const ComplaintDetails = ({ onNext, onPrevious }) => {
  const [error, setError] = useState(""); // Error state for validations
  const navigate = useNavigate(); // To navigate to the next form
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
  
    if (id === "complainantContact") {
      // Sirf numeric input allow karein
      const sanitizedValue = value.replace(/[^0-9]/g, "");
  
      // Agar length 10 se zyada ho, toh error set karein
      if (sanitizedValue.length > 10) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [id]: "Please enter a 10-digit number only.",
        }));
        return; // Invalid input, form value update na karein
      }
  
      // Agar valid hai, error hata dein
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: "",
      }));
  
      // Form value update karein
      setFormValues((prevValues) => ({
        ...prevValues,
        [id]: sanitizedValue,
      }));
    } else {
      // Baaki fields ke liye default behavior
      setFormValues((prevValues) => ({
        ...prevValues,
        [id]: files ? files[0] : value,
      }));
    }
  };

  const handleFileChange = (event, field) => {
    const file = event.target.files[0]; // Get the uploaded file
  
    if (!file) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "",
      }));
      return;
    }
  
    // Validation rules for different fields
    const validationRules = {
      hardCopyUpload: {
        validTypes: ["application/pdf", "application/msword"],
        maxSize: 2 * 1024 * 1024, // 2 MB
        errorMessage: {
          type: "Only .doc and .pdf files are allowed.",
          size: "The file size exceeds 2 MB. Please upload a smaller document.",
        },
      },
      photoUpload: {
        validTypes: ["image/jpeg", "image/jpg", "image/png"],
        maxSize: 1 * 1024 * 1024, // 1 MB
        errorMessage: {
          type: "Only image files (.jpg, .jpeg, .png) are allowed.",
          size: "The file size exceeds 1 MB. Please upload a smaller image.",
        },
      },
      videoUpload: {
        validTypes: ["video/mp4", "video/avi", "video/mov", "video/mkv"],
        maxSize: 10 * 1024 * 1024, // 10 MB
        errorMessage: {
          type: "Only video files (.mp4, .avi, .mov, .mkv) are allowed.",
          size: "The file size exceeds 10 MB. Please upload a smaller video.",
        },
      },
    };
  
    const validation = validationRules[field];
  
    if (!validation) {
      console.error(`No validation rules found for field: ${field}`);
      return;
    }
  
    // Validate file type
    if (!validation.validTypes.includes(file.type)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: validation.errorMessage.type,
      }));
      event.target.value = ""; // Clear the file input
      return;
    }
  
    // Validate file size
    if (file.size > validation.maxSize) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: validation.errorMessage.size,
      }));
      event.target.value = ""; // Clear the file input
      return;
    }
  
    // Clear errors and update state if validation passes
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    }));
  
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: file,
    }));
  
    console.log(`${field} upload successful:`, file.name);
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
    return Object.keys(newErrors).length === 0; // If no errors, return true
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted successfully", formValues);
     
      // Navigate to the next form ("/dashboard/notice-details")
      // navigate("/dashboard/notice-details");
      onNext(); // Call the onNext function to navigate to the next form
    } else {
      console.log("Validation failed. Please check the fields.");
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
      className={`form-control input-small upload-label ${
        errors.hardCopyUpload ? "is-invalid" : ""
      }`}
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
      onChange={(e) => handleFileChange(e, "hardCopyUpload")}
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
  className={`form-control input-small upload-label ${
    errors.photoUpload ? "is-invalid" : ""
  }`}
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
      onChange={(e) => handleFileChange(e, "photoUpload")}
      className={`form-control input-small d-none `} // Apply `is-invalid` if there's an error
      accept="image/jpeg, image/jpg, image/png"
    />
  </div>
  {errors.photoUpload && (
    <small className="text-danger">{errors.photoUpload}</small> // Display error message
  )}
</div>



<div className="mb-3 col-md-6">
  <label className="form-label label-small">Videos</label>
  <div className="upload-container">
  <label
  htmlFor="videoUpload"
  className={`form-control input-small upload-label ${
    errors.videoUpload ? "is-invalid" : ""
  }`}
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
      onChange={(e) => handleFileChange(e, "videoUpload")}
      className="form-control input-small d-none"
      accept="video/*"
    />
  </div>
  {errors.videoUpload && (
    <small className="text-danger">{errors.videoUpload}</small>
  )}
</div>


              </div>
            </div>

                        {/* Location Details */}
                        <div className="form-group mt-4">
              <label className="form-label text-dark fw-bold" style={{ fontSize: "16px" }}>Location Details</label>
              <div className="mb-3" style={{ height: "2px", width: "auto", background: "#5038ED" }}></div>
              <div className="">
                <div className="row">
                  <div className="col-md-5 mt-1">
                    <img
                      src={map}
                      alt="Map location"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="mt-2 col-md-6">
                    <div className="row mb-3">
                      <div className="col d-flex align-items-center">
                        <img src={locate} alt="location" className="img-fluid rounded" />
                        <div className="col d-flex align-items-center">
                          <span className="me-2">
                            <i className="bi bi-geo-alt-fill text-primary"></i>
                          </span>
                          <strong className="text-secondary fw-light" style={{ fontSize: "20px" }}>Delhi</strong>
                        </div>
                        <div className="position-relative"style={{top: "5%"}} >
                          <img src={iconbg} alt="signup" className="img-fluid rounded"/>
                          <i className="fas fa-paper-plane text-white position-absolute"
                            style={{top: "18%",left: "21%", fontSize: "1.4rem"}}></i></div>
                      </div>
                    </div>
                    <p className="mb-1 text-secondary fw-bold">Latitude
                      <strong className="text-secondary fw-light" style={{ fontSize: "18px" }}> -28.7041</strong></p>
                    <p className="text-secondary fw-bold">Longitude
                      <strong className="text-secondary fw-light" style={{ fontSize: "18px" }}> -77.1025</strong></p>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="btn submit-btn-form">
          Save and Next
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default ComplaintDetails;

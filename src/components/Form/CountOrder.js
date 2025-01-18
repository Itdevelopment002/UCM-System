import React, { useState, useRef } from "react"; 
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation
import "./FunctionalRequiremnt.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const CourtOrder = () => {
  const navigate = useNavigate(); // Hook for navigation

  const [isOpenOccupation, setIsOpenOccupation] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select occupation");
  const [selectedCourt, setSelectedCourt] = useState("");
  const [occupationOptions] = useState(["Owner", "Rented", "Shop"]);
  const dropdownRef = useRef(null);

  const [formValues, setFormValues] = useState({
    courtInvolvement: "",
    courtOrderNumber: "",
    edDate: "",
    courtName: "",
    typeOfCourt: "",
    petitionerName: "",
    petitionerMobile: "",
    petitionerAddress: "",
    courtOrderDocument: null,
  });

  const courtOptions = [
    "District Court", 
    "High Court", 
    "Supreme Court"
  ];
  const [errors, setErrors] = useState({});
  const [fileName, setFileName] = useState(""); // State to store the file name

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [id]: value,
    }));
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
  

  const [isOpenCourt, setIsOpenCourt] = useState(false);
  const toggleCourtDropdown = () => {
    setIsOpenCourt(!isOpenCourt);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpenOccupation(false);
  };

  const handleSelectCourt = (option) => {
    setSelectedCourt(option);
    setIsOpenCourt(false);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.courtOrderNumber) newErrors.courtOrderNumber = "Court Order Number is required.";
    if (!formValues.edDate) newErrors.edDate = "ED Date is required.";
    if (!formValues.courtName) newErrors.courtName = "Court Name is required.";
  
   
  
   
    // if (!formValues.courtOrderDocument) newErrors.courtOrderDocument = "Please upload the court order document.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    const newErrors = validateForm(); // Validate the form fields
    console.log("Validation Errors:", newErrors); // Debug: check validation errors
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set errors if validation fails
    } else {
      setErrors({}); // Clear any previous errors if validation is successful
  
      // Print success message if all validations are passed
      console.log("Submitted Successfully:", formValues); 
  
      // Navigate to the next page
      navigate("/dashboard/remark");
    }
  };
  
  

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* Court Matter Involvement */}
        <div className="row">
          <div className="col-md-12 mb-3">
            <label className="label-small">Court Matter Involvement</label>
            <div style={{ display: "flex", gap: "30px" }}>
              <div>
                <input
                  type="radio"
                  id="courtInvolvementYes"
                  name="courtInvolvement"
                  value="Yes"
                  onChange={handleInputChange}
                />
                <label htmlFor="courtInvolvementYes" className="checkbox-label">Yes</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="courtInvolvementNo"
                  name="courtInvolvement"
                  value="No"
                  onChange={handleInputChange}
                />
                <label htmlFor="courtInvolvementNo" className="checkbox-label">No</label>
              </div>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="courtOrderNumber" className="form-label label-small">
              Court Order Number <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control input-small ${errors.courtOrderNumber ? "is-invalid" : ""}`}
              id="courtOrderNumber"
              placeholder="Enter court order number"
              value={formValues.courtOrderNumber}
              onChange={handleInputChange}
            />
            {errors.courtOrderNumber && <div className="text-danger">{errors.courtOrderNumber}</div>}
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="edDate" className="form-label label-small">
              ED Date <span className="text-danger">*</span>
            </label>
            <input
              type="date"
              className={`form-control input-small ${errors.edDate ? "is-invalid" : ""}`}
              id="edDate"
              value={formValues.edDate}
              onChange={handleInputChange}
            />
            {errors.edDate && <div className="text-danger">{errors.edDate}</div>}
          </div>

          {/* File Upload Field */}
         
          <div className="mb-3 col-md-4">
  <label htmlFor="hardCopyUpload" className="form-label label-small">
   Court Order 
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

        {/* Court Name */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="courtName" className="form-label label-small">
              Court Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control input-small ${errors.courtName ? "is-invalid" : ""}`}
              id="courtName"
              placeholder="Enter court name"
              value={formValues.courtName}
              onChange={handleInputChange}
            />
            {errors.courtName && <div className="text-danger">{errors.courtName}</div>}
          </div>

          {/* Court Type Dropdown */}
          <div className="col-md-4 mb-3">
            <label htmlFor="typeOfCourt" className="form-label label-small">
              Type of Court 
            </label>
            <div className="custom-dropdown">
              <div
                className="dropdown-header"
                onClick={toggleCourtDropdown}
                aria-role="button"
              >
                <span className="option-inside-placeholder">
                  {selectedCourt || "Choose court"}
                </span>
                {isOpenCourt ? (
                  <HiOutlineChevronUp size={18} className="dropdown-arrow" />
                ) : (
                  <HiOutlineChevronDown size={18} className="dropdown-arrow" />
                )}
              </div>
              {isOpenCourt && (
                <ul className="dropdown-options">
                  {courtOptions.map((option, index) => (
                    <li
                      key={index}
                      className="dropdown-option"
                      onClick={() => handleSelectCourt(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Petitioner Details */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="petitionerName" className="form-label label-small">
              Petitioner Name 
            </label>
            <input
              type="text"
              className={`form-control input-small`}
              id="petitionerName"
              placeholder="Enter petitioner name"
              value={formValues.petitionerName}
              onChange={handleInputChange}
            />
          
          </div>
          <div className="col-md-4 mb-3 mt-2">
                <label htmlFor="detailedAddress" className="form-label label-small">
                 Petitioner Address
                </label>
                <textarea
                  className="form-control input-small text-box-height"
                  id="detailedAddress"
                  placeholder="Write a long text here"
                  rows="3"
                  value={formValues.detailedAddress}
                  onChange={handleInputChange}
                />
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

export default CourtOrder;

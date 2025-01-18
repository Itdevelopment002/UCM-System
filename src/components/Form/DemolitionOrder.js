import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation
import { FormGroup, Label, Input } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";
import "./FunctionalRequiremnt.css"; // Ensure your updated CSS is here

const DemolitionOrder = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [formData, setFormData] = useState({
    demolitionDate: "",
    demolitionTime: "",
    demolitionDocument: "",
    demolitionExpenditure: "",
    constructionNumber: "",
    policeStationName: "",
    policeManpowerDetails: "",
    wardOffice: "",
  });


// Inside your component function
const [formValues, setFormValues] = useState({
  complainantName: "",
  complainantContact: "",
  complaintDescription: "",
  hardCopyUpload: null,
  photoUpload: null,
  videoUpload: null,
});

  const [errors, setErrors] = useState({});
  const [fileName, setFileName] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
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
    if (!formData.demolitionDate) {
      newErrors.demolitionDate = "Demolition Date is required.";
    }
    if (!formData.demolitionTime) {
      newErrors.demolitionTime = "Demolition Time is required.";
    }
   
    if (!formData.constructionNumber) {
      newErrors.constructionNumber = "Construction Number is required.";
    }
    if (!formData.policeStationName) {
      newErrors.policeStationName = "Please select a police station.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set errors if validation fails
    } else {
      setErrors({}); // Clear errors if validation is successful

      console.log("Submitted Successfully:", formData);
      // Navigate to /dashboard/count-order if form is valid
      navigate("/dashboard/count-order");
    }
  };

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const selectPoliceStation = (station) => {
    setFormData((prevData) => ({ ...prevData, policeStationName: station }));
    setDropdownOpen(false);
  };

  return (
    <div className="form-container">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* Demolition Date, Time and Document */}
          <div className="col-md-4">
            <FormGroup>
              <Label htmlFor="demolitionDate" className="form-label label-small">
                Demolition Date <span className="text-danger">*</span>
              </Label>
              <Input
                type="date"
                id="demolitionDate"
                value={formData.demolitionDate}
                onChange={handleInputChange}
                className={`form-control ${errors.demolitionDate ? "is-invalid" : ""}`}
              />
              {errors.demolitionDate && <div className="text-danger">{errors.demolitionDate}</div>}
            </FormGroup>
          </div>
          <div className="col-md-4">
            <FormGroup>
              <Label htmlFor="demolitionTime" className="form-label label-small">
                Demolition Time <span className="text-danger">*</span>
              </Label>
              <Input
                type="time"
                id="demolitionTime"
                value={formData.demolitionTime}
                onChange={handleInputChange}
                className={`form-control ${errors.demolitionTime ? "is-invalid" : ""}`}
              />
              {errors.demolitionTime && <div className="text-danger">{errors.demolitionTime}</div>}
            </FormGroup>
          </div>
         
          <div className="mb-3 col-md-4">
  <label htmlFor="hardCopyUpload" className="form-label label-small">
   Demolition Document
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

        <div className="row">
          {/* Demolition Expenditure */}
          <div className="col-md-8">
            <FormGroup>
              <Label htmlFor="demolitionExpenditure" className="form-label label-small">
                Demolition Expenditure Details
              </Label>
              <Input
                type="textarea"
                id="demolitionExpenditure"
                value={formData.demolitionExpenditure}
                onChange={handleInputChange}
                placeholder="Write a long text here"
                className="form-control"
              />
            </FormGroup>
          </div>
        </div>

        <div className="row">
          {/* Construction Number */}
          <div className="col-md-4">
            <FormGroup>
              <Label htmlFor="constructionNumber" className="form-label label-small">
                Construction Number <span className="text-danger">*</span>
              </Label>
              <div className="input-group">
                <Input
                  type="search"
                  id="constructionNumber"
                  value={formData.constructionNumber}
                  onChange={handleInputChange}
                  placeholder="Search Construction Number"
                  className={`form-control ${errors.constructionNumber ? "is-invalid" : ""}`}
                />
                <span className="input-group-text d-flex align-items-center">
                  <i className="fa fa-search"></i>
                </span>
              </div>
              {errors.constructionNumber && <div className="text-danger">{errors.constructionNumber}</div>}
            </FormGroup>
          </div>

          {/* Police Station Dropdown */}
          <div className="col-md-4 mb-3">
            <label htmlFor="policeStationName" className="form-label label-small">
              Police Station Name <span className="text-danger">*</span>
            </label>
            <div className="custom-dropdown">
              <div
                className="dropdown-header"
                onClick={toggleDropdown}
                aria-role="button"
              >
                <span className="option-inside-placeholder">
                  {formData.policeStationName || "Select Police Station"}
                </span>
                {dropdownOpen ? (
                  <HiOutlineChevronUp size={18} className="dropdown-arrow" />
                ) : (
                  <HiOutlineChevronDown size={18} className="dropdown-arrow" />
                )}
              </div>
              {dropdownOpen && (
                <ul className="dropdown-options">
                  {["Station A", "Station B", "Station C"].map((station) => (
                    <li
                      key={station}
                      className="dropdown-option"
                      onClick={() => selectPoliceStation(station)}
                    >
                      {station}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {errors.policeStationName && (
              <div className="text-danger">{errors.policeStationName}</div>
            )}
          </div>

          {/* Police Manpower Details */}
          <div className="col-md-4">
            <FormGroup>
              <Label htmlFor="policeManpowerDetails" className="form-label label-small">
                Police Manpower Details
              </Label>
              <Input
                type="text"
                id="policeManpowerDetails"
                value={formData.policeManpowerDetails}
                onChange={handleInputChange}
                placeholder="Enter name"
                className="form-control"
              />
            </FormGroup>
          </div>
        </div>

        <div className="row">
          {/* Ward Office */}
          <div className="col-md-4">
            <FormGroup>
              <Label htmlFor="wardOffice" className="form-label label-small">
                Ward Office
              </Label>
              <div className="input-group">
                <Input
                  type="text"
                  id="wardOffice"
                  value={formData.wardOffice}
                  onChange={handleInputChange}
                  placeholder="Ward officer"
                  className="form-control"
                  style={{ backgroundColor: "#EEEEEE" }}
                />
                <span className="input-group-text" style={{ backgroundColor: "#EEEEEE" }}>
                  <i className="fas fa-pencil" style={{ color: "#010100" }}></i>
                </span>
              </div>
            </FormGroup>
          </div>
        </div>

        <button type="submit" className="btn submit-btn-form">
          Save and Next
        </button>
      </form>
    </div>
  );
};

export default DemolitionOrder;

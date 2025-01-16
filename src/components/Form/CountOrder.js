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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : ""); // Set the file name or clear it
    setFormValues((prev) => ({
      ...prev,
      courtOrderDocument: file,
    }));
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
  
   
  
   
    if (!formValues.courtOrderDocument) newErrors.courtOrderDocument = "Please upload the court order document.";
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
          <div className="col-md-4 mb-3">
            <label htmlFor="courtOrderUpload" className="form-label label-small">
              Court Order <span className="text-danger">*</span>
            </label>
            <div className="upload-container">
              <label
                htmlFor="courtOrderUpload"
                className={`form-control input-small upload-label ${errors.courtOrderDocument ? "is-invalid" : ""}`}
                style={{ cursor: "pointer" }}
              >
                <i className="fas fa-upload upload-icon input-small"></i>{" "}
                {fileName || "Upload Document"}
              </label>
              <input
                type="file"
                id="courtOrderUpload"
                onChange={handleFileChange}
                className="d-none"
                accept="image/*"
              />
            </div>
            {errors.courtOrderDocument && <div className="text-danger">{errors.courtOrderDocument}</div>}
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

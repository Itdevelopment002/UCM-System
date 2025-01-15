import React, { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";
import "./FunctionalRequiremnt.css"; // Ensure your updated CSS is here

const DemolitionOrder = () => {
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
  const [errors, setErrors] = useState({});
  const [fileName, setFileName] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    if (files[0]) {
      setFileName(files[0].name);
      setFormData((prevData) => ({ ...prevData, demolitionDocument: files[0].name }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.demolitionDate) {
      newErrors.demolitionDate = "Demolition Date is required.";
    }
    if (!formData.demolitionTime) {
      newErrors.demolitionTime = "Demolition Time is required.";
    }
    if (!formData.demolitionDocument) {
      newErrors.demolitionDocument = "Please upload a demolition document.";
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
      setErrors(newErrors);
      
    } else {
      setErrors({});
    
      console.log("Form Data Submitted:", formData);
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
          <div className="col-md-4">
            <FormGroup>
              <Label htmlFor="demolitionDocument" className="form-label label-small">
                Demolition Document <span className="text-danger">*</span>
              </Label>
              <div className="upload-container">
                <label
                  htmlFor="demolitionDocument"
                  className={`form-control input-small upload-label ${errors.demolitionDocument ? "is-invalid" : ""}`}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fas fa-upload upload-icon input-small"></i> {fileName || "Upload Documents"}
                </label>
                <input
                  type="file"
                  id="demolitionDocument"
                  onChange={handleFileChange}
                  className="d-none"
                  accept="image/*"
                />
              </div>
              {errors.demolitionDocument && <div className="text-danger">{errors.demolitionDocument}</div>}
            </FormGroup>
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

          {/* Police Station Dropdown
          <div className="col-md-4">
            <FormGroup>
              <Label htmlFor="policeStationName" className="form-label label-small">
                Police Station Name <span className="text-danger">*</span>
              </Label>
              <div className={`dropdown ${dropdownOpen ? "open" : ""}`}>
                <div
                  className={`form-control dropdown-toggle ${errors.policeStationName ? "is-invalid" : ""}`}
                  onClick={toggleDropdown}
                >
                  {formData.policeStationName || "Select Police Station"}
                </div>
                <div className="dropdown-menu">
                  {["Station A", "Station B", "Station C"].map((station) => (
                    <div
                      key={station}
                      className="dropdown-item"
                      onClick={() => selectPoliceStation(station)}
                    >
                      {station}
                    </div>
                  ))}
                </div>
              </div>
              {errors.policeStationName && <div className="text-danger">{errors.policeStationName}</div>}
            </FormGroup>
          </div> */}

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
          Save and Submit
        </button>
      </form>
    </div>
  );
};

export default DemolitionOrder;
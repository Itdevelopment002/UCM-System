import React, { useState }, { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FunctionalRequiremnt.css";

const DemolitionOrder = () => {
  const [fileName, setFileName] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

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
  const [errors, setErrors] = useState({}); // To track field errors

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: files[0]?.name || "" }));
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
    if (!formData.policeStationName) {
      newErrors.policeStationName = "Please select a police station.";
    }
    if (!formData.constructionNumber) {
      newErrors.constructionNumber = "Construction Number is required.";
    }
    // Optional fields: demolitionExpenditure, policeManpowerDetails, wardOffice

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill all the mandatory fields correctly.");
    } else {
      setErrors({});
      toast.success("Form submitted successfully!");
      console.log("Form Data Submitted:", formData);
    }
  };

  return (
    <div className="form-container">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* First Row */}
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
              {errors.demolitionDate && (
                <div className="text-danger">{errors.demolitionDate}</div>
              )}
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
              {errors.demolitionTime && (
                <div className="text-danger">{errors.demolitionTime}</div>
              )}
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
                  className={`form-control input-small upload-label ${
                    errors.demolitionDocument ? "is-invalid" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fas fa-upload upload-icon input-small"></i>{" "}
                  {formData.demolitionDocument || "Upload Documents"}
                </label>
                <input
                  type="file"
                  id="demolitionDocument"
                  onChange={handleFileChange}
                  className="d-none"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
              {errors.demolitionDocument && (
                <div className="text-danger">{errors.demolitionDocument}</div>
              )}
            </FormGroup>
          </div>
        </div>

        {/* Second Row */}
        <div className="row">
          <div className="col-md-8">
            <FormGroup>
              <Label
                htmlFor="demolitionExpenditure"
                className="form-label label-small"
              >
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

        {/* Third Row */}
        <div className="row">
          <div className="col-md-4">
            <FormGroup className="position-relative">
              <Label
                htmlFor="constructionNumber"
                className="form-label label-small"
              >
                Construction Number <span className="text-danger">*</span>
              </Label>
              <div className="input-group">
                <Input
                  type="search"
                  id="constructionNumber"
                  value={formData.constructionNumber}
                  onChange={handleInputChange}
                  placeholder="Search Construction Number"
                  className={`form-control ${
                    errors.constructionNumber ? "is-invalid" : ""
                  }`}
                />
                <span className="input-group-text d-flex align-items-center">
                    <i className="fa fa-search"></i>
                  </span>
              </div>
              {errors.constructionNumber && (
                <div className="text-danger">{errors.constructionNumber}</div>
              )}
            </FormGroup>
          </div>
          <div className="col-md-4">
            <FormGroup>
              <Label htmlFor="policeStationName" className="form-label label-small">
                Police Station Name <span className="text-danger">*</span>
              </Label>
              <Input
                type="select"
                id="policeStationName"
                value={formData.policeStationName}
                onChange={handleInputChange}
                className={`form-control ${
                  errors.policeStationName ? "is-invalid" : ""
                }`}
              >
                <option value="">Select the police station name</option>
                <option value="Station A">Station A</option>
                <option value="Station B">Station B</option>
                <option value="Station C">Station C</option>
              </Input>
              {errors.policeStationName && (
                <div className="text-danger">{errors.policeStationName}</div>
              )}
            </FormGroup>
          </div>
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

        {/* Fourth Row */}
        <div className="row">
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
                <span
                  className="input-group-text"
                  style={{ backgroundColor: "#EEEEEE" }}
                >
                  <i className="fas fa-pencil" style={{ color: "#010100" }}></i>
                </span>
              </div>
            </FormGroup>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn submit-btn-form">
                    Save and Submit
                  </button>
      </form>
    </div>
  );
};

export default DemolitionOrder;

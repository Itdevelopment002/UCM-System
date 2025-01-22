import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FormGroup, Label, Input } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";
import "./FunctionalRequiremnt.css"; 

const DemolitionOrder = ({onNext, onPrevious }) => {
  const navigate = useNavigate();
  const { t } = useTranslation(); 
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
      newErrors.demolitionDate =t("demolitionDate") + " is required.";
    }
    if (!formData.demolitionTime) {
      newErrors.demolitionTime = t("demolitionTime") + " is required."
    }
    if (!formData.demolitionDocument) {
      newErrors.demolitionDocument = t("demolitionDocument") + " is required.";
    }
    if (!formData.constructionNumber) {
      newErrors.constructionNumber = t("constructionNumber") + " is required.";
    }
    if (!formData.policeStationName) {
      newErrors.policeStationName = t("policeStationName") + " is required.";
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

      console.log("Submitted Successfully:", formData);
      
      
      onNext(); 
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
               {t("form.demolitionDate")} <span className="text-danger">*</span>
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
               {t("form.demolitionTime")} <span className="text-danger">*</span>
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
                {t("form.demolitionDocument")} <span className="text-danger">*</span>
              </Label>
              <div className="upload-container">
                <label
                  htmlFor="demolitionDocument"
                  className={`form-control input-small upload-label ${errors.demolitionDocument ? "is-invalid" : ""}`}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fas fa-upload upload-icon input-small"></i> {fileName || t("form.uploadDocs")}
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
               {t("form.demolitionExpenditureDetails")}
              </Label>
              <Input
                type="textarea"
                id="demolitionExpenditure"
                value={formData.demolitionExpenditure}
                onChange={handleInputChange}
                placeholder={t("form.DDexpenditureplaceholder")}
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
                {t("form.constructionNumber")} <span className="text-danger">*</span>
              </Label>
              <div className="input-group">
                <Input
                  type="search"
                  id="constructionNumber"
                  value={formData.constructionNumber}
                  onChange={handleInputChange}
                  placeholder={t("form.constructionNumberPlaceholder")}
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
              {t("form.policeStationName")} <span className="text-danger">*</span>
            </label>
            <div className="custom-dropdown">
              <div
                className="dropdown-header"
                onClick={toggleDropdown}
                role="button"
              >
                <span className="option-inside-placeholder">
                  {formData.policeStationName || t("form.selectPoliceStation")}
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
                {t("form.policeManpowerDetails")}
              </Label>
              <Input
                type="text"
                id="policeManpowerDetails"
                value={formData.policeManpowerDetails}
                onChange={handleInputChange}
                placeholder={t("form.enterNamePlaceholder")}
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
                {t("form.wardOffice")}
              </Label>
              <div className="input-group">
                <Input
                  type="text"
                  id="wardOffice"
                  value={formData.wardOffice}
                  onChange={handleInputChange}
                  placeholder={t("form.wardOfficeName")}
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
        {t("form.saveAndNext")}
        </button>
      </form>
    </div>
  );
};

export default DemolitionOrder;

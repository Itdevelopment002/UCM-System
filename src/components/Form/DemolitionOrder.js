import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import { FormGroup, Label, Input } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";
import "./FunctionalRequiremnt.css"; 

const DemolitionOrder = ({ onNext, onPrevious }) => {
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
    const file = event.target.files[0]; 

    if (!file) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "",
      }));
      return;
    }

    
    const validationRules = {
      hardCopyUpload: {
        validTypes: ["application/pdf", "application/msword"],
        maxSize: 2 * 1024 * 1024, 
        errorMessage: {
          type: "Only .doc and .pdf files are allowed.",
          size: "The file size exceeds 2 MB. Please upload a smaller document.",
        },
      },
      photoUpload: {
        validTypes: ["image/jpeg", "image/jpg", "image/png"],
        maxSize: 1 * 1024 * 1024, 
        errorMessage: {
          type: "Only image files (.jpg, .jpeg, .png) are allowed.",
          size: "The file size exceeds 1 MB. Please upload a smaller image.",
        },
      },
      videoUpload: {
        validTypes: ["video/mp4", "video/avi", "video/mov", "video/mkv"],
        maxSize: 10 * 1024 * 1024, 
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

    
    if (!validation.validTypes.includes(file.type)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: validation.errorMessage.type,
      }));
      event.target.value = ""; 
      return;
    }

    
    if (file.size > validation.maxSize) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: validation.errorMessage.size,
      }));
      event.target.value = ""; 
      return;
    }

    
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
      newErrors.demolitionDate = t("form.demolitionDate") + " " + t("form.isRequired");
    }
    if (!formData.demolitionTime) {
      newErrors.demolitionTime = t("form.demolitionTime") + " " + t("form.isRequired");
    }
    if (!formData.demolitionDocument) {
      newErrors.demolitionDocument = t("form.demolitionDocument") + " " + t("form.isRequired");
    }
    if (!formData.constructionNumber) {
      newErrors.constructionNumber = t("form.constructionNumber") + " " + t("form.isRequired");
    }
    if (!formData.policeStationName) {
      newErrors.policeStationName = t("form.policeStationName") + " " + t("form.isRequired");
    }
    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Submitted Successfully:", formData);
      onNext();
    } else {
      console.log("Validation failed. Please check the fields.");
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

          <div className="mb-3 col-md-4">
            <label htmlFor="hardCopyUpload" className="form-label label-small">
            {t("form.demolitionDocument")}
            </label>
            <div className="upload-container">
              <label
                htmlFor="hardCopyUpload"
                className={`form-control input-small upload-label ${errors.hardCopyUpload ? "is-invalid" : ""
                  }`}
                style={{ cursor: "pointer" }}
              >
                <i className="fas fa-upload upload-icon"></i>
                <span className="filename-gap">
                  {formValues.hardCopyUpload
                    ? formValues.hardCopyUpload.name
                    : t("form.uploadDocs")}
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
                  {["stationA", "stationB", "stationC"].map((station) => (
                    <li
                      key={station}
                      className="dropdown-option"
                      onClick={() => selectPoliceStation(t(`form.${station}`))}
                    >
                    {t(`form.${station}`)}
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
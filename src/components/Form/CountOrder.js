import React, { useState, useRef } from "react";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./FunctionalRequiremnt.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CourtOrder = ({ onNext, onPrevious }) => {
  const navigate = useNavigate();
  const { t } = useTranslation(); 

  const [isOpenOccupation, setIsOpenOccupation] = useState(false);
  const [selectedOption, setSelectedOption] = useState(t("form.selectOccupationType"));
  const [selectedCourt, setSelectedCourt] = useState("");
  const [occupationOptions] = useState([t("form.owner"), t("form.rented"), t("form.shop")]);
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
    t("form.District Court"),
    t("form.High Court"),
    t("form.Supreme Court"),
  ];
  const [errors, setErrors] = useState({});
  const [fileName, setFileName] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [id]: value,
    }));
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
          type: t("form.hardCopyValidator"),
          size: t("form.hardCopySizeValidator"),
        },
      },
      photoUpload: {
        validTypes: ["image/jpeg", "image/jpg", "image/png"],
        maxSize: 1 * 1024 * 1024,
        errorMessage: {
          type: t("form.photoValidator"),
          size: t("form.photoSizeValidator"),
        },
      },
      videoUpload: {
        validTypes: ["video/mp4", "video/avi", "video/mov", "video/mkv"],
        maxSize: 10 * 1024 * 1024,
        errorMessage: {
          type: t("form.videoValidator"),
          size: t("form.videoSizeValidator"),
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
    if (!formValues.courtOrderNumber) newErrors.courtOrderNumber = t("form.courtOrderNumberError");
    if (!formValues.edDate) newErrors.edDate = t("form.edDateError");
    if (!formValues.courtName) newErrors.courtName = t("form.courtNameError");
    // if (!formValues.typeOfCourt) newErrors.typeOfCourt = t("form.typeOfCourtError");
    // if (!formValues.petitionerName) newErrors.petitionerName = t("form.petitionerNameError");
    // if (!formValues.petitionerMobile) newErrors.petitionerMobile = t("form.petitionerMobileError");
    // if (!formValues.detailedAddress) newErrors.detailedAddress = t("form.detailedAddressError");
    // if (!formValues.courtOrderDocument) newErrors.courtOrderDocument = t("form.courtOrderDocError");
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    console.log("Validation Errors:", newErrors);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log("Submitted Successfully:", formValues);
      navigate("/dashboard/remark");
      onNext();
    }
  };



  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* Court Matter Involvement */}
        <div className="row">
          <div className="col-md-12 mb-3">
            <label className="label-small">{t("form.courtMatterInvolvement")}</label>
            <div style={{ display: "flex", gap: "30px" }}>
              <div>
                <input
                  type="radio"
                  id="courtInvolvementYes"
                  name="courtInvolvement"
                  value="Yes"
                  onChange={handleInputChange}
                />
                <label htmlFor="courtInvolvementYes" className="checkbox-label">{t("form.yes")}</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="courtInvolvementNo"
                  name="courtInvolvement"
                  value="No"
                  onChange={handleInputChange}
                />
                <label htmlFor="courtInvolvementNo" className="checkbox-label">{t("form.no")}</label>
              </div>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="courtOrderNumber" className="form-label label-small">
            {t("form.courtOrderNumber")} <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control input-small ${errors.courtOrderNumber ? "is-invalid" : ""}`}
              id="courtOrderNumber"
              placeholder={t("form.courtOrderNumberPlaceholder")}
              value={formValues.courtOrderNumber}
              onChange={handleInputChange}
            />
            {errors.courtOrderNumber && <div className="text-danger">{errors.courtOrderNumber}</div>}
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="edDate" className="form-label label-small">
            {t("form.edDate")} <span className="text-danger">*</span>
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
            {t("form.courtOrder")}
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
                    : t("form.courtOrderDocumentPlaceholder")}
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
            {t("form.courtName")} <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control input-small ${errors.courtName ? "is-invalid" : ""}`}
              id="courtName"
              placeholder={t("form.courtNamePlaceholder")}
              value={formValues.courtName}
              onChange={handleInputChange}
            />
            {errors.courtName && <div className="text-danger">{errors.courtName}</div>}
          </div>

          {/* Court Type Dropdown */}
          <div className="col-md-4 mb-3">
            <label htmlFor="typeOfCourt" className="form-label label-small">
            {t("form.typeOfCourt")}
            </label>
            <div className="custom-dropdown">
              <div
                className="dropdown-header"
                onClick={toggleCourtDropdown}
                role="button"
              >
                <span className="option-inside-placeholder">
                  {selectedCourt || t("form.chooseCourt")}
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
            {t("form.petitionerName")} 
            </label>
            <input
              type="text"
              className={`form-control input-small`}
              id="petitionerName"
              placeholder={t("form.petitionerNamePlaceholder")}
              value={formValues.petitionerName}
              onChange={handleInputChange}
            />

          </div>
          <div className="col-md-4 mb-3 mt-2">
            <label htmlFor="detailedAddress" className="form-label label-small">
            {t("form.petitionerAddress")} 
            </label>
            <textarea
              className="form-control input-small text-box-height"
              id="detailedAddress"
              placeholder={t("form.addressPlaceholder")}
              rows="3"
              value={formValues.detailedAddress}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button type="submit" className="btn submit-btn-form">
        {t("form.saveAndNext")}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CourtOrder;
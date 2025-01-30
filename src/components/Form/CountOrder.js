import React, { useState, useRef, useEffect } from "react";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./FunctionalRequiremnt.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormContext } from "../Context/FormContext";


const CourtOrder = ({ onNext, onPrevious }) => {
  const { formData, setFormData } = useFormContext();

  const navigate = useNavigate();
  const { t } = useTranslation();

  const [isOpenOccupation, setIsOpenOccupation] = useState(false);
  const [selectedOption, setSelectedOption] = useState(t("form.selectOccupationType"));
  const [selectedCourt, setSelectedCourt] = useState("");
  const [occupationOptions] = useState([t("form.owner"), t("form.rented"), t("form.shop")]);
  const dropdownRef = useRef(null);



  useEffect(() => {
    if (formData?.form5) {
      setFormValues((prev) => ({
        ...prev,
        ...formData.form5,
      }));
      setSelectedCourt(formData.form5.typeOfCourt || "");
    }
  }, [formData]);



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
    t("form.districtCourt"),
    t("form.highCourt"),
    t("form.supremeCourt"),
  ];
  const [errors, setErrors] = useState({});
  const [fileName, setFileName] = useState("");
  const handleInputChange = (e) => {
    const { id, value } = e.target;


    if (id === "petitionerMobileNumber" && !/^\d*$/.test(value)) {
    }

    setFormValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      validateFile(file, "hardCopyUpload", e);
    }
  };

  const validateFile = (file, field, e) => {
    const validationRules = {
      hardCopyUpload: {
        validTypes: ["application/pdf", "application/msword"],
        maxSize: 2 * 1024 * 1024,
        errorMessage: {
          type: "Only .doc and .pdf files are allowed.",
          size: "The file size exceeds 2 MB. Please upload a smaller document.",
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
      e.target.value = "";
      return;
    }


    if (file.size > validation.maxSize) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: validation.errorMessage.size,
      }));
      e.target.value = "";
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
    setFormValues((prev) => ({
      ...prev,
      typeOfCourt: option,
    }));
    setIsOpenCourt(false);
  };


  const validateForm = () => {
    const newErrors = {};
    if (!formValues.courtOrderNumber) newErrors.courtOrderNumber = t("form.courtOrderNumberError");
    if (!formValues.edDate) newErrors.edDate = t("form.edDateError");
    if (!formValues.courtName) newErrors.courtName = t("form.courtNameError");

    return newErrors;
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setFormData((prevData) => ({
        ...prevData,
        form5: {
          ...formValues,
          courtInvolvement: formValues.courtInvolvement || "",
          typeOfCourt: formValues.typeOfCourt || "",
        },
      }));
      console.log("Form submitted successfully, proceeding to next step...", formValues);
      onNext();
    } else {
      console.log("Form validation failed. Please fix the errors.");
    }
  };

  const handleNumericInput = (e, maxLength) => {
    const { id, value } = e.target;
    const sanitizedValue = value.replace(/[^0-9]/g, "");

    if (sanitizedValue.length > maxLength) {
      setErrors((prev) => ({
        ...prev,
        [id]: `Please enter a ${maxLength}-digit number only.`,
      }));
      return;
    }
  }


  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>

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
                  checked={formValues.courtInvolvement === "Yes"}
                  onChange={() => setFormValues((prev) => ({ ...prev, courtInvolvement: "Yes" }))}
                />

                <label htmlFor="courtInvolvementYes" className="checkbox-label">{t("form.yes")}</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="courtInvolvementNo"
                  name="courtInvolvement"
                  value="No"
                  checked={formValues.courtInvolvement === "No"}
                  onChange={() => setFormValues((prev) => ({ ...prev, courtInvolvement: "No" }))}
                />

                <label htmlFor="courtInvolvementNo" className="checkbox-label">{t("form.no")}</label>
              </div>
            </div>
          </div>
        </div>


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
          <div className="col-md-4 mb-3">
            <label htmlFor="petitionerMobileNumber" className="form-label label-small">
              {t("form.petitionerMobileNumber")}
            </label>
            <input
              type="text"
              className={`form-control input-small`}
              id="petitionerMobileNumber"
              placeholder={t("form.petitionerMobileNumberPlaceholder")}
              value={formValues.petitionerMobileNumber}
              onChange={(e) => handleNumericInput(e, 10)}
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

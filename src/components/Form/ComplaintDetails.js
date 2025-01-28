import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import map from "../../images/map.png";
import locate from "../../images/location-icon.png";
import iconbg from "../../images/icon-bg.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FunctionalRequiremnt.css";
import { useFormContext } from "../FormContext";

const ComplaintDetails = ({ onNext, onPrevious }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [formValues, setFormValues] = useState({
    complainantName: "",
    complainantContact: "",
    complaintDescription: "",
    hardCopyUpload: null,
    photoUpload: null,
    videoUpload: null,
  });
  const [errors, setErrors] = useState({});
  const { formData, setFormData } = useFormContext(); // Destructure the context

  const handleInputChange = (e) => {
    const { id, value, files } = e.target;
    if (id === "complainantContact") {
      const sanitizedValue = value.replace(/[^0-9]/g, "");
      if (sanitizedValue.length > 10) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [id]: "Please enter a 10-digit number only.",
        }));
        return;
      }
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: "",
      }));
      setFormValues((prevValues) => ({
        ...prevValues,
        [id]: sanitizedValue,
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [id]: files ? files[0] : value,
      }));
    }
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

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.complainantName.trim()) {
      newErrors.complainantName = t("form.complainantNameError");
    }
    if (
      !formValues.complainantContact.trim() ||
      !/^\d{10}$/.test(formValues.complainantContact)
    ) {
      newErrors.complainantContact = t("form.complainantContactError");
    }
    if (!formValues.complaintDescription.trim()) {
      newErrors.complaintDescription = t("form.complaintDescriptionError");
    }
    if (!formValues.hardCopyUpload) {
      newErrors.hardCopyUpload = t("form.hardCopyUploadError");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm) {
      setFormData((prev) => ({
        ...prev,
        form1: formValues, // Save current form's data in global state
      }));
      onNext(); // Navigate to the next form
    }
  };
  useEffect(() => {
    const isFormValid = (values) => {
      const { complainantName, complainantContact, complaintDescription } = values;
      return (
        complainantName.trim() &&
        /^\d{10}$/.test(complainantContact) &&
        complaintDescription.trim()
      );
    };

    const validateAndMarkForm = () => {
      if (isFormValid(formValues)) {
        setFormData((prev) => ({
          ...prev,
          isFormComplete: true,
        }));
      }
    };

    validateAndMarkForm();
  }, [formValues, setFormData]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3 col-md-6">
              <label
                htmlFor="complainantName"
                className="form-label label-small"
              >
                {t("form.complainantName")} <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="complainantName"
                value={formValues.complainantName}
                onChange={handleInputChange}
                className={`form-control input-small ${
                  errors.complainantName ? "is-invalid" : ""
                }`}
                placeholder={t("form.complainantNamePlaceholder")}
              />
              {errors.complainantName && (
                <small className="text-danger">{errors.complainantName}</small>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label
                htmlFor="complainantContact"
                className="form-label label-small"
              >
                {t("form.complainantContact")} <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="complainantContact"
                value={formValues.complainantContact}
                onChange={handleInputChange}
                className={`form-control input-small ${
                  errors.complainantContact ? "is-invalid" : ""
                }`}
                placeholder={t("form.enterContactNumber")}
              />
              {errors.complainantContact && (
                <small className="text-danger">{errors.complainantContact}</small>
              )}
            </div>
            <div className="mb-3">
              <label
                htmlFor="complaintDescription"
                className="form-label label-small"
              >
                {t("form.complaintDescription")} <span className="text-danger">*</span>
              </label>
              <textarea
                id="complaintDescription"
                value={formValues.complaintDescription}
                onChange={handleInputChange}
                className={`form-control input-small ${
                  errors.complaintDescription ? "is-invalid" : ""
                }`}
                rows="4"
                placeholder={t("form.complaintDescriptionPlaceholder")}
              ></textarea>
              {errors.complaintDescription && (
                <small className="text-danger">{errors.complaintDescription}</small>
              )}
            </div>
            {/* File upload fields and other elements */}
          </div>
        </div>
        <button type="submit" className="btn submit-btn-form" >
          {t("form.saveAndNext")}
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default ComplaintDetails;

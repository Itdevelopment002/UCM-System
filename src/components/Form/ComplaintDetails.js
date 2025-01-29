import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import map from "../../images/map.png";
import locate from "../../images/location-icon.png";
import iconbg from "../../images/icon-bg.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FunctionalRequiremnt.css";

import { useFormContext } from "../Context/FormContext";
const ComplaintDetails = ({ onNext, onPrevious }) => {

  const { formData, setFormData } = useFormContext();

  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    complainantName: "",
    complainantContact: "",
    complaintDescription: "",
    hardCopyUpload: null,
    photoUpload: null,
    videoUpload: null,
  });

  const [errors, setErrors] = useState({});
  const {t} = useTranslation(); 

  useEffect(() => {
      if (formData?.form2) {
        setFormValues(formData.form2); // Set form values from the global state if available
      }
    }, [formData]); // Only trigger when formData changes
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
    let isValid = true;
    const newErrors = { ...errors };
  
    if (!formValues.complainantName || !formValues.complainantName.trim()) {
      newErrors.complainantName = t("form.complainantNameError");
      isValid = false;
    }
  
    if (
      !formValues.complainantContact ||
      !formValues.complainantContact.trim() ||
      !/^\d{10}$/.test(formValues.complainantContact)
    ) {
      newErrors.complainantContact = t("form.complainantContactError");
      isValid = false;
    }
  
    if (!formValues.complaintDescription || !formValues.complaintDescription.trim()) {
      newErrors.complaintDescription = t("form.complaintDescriptionError");
      isValid = false;
    }
  
    if (!formValues.hardCopyUpload) {
      newErrors.hardCopyUpload = t("form.hardCopyUploadError");
      isValid = false;
    }
  
    setErrors(newErrors);
  
    if (isValid) {
      setFormData((prev) => ({
        ...prev,
        form2: formValues, // Save current form's data in global state
      }));
      onNext(); // Navigate to the next form
    }
  };
  
  

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="mb-3 col-md-6">
                <label htmlFor="complainantName" className="form-label label-small">
                {t("form.complainantName")} <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="complainantName"
                  value={formValues.complainantName}
                  onChange={handleInputChange}
                  className={`form-control input-small ${errors.complainantName ? "is-invalid" : ""
                    }`}
                  placeholder={t("form.complainantNamePlaceholder")}
                />
                {errors.complainantName && (
                  <small className="text-danger">{errors.complainantName}</small>
                )}
              </div>

              <div className="mb-3 col-md-6">
                <label htmlFor="complainantContact" className="form-label label-small">
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
            </div>

            <div className="mb-3">
              <label htmlFor="complaintDescription" className="form-label label-small">
                {t("form.complaintDescription")} <span className="text-danger">*</span>
              </label>
              <textarea
                id="complaintDescription"
                value={formValues.complaintDescription}
                onChange={handleInputChange}
                className={`form-control input-small ${errors.complaintDescription ? "is-invalid" : ""
                  }`}
                rows="4"
                placeholder={t("form.complaintDescriptionPlaceholder")}
              ></textarea>
              {errors.complaintDescription && (
                <small className="text-danger">{errors.complaintDescription}</small>
              )}
            </div>

            <div className="mb-3 col-md-12">
              <label htmlFor="hardCopyUpload" className="form-label label-small">
              {t("form.hardCopyUpload")} <span className="text-danger">*</span>
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
                      : (t("form.hardCopyPlaceholder"))}
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

          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label label-big">{t("form.complaintAttachments")}</label>
              <div className="divider-form"></div>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label label-small">{t("form.photoUpload")}</label>
                  <div className="upload-container">
                    <label
                      htmlFor="photoUpload"
                      className={`form-control input-small upload-label ${errors.photoUpload ? "is-invalid" : ""
                        }`}
                      style={{ cursor: "pointer" }}
                    >

                      <i className="fas fa-upload upload-icon"></i>
                      <span className="filename-gap">
                        {formValues.photoUpload
                          ? formValues.photoUpload.name
                          : (t("form.photoPlaceholder"))}
                      </span>
                    </label>
                    <input
                      type="file"
                      id="photoUpload"
                      onChange={(e) => handleFileChange(e, "photoUpload")}
                      className={`form-control input-small d-none `}
                      accept="image/jpeg, image/jpg, image/png"
                    />
                  </div>
                  {errors.photoUpload && (
                    <small className="text-danger">{errors.photoUpload}</small>
                  )}
                </div>



                <div className="mb-3 col-md-6">
                  <label className="form-label label-small">{t("form.videoUpload")}</label>
                  <div className="upload-container">
                    <label
                      htmlFor="videoUpload"
                      className={`form-control input-small upload-label ${errors.videoUpload ? "is-invalid" : ""
                        }`}
                      style={{ cursor: "pointer" }}
                    >

                      <i className="fas fa-upload upload-icon"></i>
                      <span className="filename-gap">
                        {formValues.videoUpload
                          ? formValues.videoUpload.name
                          : (t("form.videoPlaceholder"))}
                      </span>
                    </label>
                    <input
                      type="file"
                      id="videoUpload"
                      onChange={(e) => handleFileChange(e, "videoUpload")}
                      className="form-control input-small d-none"
                      accept="video/*"
                    />
                  </div>
                  {errors.videoUpload && (
                    <small className="text-danger">{errors.videoUpload}</small>
                  )}
                </div>


              </div>
            </div>

            {/* Location Details */}
            <div className="form-group mt-4">
              <label className="form-label text-dark fw-bold" style={{ fontSize: "16px" }}>{t("form.locationDetails")}</label>
              <div className="mb-3" style={{ height: "2px", width: "auto", background: "#5038ED" }}></div>
              <div className="">
                <div className="row">
                  <div className="col-md-5 mt-1">
                    <img
                      src={map}
                      alt={t("form.mapImage")}
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="mt-2 col-md-6">
                    <div className="row mb-3">
                      <div className="col d-flex align-items-center">
                        <img src={locate} alt={t("form.locate")} className="img-fluid rounded" />
                        <div className="col d-flex align-items-center">
                          <span className="me-2">
                            <i className="bi bi-geo-alt-fill text-primary"></i>
                          </span>
                          <strong className="text-secondary fw-light" style={{ fontSize: "2.5rem" }}>{t("form.city")}</strong>
                        </div>
                        <div className="position-relative" style={{ top: "5%" }} >
                          <img src={iconbg} alt={t("form.iconbg")} className="img-fluid rounded" />
                          <i className="fas fa-paper-plane text-white position-absolute"
                            style={{ top: "20%", left: "25%", fontSize: "1.3rem" }}></i></div>
                      </div>
                    </div>
                    <p className="mb-1 text-secondary fw-bold">
                    {t("form.latitude")}<strong className="text-secondary fw-light">-28.7041</strong>
                    </p>
                    <p className="text-secondary fw-bold">
                    {t("form.longitude")} <strong className="text-secondary fw-light">-77.1025</strong>
                    </p>
                  </div>

                </div>
              </div>
            </div>
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

export default ComplaintDetails;

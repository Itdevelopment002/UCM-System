import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { useTranslation } from "react-i18next";
import "./FunctionalRequiremnt.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";
import { useFormContext } from "../Context/FormContext";

const NoticeDetails = ({ onNext, onPrevious }) => {
  const { formData, setFormData } = useFormContext();
  const navigate = useNavigate();
  const [isOpenOccupation, setIsOpenOccupation] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); // For dropdown
  const [selectedNoticeCount, setSelectedNoticeCount] = useState("none"); // Radio selection
  const [errors, setErrors] = useState({}); // For form validation
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const { t } = useTranslation();

  useEffect(() => {
    setIsModalOpen(true); // Open the modal as soon as the component mounts
  }, []);

  useEffect(() => {
    if (formData?.form3) {
      setFormValues(formData.form3); // Set form values from the global state if available
    }
  }, [formData]); // Trigger when formData changes

  const setFormValues = (form3Data) => {
    setSelectedOption(form3Data.selectedOption || "");
    setSelectedNoticeCount(form3Data.selectedNoticeCount || "none");
  };

  const noticeOptions = [t("form.owner"), t("form.rented"), t("form.shop")];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpenOccupation(false); // Close dropdown after selection
  };

  const handleDateChange = (e) => {
    const dateValue = e.target.value;
    // Validate and set the date in yyyy-mm-dd format
    if (dateValue) {
      setFormData({
        ...formData,
        form3: {
          ...formData.form3,
          formattedDate: dateValue, // Store the date in correct format
        },
      });
      setErrors((prevErrors) => ({ ...prevErrors, date: "" })); // Clear error if date is valid
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, date: "Please select a valid date." })); // Show error if invalid
    }
  };

  const handleNoticeCountChange = (e) => {
    setSelectedNoticeCount(e.target.value); // Handle radio selection change
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.form3?.formattedDate) {
      newErrors.date = t("form.dateError"); // Show error if date is empty
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // If no validation errors, submit the form data
      console.log("Form submitted successfully!");
      console.log("Form Data:", {
        selectedOption,
        selectedNoticeCount,
        formattedDate: formData.form3?.formattedDate,
      });

      // Update form data in context
      setFormData({
        ...formData,
        form3: {
          selectedOption,
          selectedNoticeCount,
          formattedDate: formData.form3?.formattedDate,
        },
      });

      onNext(); // Proceed to the next step
    } else {
      // If there are validation errors, show them and prevent submission
      console.log("Validation failed. Errors:", newErrors);
      setErrors(newErrors); // Update the errors state
    }
  };

  return (
    <div className="form-container">
      <ToastContainer />

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="close-button"
              onClick={toggleModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "26px",
                color: "#414651",
                cursor: "pointer",
              }}
            >
              &times;
            </button>

            <div className="modal-icon-container">
              <span className="modal-icon">✔</span>
            </div>

            <div className="modal-right-content ms-2">
              <h5 className="modal-title">{t("form.notice")}</h5>
              <p className="model-text">{t("form.noticeCountQuestion")}</p>

              <div className="modal-options">
                {["none", "notice1", "notice2", "notice3"].map((value) => (
                  <label key={value}>
                    <input
                      type="radio"
                      name="noticeCount"
                      value={value}
                      className="radio-btn-size"
                      checked={selectedNoticeCount === value}
                      onChange={handleNoticeCountChange}
                    />
                    {value === "none" ? "None" : `Notice ${value.slice(-1)}`}
                  </label>
                ))}
              </div>

              <div className="modal-footer">
                <label className="checkbox-container">
                  <input type="checkbox" />
                  {t("form.doNotShow")}
                </label>
                <div className="btn-at-footer">
                  <button className="cancel-btn" onClick={toggleModal}>
                    {t("form.cancel")}
                  </button>
                  <button className="confirm-btn" onClick={toggleModal}>
                    {t("form.confirm")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="row d-flex align-items-center">
          <div className="col-md-6 d-flex">
            <div className="mb-3 col-md-6">
              <label htmlFor="occupationType" className="form-label label-small">
                {t("form.generatedNotices")}
              </label>
              <div className="custom-dropdown">
                <div
                  className={`dropdown-header`}
                  onClick={() => setIsOpenOccupation(!isOpenOccupation)}
                >
                  <span className="option-inside-placeholder">
                    {selectedOption || t("form.selectNotice")}
                  </span>
                  {isOpenOccupation ? (
                    <HiOutlineChevronUp size={18} className="dropdown-arrow" />
                  ) : (
                    <HiOutlineChevronDown size={18} className="dropdown-arrow" />
                  )}
                </div>
                {isOpenOccupation && (
                  <ul className="dropdown-options-notice-form">
                    {noticeOptions.map((option, index) => (
                      <li
                        key={index}
                        className="dropdown-option"
                        onClick={() => handleSelect(option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="mb-3 col-md-6 ms-3">
              <label htmlFor="datePicker" className="form-label label-small">
                {t("form.noticeDate")}<span className="text-danger">*</span>
              </label>
              <input
                type="date"
                className={`form-control input-small input-box-size ${
                  errors.date ? "is-invalid" : ""
                }`}
                id="datePicker"
                value={formData.form3?.formattedDate || ""}
                onChange={handleDateChange}
              />
              {errors.date && <span className="text-danger">{errors.date}</span>}
            </div>
          </div>
        </div>
        <button type="submit" className="btn submit-btn-form">
          {t("form.saveAndNext")}
        </button>
      </form>
    </div>
  );
};

export default NoticeDetails; 

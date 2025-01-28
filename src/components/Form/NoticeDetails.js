import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useTranslation } from "react-i18next";
import "./FunctionalRequiremnt.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";

const NoticeDetails = ({ onNext, onPrevious }) => {
  const navigate = useNavigate(); 
  const [isOpenOccupation, setIsOpenOccupation] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); // For dropdown
  const [selectedNoticeCount, setSelectedNoticeCount] = useState("none"); // Radio selection
  const [formattedDate, setFormattedDate] = useState(""); // Date formatting
  const [errors, setErrors] = useState({}); // For form validation
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const { t } = useTranslation();

  useEffect(() => {
    setIsModalOpen(true); 
  }, []);

  const noticeOptions = [ t("form.owner"),t("form.rented"),t("form.shop")];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpenOccupation(false); 
  };

  const handleDateChange = (e) => {
    const dateValue = e.target.value; 
    const [year, month, day] = dateValue.split("-");
  
    if (year && month && day) {
      setFormattedDate(`${day}/${month}/${year.slice(-2)}`); 
      setErrors((prevErrors) => ({ ...prevErrors, date: "" })); 
    } else {
      setFormattedDate("");
      setErrors((prevErrors) => ({ ...prevErrors, date: "Please select a valid date." })); 
    }
  };
  

  const handleNoticeCountChange = (e) => {
    setSelectedNoticeCount(e.target.value);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formattedDate) {
      newErrors.date = t("form.dateError"); 
    }
    
    return newErrors;
  };
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm(); 
    
    if (Object.keys(newErrors).length === 0) {
      
      console.log("Submitted successfully");
      console.log("Form Data:", {
        selectedOption,
        selectedNoticeCount,
        formattedDate,
      });
  
      
      
      onNext(); 
  
    } else {
      
      console.log("Validation failed. Errors:", newErrors);
      setErrors(newErrors); 
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
                  className={`dropdown-header `}
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

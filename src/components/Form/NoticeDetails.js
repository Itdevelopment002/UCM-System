import React, { useState, useEffect } from "react";
import "./FunctionalRequiremnt.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";

const NoticeDetails = () => {
  const [isOpenOccupation, setIsOpenOccupation] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); // For dropdown
  const [selectedNoticeCount, setSelectedNoticeCount] = useState("none"); // Radio selection
  const [formattedDate, setFormattedDate] = useState(""); // Date formatting
  const [errors, setErrors] = useState({}); // For form validation
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  useEffect(() => {
    setIsModalOpen(true); // Open modal on component mount
  }, []);

  const noticeOptions = ["Owner", "Rented", "Shop"]; // Dropdown options

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpenOccupation(false); // Close dropdown
  };

  const handleDateChange = (e) => {
    const dateValue = e.target.value; // Native format (yyyy-mm-dd)
    const [year, month, day] = dateValue.split("-");
  
    if (year && month && day) {
      setFormattedDate(`${day}/${month}/${year.slice(-2)}`); // Convert to dd/mm/yy
      setErrors((prevErrors) => ({ ...prevErrors, date: "" })); // Clear the error
    } else {
      setFormattedDate("");
      setErrors((prevErrors) => ({ ...prevErrors, date: "Please select a valid date." })); // Set error if date is empty
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
    if (!selectedOption) {
      newErrors.selectedOption = "Please select a notice type.";
    }
    if (!formattedDate) {
      newErrors.date = "Please select a valid date."; // Error if date is empty
    }
    return newErrors;
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
  
    if (Object.keys(newErrors).length === 0) {
      toast.success("Form submitted successfully!");
      console.log("Form Data:", {
        selectedOption,
        selectedNoticeCount,
        formattedDate,
      });
    } else {
      setErrors(newErrors); // Set errors to show validation messages
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
              ×
            </button>

            <div className="modal-icon-container">
              <span className="modal-icon">✔</span>
            </div>

            <div className="modal-right-content ms-2">
              <h5 className="modal-title">Notice</h5>
              <p className="model-text">How many notices have been submitted?</p>

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
                  Don't show again
                </label>
                <div className="btn-at-footer">
                  <button className="cancel-btn" onClick={toggleModal}>
                    Cancel
                  </button>
                  <button className="confirm-btn" onClick={toggleModal}>
                    Confirm
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
                Generated Notices 
              </label>
              <div className="custom-dropdown">
                <div
                  className={`dropdown-header `}
                  onClick={() => setIsOpenOccupation(!isOpenOccupation)}
                >
                  <span className="option-inside-placeholder">
                    {selectedOption || "Select the notice"}
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
                Date <span className="text-danger">*</span>
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
          Save and Submit
        </button>
      </form>
    </div>
  );
};

export default NoticeDetails;

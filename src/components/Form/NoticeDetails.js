import React, { useState, useEffect } from "react";
import "./FunctionalRequiremnt.css";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi"; // Import these icons

const NoticeDetails = () => {
  const [isOpenOccupation, setIsOpenOccupation] = useState(false);
const [selectedOption, setSelectedOption] = useState(""); // Add state for the selected option
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [selectedNoticeCount, setSelectedNoticeCount] = useState("none"); // Radio selection state
  const [formattedDate, setFormattedDate] = useState(""); // Date formatting state

  // Automatically open the modal when the component mounts
  useEffect(() => {
    setIsModalOpen(true);
  }, []);
  const handleSelect = (option, type) => {
    if (type === "occupation") {
      setSelectedOption(option);
      setIsOpenOccupation(false); // Close the dropdown after selection
    }
  };
  
  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Handle changes to radio button selection
  const handleNoticeCountChange = (e) => {
    setSelectedNoticeCount(e.target.value);
  };

  // Handle confirmation button click
  const handleConfirm = () => {
    console.log("Selected Notice Count:", selectedNoticeCount);
    toggleModal();
  };

  // Handle date input changes
  const handleDateChange = (e) => {
    const dateValue = e.target.value; // Native format (yyyy-mm-dd)
    const [year, month, day] = dateValue.split("-");
    if (year && month && day) {
      setFormattedDate(`${day}/${month}/${year.slice(-2)}`); // Convert to dd/mm/yy
    }
  };

  return (
    <div className="form-container">
      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            {/* Close Button (Top-Right Corner) */}
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
               color:"#414651",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            {/* Left Section: Icon */}
            <div className="modal-icon-container">
              <span className="modal-icon">✔</span>
            </div>

            {/* Right Section */}
            <div className="modal-right-content ms-2">
              {/* Header */}
              <h5 className="modal-title">Notice</h5>
              <p className="model-text">How many notices have been submitted?</p>

              {/* Options */}
              <div className="modal-options">
                <label >
                  <input
                    type="radio"
                    name="noticeCount"
                    value="none"
                    className="radio-btn-size"
                    checked={selectedNoticeCount === "none"}
                    onChange={handleNoticeCountChange}
                  />
                  None
                </label>
                <label>
                  <input
                    type="radio"
                    name="noticeCount"
                    value="notice1"
                    className="radio-btn-size"
                    checked={selectedNoticeCount === "notice1"}
                    onChange={handleNoticeCountChange}
                  />
                  Notice 1
                </label>
                <label>
                  <input
                    type="radio"
                    name="noticeCount"
                    value="notice2"
                    className="radio-btn-size"
                    checked={selectedNoticeCount === "notice2"}
                    onChange={handleNoticeCountChange}
                  />
                  Notice 2
                </label>
                <label>
                  <input
                    type="radio"
                    name="noticeCount"
                    value="notice3"
                    className="radio-btn-size"
                    checked={selectedNoticeCount === "notice3"}
                    onChange={handleNoticeCountChange}
                  />
                  Notice 3
                </label>
              </div>

              {/* Footer */}
              <div className="modal-footer">
                <label className="checkbox-container">
                  <input type="checkbox" />
                  Don't show again
                </label>
                <div className="btn-at-footer">
                  <button className="cancel-btn" onClick={toggleModal}>
                    Cancel
                  </button>
                  <button className="confirm-btn" onClick={handleConfirm}>
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Form Section */}
      <form>
        <div className="row d-flex align-items-center">
          {/* First Column */}
          <div className="col-md-6 d-flex">
          <div className="mb-3 col-md-4">
  <label htmlFor="occupationType" className="form-label label-small">
    Generated Notices
  </label>
  <div className="custom-dropdown">
    <div
      className="dropdown-header"
      onClick={() => setIsOpenOccupation(!isOpenOccupation)} // Toggle dropdown
    >
      <span className="option-inside-placeholder">
        {selectedOption || "Select the notice"} {/* Display selected option */}
      </span>
      {isOpenOccupation ? (
        <HiOutlineChevronUp size={18} className="dropdown-arrow" />
      ) : (
        <HiOutlineChevronDown size={18} className="dropdown-arrow" />
      )}
    </div>
    {isOpenOccupation && (
      <ul className="dropdown-options-notice-form">
        <li
          className="dropdown-option"
          onClick={() => handleSelect("Owner", "occupation")} // Handle selection
        >
          Owner
        </li>
        <li
          className="dropdown-option"
          onClick={() => handleSelect("Rented", "occupation")}
        >
          Rented
        </li>
        <li
          className="dropdown-option"
          onClick={() => handleSelect("Shop", "occupation")}
        >
          Shop
        </li>
      </ul>
    )}
  </div>
</div>

            <div className="mb-3 col-md-3 ms-3">
              <label htmlFor="datePicker" className="form-label label-small">
                Date
              </label>
              <input
                type="date"
                className="form-control input-small input-box-size"
                id="datePicker"
                onChange={handleDateChange}
              />
              {formattedDate && (
                <div className="mt-2">
                  <small>Selected Date: {formattedDate}</small>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Save and Submit Button */}
         <button type="submit" className="btn submit-btn-form">
  Save and Submit
</button>
      </form>
    </div>
  );
};

export default NoticeDetails;

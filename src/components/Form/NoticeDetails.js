import React, { useState, useEffect } from "react";
import "./FunctionalRequiremnt.css";

const NoticeDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [selectedNoticeCount, setSelectedNoticeCount] = useState("none"); // Radio selection state
  const [formattedDate, setFormattedDate] = useState(""); // Date formatting state

  // Automatically open the modal when the component mounts
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

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
                <label>
                  <input
                    type="radio"
                    name="noticeCount"
                    value="none"
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
            <div className="mb-3 col-md-3">
              <label
                htmlFor="occupationType"
                className="form-label label-small"
              >
                Generated Notices
              </label>
              <select
                className="form-select select-style"
                name="occupationType"
                id="occupationType"
                placeholder="Select the notice"
              >
                <option value="" disabled selected>
                  Select the notice
                </option>
                <option value="owner">Owner</option>
                <option value="rented">Rented</option>
                <option value="shop">Shop</option>
              </select>
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
        <button
          type="submit"
          className="btn submit-btn"
          style={{
            background: "linear-gradient(99.78deg, #9181F4 -5.85%, #5038ED 109.55%)",
            color: "white",
            display: "flex",
            justifyContent: "right",
            fontWeight: "bold",
            fontFamily: "Poppins",
            borderRadius: "28px",
            padding: "15px",
            border: "none",
            height: "fit-content",
            width: "fit-content",
            fontSize: "13px",
            position: "absolute",
            bottom: "10px",
            right: "10px",
          }}
        >
          Save and Submit
        </button>
      </form>
    </div>
  );
};

export default NoticeDetails;

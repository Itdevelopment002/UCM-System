import React, { useState } from "react";
import './FunctionalRequiremnt.css';
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
} from "react-icons/hi"; // Dropdown icons


const FunctionalRequiremnt = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Occupation Type");
  
  const options = [
    "Owner",
    "Rented",
    "Shop",
    "Company",
    "ATM",
    "Hospital",
    "Rank",
  ];
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  
  return (
    <div className="form-container">
      <form>
        <div className="row">
          {/* First Column */}
          <div className="col-md-4">
            <div className="mb-3">
              <label htmlFor="wardGroup" className="form-label label-small">Ward Office</label>
              <input
                type="text"
                className="form-control input-small"
                id="wardGroup"
                placeholder="Enter ward group"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ucNo" className="form-label label-small">Unauthorized Construction Number (UC No.)</label>
              <input
                type="text"
                className="form-control input-small "
                id="ucNo"
                placeholder="YYMMDD-WARD NUM (Auto generated)"
                style={{backgroundColor:"#fff"}}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ownerName" className="form-label label-small">Owner Name</label>
              <input
                type="text"
                className="form-control input-small"
                id="ownerName"
                placeholder="Enter owner name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label label-small">Contact Number</label>
              <input
                type="tel"
                className="form-control input-small"
                id="contactNumber"
                placeholder="Enter contact number"
              />
            </div>
          </div>

          {/* Second Column */}
          <div className="col-md-8">
            <h2 className="label-big">Address Details</h2>
            <div className="divider-form" ></div>
            <div className="mb-3 mt-2">
  <label htmlFor="detailedAddress" className="form-label label-small">Detailed Address</label>
  <textarea
    className="form-control input-small text-box-height"
    id="detailedAddress"
    placeholder="Write a long text here"
    rows="3"  // This will set the height of the textarea to 3 rows
  />
</div>


            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="pincode" className="form-label label-small">Pincode</label>
                <input
                  type="number"
                  className="form-control input-small"
                  id="pincode"
                  placeholder="Enter pincode"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="wardOffice" className="form-label label-small">Ward Office</label>
                <input
                  type="text"
                  className="form-control input-small"
                  id="wardOffice"
                  placeholder="Enter ward office"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="camp" className="form-label label-small">Camp</label>
                <input
                  type="text"
                  className="form-control input-small"
                  id="camp"
                  placeholder="Enter camp"
                />
              </div>
            </div>
            <h2 className="label-big">Construction Details</h2>
            <div className="divider-form"></div>
            <div className="row mb-3 mt-2">
              {/* Type */}
              <div className="col-md-2 ms-2">
                <h6 className="label-small">Type</h6>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="residential"
                  />
                  <label className="form-check-label checkbox-label" htmlFor="residential">
                    Residential
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="commercial"
                  />
                  <label className="form-check-label checkbox-label" htmlFor="commercial">
                    Commercial
                  </label>
                </div>
              </div>

              {/* Occupation Type */}
            {/* Occupation Type */}
<div className="col-md-6 occupation ms-4" style={{width:"auto" }}>
  <h6 className="label-small">Occupation Type</h6>
  <div className="custom-dropdown">
    <div className="dropdown-header" onClick={toggleDropdown}>
      <span className="option-inside-placeholder">{selectedOption}</span>
      {isOpen ? (
        <HiOutlineChevronUp size={18} className="dropdown-arrow" />
      ) : (
        <HiOutlineChevronDown size={18} className="dropdown-arrow" />
      )}
    </div>
    {isOpen && (
      <ul className="dropdown-options">
        {options.map((option, index) => (
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

              {/* Date */}
              <div className="col-md-4 ms-3">
                <h6 className="label-small input-box-size">Created Date</h6>
                <input
                  type="date"
                  className="form-control input-small"
                  id="datePicker"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FunctionalRequiremnt;
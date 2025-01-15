import React, { useState } from "react";
import "./FunctionalRequiremnt.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
const FunctionalRequiremnt = () => {
 
  const [formValues, setFormValues] = useState({
    wardGroup: "",
    contactNumber: "",
    pincode: "",
    ucNo: "",
    ownerName: "",
    detailedAddress: "",
    datePicker: "",
    camp: "",
    constructionType: {
      residential: false,
      commercial: false,
    },
  });

  const [selectedOption, setSelectedOption] = useState("Select Occupation Type");
  const [selecteddOption, setSelecteddOption] = useState("Choose nature of construction");
  const [isOpenOccupation, setIsOpenOccupation] = useState(false);
  const [isOpenConstruction, setIsOpenConstruction] = useState(false);

  const occupationOptions = [
    "Owner",
    "Rented",
    "Shop",
    "Company",
    "ATM",
    "Hospital",
    "Rank",
  ];

  const constructionOptions = [
    "Residential",
    "Commercial",
    "Industrial",
    "Mixed-Use",
    "Public",
    "Institutional",
    "Recreational",
    "Agricultural",
    "Retail",
    "Hospitality",
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleNumericInput = (e, limit = 999999) => {
    const { id, value } = e.target;
    let sanitizedValue = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
  
    // Prevent the value from starting with '0' unless the value is '0' itself
    if (sanitizedValue.startsWith("0") && sanitizedValue.length > 1) {
      sanitizedValue = sanitizedValue.slice(1); // Remove leading '0'
    }
  
    // If the value exceeds the limit, set it to the limit
    if (parseInt(sanitizedValue) > limit) {
      sanitizedValue = limit.toString();
    }
  
    setFormValues((prev) => ({
      ...prev,
      [id]: sanitizedValue,
    }));
  };
  

  const handleCheckboxToggle = (e) => {
    const { id, checked } = e.target;
    setFormValues((prev) => ({
      ...prev,
      constructionType: {
        ...prev.constructionType,
        [id]: checked,
      },
    }));
  };

  const toggleOccupationDropdown = () => {
    setIsOpenOccupation(!isOpenOccupation);
  };

  const toggleConstructionDropdown = () => {
    setIsOpenConstruction(!isOpenConstruction);
  };

  const handleSelect = (option, type) => {
    if (type === "occupation") {
      setSelectedOption(option);
    } else {
      setSelecteddOption(option);
    }
    setIsOpenOccupation(false);
    setIsOpenConstruction(false);
  };


  const [errors, setErrors] = useState({});


  const validateForm = () => {
    const newErrors = {};
    if (!formValues.contactNumber || formValues.contactNumber.length !== 10) {
      newErrors.contactNumber = "Please enter a valid 10-digit contact number.";
    }
    if (!formValues.pincode || formValues.pincode.length !== 6) {
      newErrors.pincode = "Please enter a valid 6-digit pincode.";
    }
    if (!formValues.wardGroup) {
      newErrors.wardGroup = "Ward Office Name is required.";
    }
    if (!formValues.ownerName) {
      newErrors.ownerName = "UC Owner Name is required.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill in all mandatory fields.");
    } else {
      console.log("Form Values:", formValues);
      toast.success("Form submitted successfully!");
    }
  };

  return (
    <div className="form-container">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4">
          <div className="mb-3">
  <label htmlFor="wardGroup" className="form-label label-small">
    Ward Office Name <span className="text-danger">*</span>
  </label>
  <input
    type="text"
    className={`form-control input-small ${errors.wardGroup ? "is-invalid" : ""}`}
    id="wardGroup"
    placeholder="Enter ward officer name"
    value={formValues.wardGroup}
    onChange={handleInputChange}
  />
  {errors.wardGroup && <span className="text-danger">{errors.wardGroup}</span>}
</div>


            <div className="mb-3">
              <label htmlFor="ucNo" className="form-label label-small">
                Unauthorized Construction Number (UC No.)
              </label>
              <input
                type="text"
                className="form-control input-small"
                id="ucNo"
                placeholder="YYMMDD-WARD NUM"
                style={{ backgroundColor: "#c2c2c2" }}
                value={formValues.ucNo}
                onChange={handleInputChange}
                disabled
              />
            </div>

            <div className="mb-3">
  <label htmlFor="ownerName" className="form-label label-small">
    UC Owner Name <span className="text-danger">*</span>
  </label>
  <input
    type="text"
    className={`form-control input-small ${errors.ownerName ? "is-invalid" : ""}`}
    id="ownerName"
    placeholder="Enter owner name"
    value={formValues.ownerName}
    onChange={handleInputChange}
  />
  {errors.ownerName && <span className="text-danger">{errors.ownerName}</span>}
</div>


            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label label-small">
                Contact Number <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control input-small ${
                  errors.contactNumber ? "is-invalid" : ""
                }`}
                id="contactNumber"
                placeholder="Enter contact number"
                value={formValues.contactNumber}
                onChange={handleInputChange}
              />
              {errors.contactNumber && (
                <span className="text-danger">{errors.contactNumber}</span>
              )}
            </div>
            <div className="occupation">
              <h6 className="label-small">Nature of Construction</h6>
              <div className="custom-dropdown">
                <div className="dropdown-header" onClick={toggleConstructionDropdown}>
                  <span className="option-inside-placeholder">
                    {selecteddOption}
                  </span>
                  {isOpenConstruction ? (
                    <HiOutlineChevronUp size={18} className="dropdown-arrow" />
                  ) : (
                    <HiOutlineChevronDown size={18} className="dropdown-arrow" />
                  )}
                </div>
                {isOpenConstruction && (
                  <ul className="dropdown-options">
                    {constructionOptions.map((option, index) => (
                      <li
                        key={index}
                        className="dropdown-option"
                        onClick={() => handleSelect(option, "construction")}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          

           
          </div>

          <div className="col-md-8">
            <h2 className="label-big">Address Details</h2>
            <div className="divider-form"></div>

            <div className="row">
              <div className="col-md-6 mb-3 mt-2">
                <label htmlFor="detailedAddress" className="form-label label-small">
                  Detailed Address
                </label>
                <textarea
                  className="form-control input-small text-box-height"
                  id="detailedAddress"
                  placeholder="Write a long text here"
                  rows="3"
                  value={formValues.detailedAddress}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-md-6">
                <div className="row mt-2">
                <div className=" col-md-6">
              <label htmlFor="pincode" className="form-label label-small">
                Pincode <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control input-small ${
                  errors.pincode ? "is-invalid" : ""
                }`}
                id="pincode"
                placeholder="Enter pincode"
                value={formValues.pincode}
                onChange={handleInputChange}
              />
              {errors.pincode && (
                <span className="text-danger">{errors.pincode}</span>
              )}
            </div>
                <div className="col-md-6">
                    <label htmlFor="camp" className="form-label label-small">
                      Camp
                    </label>
                    <input
                      type="text"
                      className="form-control input-small"
                      id="camp"
                      placeholder="Enter camp"
                      value={formValues.camp}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                </div>
              </div>
            </div>

            <h2 className="label-big">Construction Details</h2>
            <div className="divider-form"></div>

            <div className="row mb-3 mt-2">
              <div className="col-md-2">
                <h6 className="label-small">Type</h6>
                <div className="form-check spacing-bw-checkbox">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="residential"
                    checked={formValues.constructionType.residential}
                    onChange={handleCheckboxToggle}
                  />
                  <label className="form-check-label checkbox-label" htmlFor="residential">
                    Residential
                  </label>
                </div>
                <div className="form-check spacing-bw-checkbox">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="commercial"
                    checked={formValues.constructionType.commercial}
                    onChange={handleCheckboxToggle}
                  />
                  <label className="form-check-label checkbox-label" htmlFor="commercial">
                    Commercial
                  </label>
                </div>
              </div>

              <div className="col-md-4 ms-3 occupation">
                <h6 className="label-small">Occupation Type</h6>
                <div className="custom-dropdown">
                  <div className="dropdown-header" onClick={toggleOccupationDropdown}>
                    <span className="option-inside-placeholder">
                      {selectedOption}
                    </span>
                    {isOpenOccupation ? (
                      <HiOutlineChevronUp size={18} className="dropdown-arrow" />
                    ) : (
                      <HiOutlineChevronDown size={18} className="dropdown-arrow" />
                    )}
                  </div>
                  {isOpenOccupation && (
                    <ul className="dropdown-options">
                      {occupationOptions.map((option, index) => (
                        <li
                          key={index}
                          className="dropdown-option"
                          onClick={() => handleSelect(option, "occupation")}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="col-md-3 ms-3">
                <h6 className="label-small input-box-size">Created Date</h6>
                <input
                  type="date"
                  className="form-control input-small"
                  id="datePicker"
                  value={formValues.datePicker}
                  onChange={handleInputChange}
                />
              </div>
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

export default FunctionalRequiremnt;
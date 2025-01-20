
import React, { useState } from "react";
import "./FunctionalRequiremnt.css";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { useNavigate } from "react-router-dom"; 
const FunctionalRequiremnt = ({ onNext, onPrevious }) => {
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
  const [errors, setErrors] = useState({
    contactNumber: "",
    pincode: "",
  });
  const navigate = useNavigate(); 
  
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

    setErrors((prev) => ({
      ...prev,
      [id]: "",
    }));

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

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = { ...errors };

    
    if (!/^\d{10}$/.test(formValues.contactNumber)) {
      newErrors.contactNumber = "Contact number must be exactly 10 digits.";
      isValid = false;
    } else {
      newErrors.contactNumber = "";
    }

    
    if (!/^\d{6}$/.test(formValues.pincode)) {
      newErrors.pincode = "Pincode must be exactly 6 digits.";
      isValid = false;
    } else {
      newErrors.pincode = "";
    }

    setErrors(newErrors);

    if (isValid) {
      console.log("Form is valid"); 
      
      
      onNext(); 
    } else {
      console.log("Form is invalid"); 
    }
  };
  


  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4">
            <div className="mb-3">
              <label htmlFor="wardGroup" className="form-label label-small">
                Ward Office
              </label>
              <input
                type="text"
                className="form-control input-small"
                id="wardGroup"
                placeholder="Enter ward officer"
                value={formValues.wardGroup}
                onChange={handleInputChange}
              />
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
                UC Owner Name
              </label>
              <input
                type="text"
                className="form-control input-small"
                id="ownerName"
                placeholder="Enter owner name"
                value={formValues.ownerName}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label label-small">
                Contact Number <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control input-small ${errors.contactNumber ? "is-invalid" : ""}`}
                id="contactNumber"
                placeholder="Enter contact number"
                value={formValues.contactNumber}
                onChange={(e) => handleNumericInput(e, 10)}  
              />
              {errors.contactNumber && <div className="text-danger">{errors.contactNumber}</div>}
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
              <div className="mb-3 col-md-3 mt-2">
              <label htmlFor="pincode" className="form-label label-small">
                Pincode <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control input-small ${errors.pincode ? "is-invalid" : ""}`}
                id="pincode"
                placeholder="Enter pincode"
                value={formValues.pincode}
                onChange={(e) => handleNumericInput(e, 6)}  
              />
              {errors.pincode && <div className="text-danger">{errors.pincode}</div>}
            </div>



  <div className="mb-3 col-md-3 mt-2">
  <label htmlFor="pincode" className="form-label label-small">
    Camp  
  </label>
  <input
    type="text"
    className={`form-control input-small `}
    id="pincode"
    placeholder="Enter Camp"
    
   
  />
  
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
            <button type="submit" className="btn submit-btn-form">
              Save and Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FunctionalRequiremnt;
import React, { useEffect, useState } from "react";
import "./FunctionalRequiremnt.css";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { useNavigate } from "react-router-dom"; // for navigation
import { useTranslation } from "react-i18next"; 
import { useFormContext } from "../Context/FormContext";
const FunctionalRequiremnt = ({ onNext, onPrevious }) => {
  const { t } = useTranslation(); 
  const { formData, setFormData } = useFormContext();
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

  // Effect to set form values from the global state when coming back to this form
  useEffect(() => {
    if (formData?.form1) {
      setFormValues(formData.form1); // Set form values from the global state if available
    }
  }, [formData]); // Only trigger when formData changes

  const [errors, setErrors] = useState({
    contactNumber: "",
    pincode: "",
  });
  
  const navigate = useNavigate();
  
  const [selectedOption, setSelectedOption] = useState(t("form.selectOccupationType"));
  const [selecteddOption, setSelecteddOption] = useState(t("form.chooseNatureOfConstruction"));
  const [isOpenOccupation, setIsOpenOccupation] = useState(false);
  const [isOpenConstruction, setIsOpenConstruction] = useState(false);

  const occupationOptions = [
    t("form.owner"),
    t("form.rented"),
    t("form.shop"),
    t("form.company"),
    t("form.atm"),
    t("form.hospital"),
    t("form.rank"),
  ];
  
  const constructionOptions = [
    t("form.residential"),
    t("form.commercial"),
    t("form.industrial"),
    t("form.mixedUse"),
    t("form.public"),
    t("form.institutional"),
    t("form.recreational"),
    t("form.agricultural"),
    t("form.retail"),
    t("form.hospitality"),
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
      newErrors.contactNumber = t("form.contactNumberError");
      isValid = false;
    } else {
      newErrors.contactNumber = "";
    }
 
    if (!/^\d{6}$/.test(formValues.pincode)) {
      newErrors.pincode = t("form.pincodeError");
      isValid = false;
    } else {
      newErrors.pincode = "";
    }

    setErrors(newErrors);

    if (isValid) {
      setFormData((prev) => ({
        ...prev,
        form1: formValues, // Save current form's data in global state
      }));
      onNext(); // Navigate to the next form
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4">
            <div className="mb-3">
              <label htmlFor="wardGroup" className="form-label label-small">
                {t("form.wardOffice")}
              </label>
              <input
                type="text"
                className="form-control input-small"
                id="wardGroup"
                placeholder={t("form.enterWardOffice")}
                value={formValues.wardGroup}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="ucNo" className="form-label label-small">
                {t("form.unauthorizedConstructionNumber")}
              </label>
              <input
                type="text"
                className="form-control input-small"
                id="ucNo"
                placeholder={t("form.datePlaceholder")}
                style={{ backgroundColor: "#c2c2c2" }}
                value={formValues.ucNo}
                onChange={handleInputChange}
                disabled
              />
            </div>

            <div className="mb-3">
              <label htmlFor="ownerName" className="form-label label-small">
                {t("form.ucOwnerName")}
              </label>
              <input
                type="text"
                className="form-control input-small"
                id="ownerName"
                placeholder={t("form.enterOwnerName")}
                value={formValues.ownerName}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label label-small">
                {t("form.contactNumber")} <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control input-small ${errors.contactNumber ? "is-invalid" : ""}`}
                id="contactNumber"
                placeholder={t("form.enterContactNumber")}
                value={formValues.contactNumber}
                onChange={(e) => handleNumericInput(e, 10)}  
              />
              {errors.contactNumber && <div className="text-danger">{errors.contactNumber}</div>}
            </div>

            <div className="occupation">
              <h6 className="label-small">{t("form.natureOfConstruction")}</h6>
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
            <h2 className="label-big">{t("form.addressDetails")}</h2>
            <div className="divider-form"></div>

            <div className="row">
              <div className="col-md-6 mb-3 mt-2">
                <label htmlFor="detailedAddress" className="form-label label-small">
                  {t("form.detailedAddress")}
                </label>
                <textarea
                  className="form-control input-small text-box-height"
                  id="detailedAddress"
                  placeholder={t("form.addressPlaceholder")}
                  rows="3"
                  value={formValues.detailedAddress}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3 col-md-3 mt-2">
                <label htmlFor="pincode" className="form-label label-small">
                  {t("form.pincode")}<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className={`form-control input-small ${errors.pincode ? "is-invalid" : ""}`}
                  id="pincode"
                  placeholder={t("form.enterPincode")}
                  value={formValues.pincode}
                  onChange={(e) => handleNumericInput(e, 6)}  
                />
                {errors.pincode && <div className="text-danger">{errors.pincode}</div>}
              </div>
              <div className="mb-3 col-md-3 mt-2">
            <label htmlFor="pincode" className="form-label label-small">
            {t("form.camp")} 
            </label>
            <input
              type="text"
              className={`form-control input-small `}
              id="pincode"
              placeholder={t("form.enterCamp")}
            /> 
            </div>

            </div>
            <h2 className="label-big">{t("form.constructionDetails")}</h2>
            <div className="divider-form"></div>
            <button type="submit" className="btn submit-btn-form" onClick={handleSubmit}>
              {t("form.submit")}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FunctionalRequiremnt;

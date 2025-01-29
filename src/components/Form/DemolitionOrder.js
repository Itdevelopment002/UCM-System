import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import { FormGroup, Label, Input } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";
import "./FunctionalRequiremnt.css"; 
import { useFormContext } from "../Context/FormContext";

const DemolitionOrder = ({ onNext, onPrevious }) => {
    const { formData, setFormData } = useFormContext();
    const navigate = useNavigate(); 
    const { t } = useTranslation(); 
    const [formValues, setFormValues] = useState({
        demolitionDate: "",
        demolitionTime: "",
        demolitionDocument: "",
        demolitionExpenditure: "",
        constructionNumber: "",
        policeStationName: "",
        policeManpowerDetails: "",
        wardOffice: "",
    });

    useEffect(() => {
        if (formData?.form4) {
            setFormValues(formData.form4); // Set form values from the global state if available
        }
    }, [formData]); // Only trigger when formData changes

    const [errors, setErrors] = useState({});
    const [fileName, setFileName] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormValues((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormValues((prevValues) => ({
                ...prevValues,
                demolitionDocument: file,
            }));
        }
    };

    // Handling form submission and validations
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        let isValid = true;
        const newErrors = {}; // Object to hold validation errors

        // Validation for Demolition Date
        if (!formValues.demolitionDate) {
            newErrors.demolitionDate = t("form.demolitionDate") + " " + t("form.isRequired");
            isValid = false;
        }

        // Validation for Demolition Time
        if (!formValues.demolitionTime) {
            newErrors.demolitionTime = t("form.demolitionTime") + " " + t("form.isRequired");
            isValid = false;
        }

        // Validation for Demolition Document (File upload)
        if (!formValues.demolitionDocument) {
            newErrors.demolitionDocument = t("form.demolitionDocument") + " " + t("form.isRequired");
            isValid = false;
        } else {
            const file = formValues.demolitionDocument;
            const validTypes = ["application/pdf", "application/msword"];
            const maxSize = 2 * 1024 * 1024; // 2MB

            if (!validTypes.includes(file.type)) {
                newErrors.demolitionDocument = t("form.uploadDocs") + " " + t("form.invalidFileType");
                isValid = false;
            }

            if (file.size > maxSize) {
                newErrors.demolitionDocument = t("form.uploadDocs") + " " + t("form.exceedsSize");
                isValid = false;
            }
        }

        // Validation for Construction Number
        if (!formValues.constructionNumber) {
            newErrors.constructionNumber = t("form.constructionNumber") + " " + t("form.isRequired");
            isValid = false;
        }

        // Validation for Police Station Name
        if (!formValues.policeStationName) {
            newErrors.policeStationName = t("form.policeStationName") + " " + t("form.isRequired");
            isValid = false;
        }

        // Set the errors in the state
        setErrors(newErrors);

        // If the form is valid, save the data and move to the next step
        if (isValid) {
            setFormData((prevData) => ({
                ...prevData,
                form4: formValues,
            }));
            console.log('Form submitted successfully, proceeding to next step...');
            onNext(); // Proceed to the next step in the form
        } else {
            console.log('Form validation failed. Please fix the errors.');
        }
    };

    const toggleDropdown = () => setDropdownOpen((prev) => !prev);

    const selectPoliceStation = (station) => {
        setFormValues((prevData) => ({ ...prevData, policeStationName: station }));
        setDropdownOpen(false);
    };

    return (
        <div className="form-container">
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <div className="row">
                    {/* Demolition Date, Time and Document */}
                    <div className="col-md-4">
                        <FormGroup>
                            <Label htmlFor="demolitionDate" className="form-label label-small">
                                {t("form.demolitionDate")} <span className="text-danger">*</span>
                            </Label>
                            <Input
                                type="date"
                                id="demolitionDate"
                                value={formValues.demolitionDate}
                                onChange={handleInputChange}
                                className={`form-control ${errors.demolitionDate ? "is-invalid" : ""}`}
                            />
                            {errors.demolitionDate && <div className="text-danger">{errors.demolitionDate}</div>}
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup>
                            <Label htmlFor="demolitionTime" className="form-label label-small">
                                {t("form.demolitionTime")} <span className="text-danger">*</span>
                            </Label>
                            <Input
                                type="time"
                                id="demolitionTime"
                                value={formValues.demolitionTime}
                                onChange={handleInputChange}
                                className={`form-control ${errors.demolitionTime ? "is-invalid" : ""}`}
                            />
                            {errors.demolitionTime && <div className="text-danger">{errors.demolitionTime}</div>}
                        </FormGroup>
                    </div>

                    <div className="mb-3 col-md-4">
                        <label htmlFor="hardCopyUpload" className="form-label label-small">
                            {t("form.demolitionDocument")}  <span className="text-danger">*</span>
                        </label>
                        <div className="upload-container">
                            <label
                                htmlFor="hardCopyUpload"
                                className={`form-control input-small upload-label ${errors.demolitionDocument ? "is-invalid" : ""}`}
                                style={{ cursor: "pointer" }}
                            >
                                <i className="fas fa-upload upload-icon"></i>
                                <span className="filename-gap">
                                    {formValues.demolitionDocument ? formValues.demolitionDocument.name : t("form.uploadDocs")}
                                </span>
                            </label>
                            <input
                                type="file"
                                id="hardCopyUpload"
                                onChange={handleFileChange}
                                className="form-control input-small d-none"
                                accept=".doc, .pdf"
                            />
                        </div>
                        {errors.demolitionDocument && <small className="text-danger">{errors.demolitionDocument}</small>}
                    </div>
                </div>

                <div className="row">
                    {/* Demolition Expenditure */}
                    <div className="col-md-8">
                        <FormGroup>
                            <Label htmlFor="demolitionExpenditure" className="form-label label-small">
                                {t("form.demolitionExpenditureDetails")}
                            </Label>
                            <Input
                                type="textarea"
                                id="demolitionExpenditure"
                                value={formValues.demolitionExpenditure}
                                onChange={handleInputChange}
                                placeholder={t("form.DDexpenditureplaceholder")}
                                className="form-control"
                            />
                        </FormGroup>
                    </div>
                </div>

                <div className="row">
                    {/* Construction Number */}
                    <div className="col-md-4">
                        <FormGroup>
                            <Label htmlFor="constructionNumber" className="form-label label-small">
                                {t("form.constructionNumber")} <span className="text-danger">*</span>
                            </Label>
                            <div className="input-group">
                                <Input
                                    type="search"
                                    id="constructionNumber"
                                    value={formValues.constructionNumber}
                                    onChange={handleInputChange}
                                    placeholder={t("form.constructionNumberPlaceholder")}
                                    className={`form-control ${errors.constructionNumber ? "is-invalid" : ""}`}
                                />
                                <span className="input-group-text d-flex align-items-center">
                                    <i className="fa fa-search"></i>
                                </span>
                            </div>
                            {errors.constructionNumber && <div className="text-danger">{errors.constructionNumber}</div>}
                        </FormGroup>
                    </div>

                    {/* Police Station Dropdown */}
                    <div className="col-md-4 mb-3">
                        <label htmlFor="policeStationName" className="form-label label-small">
                            {t("form.policeStationName")} <span className="text-danger">*</span>
                        </label>
                        <div className="custom-dropdown">
                            <div
                                className="dropdown-header"
                                onClick={toggleDropdown}
                                role="button"
                            >
                                <span className="option-inside-placeholder">
                                    {formValues.policeStationName || t("form.selectPoliceStation")}
                                </span>
                                {dropdownOpen ? (
                                    <HiOutlineChevronUp size={18} className="dropdown-arrow" />
                                ) : (
                                    <HiOutlineChevronDown size={18} className="dropdown-arrow" />
                                )}
                            </div>
                            {dropdownOpen && (
                                <ul className="dropdown-options">
                                    {["stationA", "stationB", "stationC"].map((station) => (
                                        <li
                                            key={station}
                                            className="dropdown-option"
                                            onClick={() => selectPoliceStation(t(`form.${station}`))}
                                        >
                                            {t(`form.${station}`)}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        {errors.policeStationName && (
                            <div className="text-danger">{errors.policeStationName}</div>
                        )}
                    </div>

                    {/* Police Manpower Details */}
                    <div className="col-md-4">
                        <FormGroup>
                            <Label htmlFor="policeManpowerDetails" className="form-label label-small">
                                {t("form.policeManpowerDetails")}
                            </Label>
                            <Input
                                type="text"
                                id="policeManpowerDetails"
                                value={formValues.policeManpowerDetails}
                                onChange={handleInputChange}
                                placeholder={t("form.enterNamePlaceholder")}
                                className="form-control"
                            />
                        </FormGroup>
                    </div>
                </div>

                <div className="row">
                    {/* Ward Office */}
                    <div className="col-md-4">
                        <FormGroup>
                            <Label htmlFor="wardOffice" className="form-label label-small">
                                {t("form.wardOffice")}
                            </Label>
                            <div className="input-group">
                                <Input
                                    type="text"
                                    id="wardOffice"
                                    value={formValues.wardOffice}
                                    onChange={handleInputChange}
                                    placeholder={t("form.wardOfficeName")}
                                    className="form-control"
                                    style={{ backgroundColor: "#EEEEEE" }}
                                />
                                <span className="input-group-text" style={{ backgroundColor: "#EEEEEE" }}>
                                    <i className="fas fa-pencil" style={{ color: "#010100" }}></i>
                                </span>
                            </div>
                        </FormGroup>
                    </div>
                </div>

                <button type="submit" className="btn submit-btn-form">
                    {t("form.saveAndNext")}
                </button>
            </form>
        </div>
    );
};

export default DemolitionOrder;

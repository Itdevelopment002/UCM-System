import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from "react-toastify";
import Modal from "react-modal";
import "react-toastify/dist/ReactToastify.css";
import "./FunctionalRequiremnt.css";
import { Link } from "react-router-dom";
import { useFormContext } from "../Context/FormContext";

Modal.setAppElement("#root");

const Remark = ({ onNext, onPrevious }) => {
  const { formData, setFormData } = useFormContext();
  const { t } = useTranslation();

  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    remark: "",
  });

  // UseEffect to load initial form data from global form state
  useEffect(() => {
    if (formData?.form5) {
      setFormValues(formData.form5); // Set form values from global state if available
    }
  }, [formData]);

  // UseEffect to update form data in the global state whenever formValues change
  useEffect(() => {
    if (formValues.remark) {
      setFormData((prevData) => ({
        ...prevData,
        form5: formValues, // Update form5 in global state whenever formValues change
      }));
    }
  }, [formValues, setFormData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formValues.remark.trim()) {
      newErrors.remark = t("form.remarkError");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Update form data in the global state
      setFormData((prevData) => ({
        ...prevData,
        form5: formValues,
      }));

      console.log("Form submitted successfully, proceeding to next step...");
      setIsModalOpen(true); // Open the modal on successful submission

      // Proceed to next step
      onNext(); 
    } else {
      console.log("Form validation failed. Please fix the errors.");
      toast.error(t("form.validationError")); // Show error toast if validation fails
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="remark-form">
        {/* Remark Field */}
        <div className="col mb-3">
          <div className="col-md-4 mt-3">
            <label htmlFor="remark" className="form-label label-small">
              {t("form.remark")} <span className="text-danger">*</span>
            </label>
            <textarea
              id="remark"
              name="remark"
              className={`form-control input-small text-box-height ${
                errors.remark ? "is-invalid" : ""
              }`}
              rows="4"
              placeholder={t("form.remarkPlaceholder")}
              value={formValues.remark}
              onChange={handleChange}
            ></textarea>
            {errors.remark && (
              <small className="text-danger">{errors.remark}</small>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn submit-btn-form">
          {t("form.submit")}
        </button>
      </form>

      {/* Toast Container to display the notifications */}
      <ToastContainer />

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Form Submission Success"
        className="modal-content-final d-flex flex-md-column"
        overlayClassName="modal-overlay"
      >
        <h5 className="modal-title ">{t("form.submitSuccess")}</h5>
        <p className="model-text">{t("form.thankMessage")}</p>
        <div className="modal-footer mt-0 " style={{ justifyContent: "center" }}>
          <div className="btn-at-footer">
            
            <Link to="/">
              <button className="confirm-btn">{t("form.ok")}</button>
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Remark;

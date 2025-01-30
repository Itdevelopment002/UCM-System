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
  const [formValues, setFormValues] = useState({
    remark: "", 
  });
  
  const { formData, setFormData } = useFormContext();
  const { t } = useTranslation();

  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (formData?.form5) {
      setFormValues(formData.form5); 
    }
  }, [formData]);

  useEffect(() => {
    if (formValues.remark) {
      setFormData((prevData) => ({
        ...prevData,
        form5: formValues, 
      }));
    }
  }, [formValues, setFormData]);

  const validateForm = () => {
    const newErrors = {};
  
    if (!formValues.remark || !formValues.remark.trim()) {  
      newErrors.remark = t("form.remarkError");
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setFormData((prevData) => ({
        ...prevData,
        form5: formValues,
      }));

      setIsModalOpen(true); 
      onNext(); 
    } else {
      toast.error(t("form.validationError")); 
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="remark-form">
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

        <button type="submit" className="btn submit-btn-form">
          {t("form.submit")}
        </button>
      </form>

      <ToastContainer />

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

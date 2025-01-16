import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Modal from "react-modal";
import "react-toastify/dist/ReactToastify.css";
import "./FunctionalRequiremnt.css";

// For accessibility
Modal.setAppElement("#root");

const Remark = () => {
  const [formData, setFormData] = useState({
    natureOfConstruction: "",
    remark: "",
  });

  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate Remark
    if (!formData.remark.trim()) {
      newErrors.remark = "Remark is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form Data Submitted:", formData);
      toast.success("Form submitted successfully!"); // Success toast
      setIsModalOpen(true); // Open modal on successful submission
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="remark-form">
        {/* Remark Field */}
        <div className="col mb-3">
          <div className="col-md-4 mt-3">
            <label htmlFor="remark" className="form-label label-small">
              Remark <span className="text-danger">*</span>
            </label>
            <textarea
              id="remark"
              name="remark"
              className={`form-control input-small text-box-height ${
                errors.remark ? "is-invalid" : ""
              }`}
              rows="4"
              placeholder="Write a long text here"
              value={formData.remark}
              onChange={handleChange}
            ></textarea>
            {errors.remark && <small className="text-danger">{errors.remark}</small>}
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn submit-btn-form">
          Submit
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
        <h2 style={{fontWeight:"100"}}>Form Submitted Successfully!<br/> (this is dummy modal) </h2>
       <div style={{display:"flex", flexDirection:"row", gap:"10px"}}>
       <button onClick={closeModal} className="" style={{backgroundColor:"#0080008f", color:"black", height:"50px", width:"100px", fontSize:"24px", fontWeight:"bold" , border:"1px solid grey"}}>
          OK
        </button>
        <button onClick={closeModal} className="" style={{backgroundColor:"#ff0000b5", color:"black" , height:"50px", width:"100px", fontSize:"24px", fontWeight:"bold"  , border:"1px solid grey"}}>
          Close
        </button>
       </div>
      </Modal>
    </div>
  );
};

export default Remark;

import React, { useState } from "react";
import "./FunctionalRequiremnt.css";

const CourtOrder = () => {
  const [formValues, setFormValues] = useState({
    courtInvolvement: "",
    courtOrderNumber: "",
    edDate: "",
    courtName: "",
    typeOfCourt: "",
    petitionerName: "",
    petitionerMobile: "",
    petitionerAddress: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleRadioChange = (e) => {
    setFormValues((prev) => ({
      ...prev,
      courtInvolvement: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formValues);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* Court Matter Involvement */}
        <div className="row">
          <div className="col-md-12 mb-3">
            <label className="label-small">Court Matter Involvement</label>
            <div style={{ display: "flex", gap: "30px" }}>
              <div>
                <input
                  type="radio"
                  id="courtInvolvementYes"
                  name="courtInvolvement"
                  value="Yes"
                  onChange={handleRadioChange}
                />
                <label htmlFor="courtInvolvementYes" className="checkbox-label">
                  Yes
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="courtInvolvementNo"
                  name="courtInvolvement"
                  value="No"
                  onChange={handleRadioChange}
                />
                <label htmlFor="courtInvolvementNo" className="checkbox-label">
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="courtOrderNumber" className="form-label label-small">
              Court Order Number
            </label>
            <input
              type="text"
              className="form-control input-small"
              id="courtOrderNumber"
              placeholder="Enter court order number"
              value={formValues.courtOrderNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="edDate" className="form-label label-small">
              ED Date
            </label>
            <input
              type="date"
              className="form-control input-small"
              id="edDate"
              value={formValues.edDate}
              onChange={handleInputChange}
            />
          </div>
          <div className=" col-md-4 mb-3">
              <label htmlFor="hardCopyUpload" className="form-label label-small">
               Court Order
              </label>
              <div className="upload-container">
                <label htmlFor="hardCopyUpload" className="form-control input-small upload-label" style={{cursor:"pointer"}}>
                  <i className="fas fa-upload upload-icon input-small  "></i> Upload Documents
                </label>
                <input
                  type="file"
                  className="form-control input-small d-none "
                  id="hardCopyUpload"
                  accept="image/*"
                />
              </div>
            </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="courtName" className="form-label label-small">
              Court Name
            </label>
            <input
              type="text"
              className="form-control input-small"
              id="courtName"
              placeholder="Enter court name"
              value={formValues.courtName}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="typeOfCourt" className="form-label label-small">
              Type of Court
            </label>
            <select
              id="typeOfCourt"
              className="form-control input-small"
              value={formValues.typeOfCourt}
              onChange={handleInputChange}
            >
              <option value="">Choose court</option>
              <option value="District Court">District Court</option>
              <option value="High Court">High Court</option>
              <option value="Supreme Court">Supreme Court</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="petitionerName" className="form-label label-small">
              Petitioner Name
            </label>
            <input
              type="text"
              className="form-control input-small"
              id="petitionerName"
              placeholder="Enter petitioner name"
              value={formValues.petitionerName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="petitionerMobile" className="form-label label-small">
              Petitioner Mobile Number
            </label>
            <input
              type="text"
              className="form-control input-small"
              id="petitionerMobile"
              placeholder="Enter mobile number"
              value={formValues.petitionerMobile}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="petitionerAddress" className="form-label label-small">
              Petitioner Address
            </label>
            <textarea
              id="petitionerAddress"
              rows="3"
              className="form-control input-small"
              placeholder="Enter petitioner address"
              value={formValues.petitionerAddress}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>

        <button type="submit" className="btn submit-btn-form">
          Save and Submit
        </button>
      </form>
    </div>
  );
};

export default CourtOrder;

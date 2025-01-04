import React from "react";

const CourtOrder = () => {
  return (
    <form className="p-4 align-items-center justify-content-center mx-auto">
    
      <div className="form-group">
        <label className="col-form-label">Court Matter Involvement</label>
        <div className="row">
          <div className="col-sm-9 d-flex flex-row mb-4">
            <div className="form-check">
              <input
                type="radio"
                id="courtInvolvementYes"
                name="courtInvolvement"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="courtInvolvementYes">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="courtInvolvementNo"
                name="courtInvolvement"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="courtInvolvementNo">
                No
              </label>
            </div>
          </div>
        </div>
      </div>

      
      <div className="row">
        <div className="col-md-4">
          <label htmlFor="courtOrderNumber">Court Order Number</label>
          <input
            type="text"
            className="form-control"
            id="courtOrderNumber"
            placeholder="Enter court order number"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="edDate">ED Date</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="edDate"
              placeholder="DD/MM/YYYY"
            />
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="fas fa-calendar-alt"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="courtOrder">Court Order</label>
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="courtOrder"
            />
            <label className="custom-file-label" htmlFor="courtOrder">
              Upload document
            </label>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-4">
          <label htmlFor="courtName">Court Name</label>
          <input
            type="text"
            className="form-control"
            id="courtName"
            placeholder="Enter court name"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="typeOfCourt">Type of Court</label>
          <select className="form-control" id="typeOfCourt">
            <option>Choose court</option>
            <option>District Court</option>
            <option>High Court</option>
            <option>Supreme Court</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="petitionerName">Petitioner Name</label>
          <input
            type="text"
            className="form-control"
            id="petitionerName"
            placeholder="Enter petitioner name"
          />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-4">
          <label htmlFor="petitionerMobile">Petitioner Mobile Number</label>
          <input
            type="text"
            className="form-control"
            id="petitionerMobile"
            placeholder="Enter mobile number"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="petitionerAddress">Petitioner Address</label>
          <textarea
            className="form-control"
            id="petitionerAddress"
            rows="3"
            placeholder="Write a long text here"
          ></textarea>
        </div>
      </div>
    </form>
  );
};

export default CourtOrder;

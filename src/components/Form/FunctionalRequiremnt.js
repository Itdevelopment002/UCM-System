import React from 'react';
import './FunctionalRequiremnt.css';

const FunctionalRequiremnt = () => {
  return (
    <div className="form-container">
      <form>
        <div className="row">
          {/* First Column */}
          <div className="col-md-4">
            <div className="mb-3">
              <label htmlFor="wardGroup" className="form-label label-small">Ward Group</label>
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
                className="form-control input-small"
                id="ucNo"
                placeholder="Enter UC No."
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
                className="form-control input-small"
                id="detailedAddress"
                placeholder="Write a long text here"
                rows="2"
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
              <div className="col-md-2">
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
              <div className="col-md-6 occupation">
                <h6 className="label-small">Occupation Type</h6>
                <select className="form-select select-style" name="occupationType" id="occupationType">
                  <option value="" disabled selected>
                    Select Occupation Type
                  </option>
                  <option  value="owner">Owner</option>
                  <option value="rented">Rented</option>
                  <option value="shop">Shop</option>
                  <option value="owner">Company</option>
                  <option value="rented">ATM</option>

                  <option value="shop">Hospital</option>
                  <option value="shop">Rank</option>
                </select>
              </div>

              {/* Date */}
              <div className="col-md-4">
                <h6 className="label-small">Created Date</h6>
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
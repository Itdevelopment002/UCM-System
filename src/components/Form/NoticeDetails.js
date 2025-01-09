import React from "react";
import "./FunctionalRequiremnt.css";

const NoticeDetails = () => {
  return (
    <div className="form-container">
      <form>
        <div className="row d-flex align-items-center">
          {/* First Column */}
          <div className="col-md-5">
            <div className="mb-3">
              <label htmlFor="occupationType" className="form-label label-small">Generated Notices</label>
              <select className="form-select select-style" name="occupationType" id="occupationType"  placeholder="Enter ward group">
                <option value="" disabled selected>
                  Generated Notices
                </option>
                <option value="owner">Owner</option>
                <option value="rented">Rented</option>
                <option value="shop">Shop</option>
              </select>
            </div>
          </div>

          {/* Second Column */}
          <div className="col-md-5">
            <div className="mb-3">
              <label htmlFor="datePicker" className="form-label label-small">Date</label>
              <input
                type="date"
                className="form-control input-small"
                id="datePicker"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NoticeDetails;

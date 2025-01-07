import React from 'react';

const NoticeDetails = () => {
  return (
    <div style={{ padding: '10px', fontFamily: "poppins", fontWeight: "600", fontSize: "13px", backgroundColor: "white" }}>
      <form>
        <div className="row d-flex align-items-center">
          {/* First Column */}
          <div className="col-md-5">
            <div className="mb-3">
              <label htmlFor="occupationType" className="form-label">Generated Notices</label>
              <select className="form-select" name="occupationType" id="occupationType" style={{ fontSize: "12px" }}>
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
            {/* Date */}
            <div className="mb-3">
              <label htmlFor="datePicker" className="form-label">Date</label>
              <input
                style={{ fontSize: "12px" }}
                type="date"
                className="form-control"
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

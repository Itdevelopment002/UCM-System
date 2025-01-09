import React from 'react';
import './FunctionalRequiremnt.css'; // Ensure the path is correct

const DemolitionOrder = () => {
  return (
    <div className="form-container">
      <form>
        <div className="row">
          {/* First Column */}
          <div className="col-md-4">
            <div className="mb-3">
              <label htmlFor="demolitionTarget" className="form-label label-small">Demolition Target</label>
              <input
                type="text"
                className="form-control input-small"
                id="demolitionTarget"
                placeholder="Enter name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="demolitionDate" className="form-label label-small">Demolition Date</label>
              <input
                type="date"
                className="form-control input-small"
                id="demolitionDate"
                placeholder="dd-mm-yyyy"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="demolitionTime" className="form-label label-small">Demolition Time</label>
              <input
                type="time"
                className="form-control input-small"
                id="demolitionTime"
              />
            </div>
          </div>

          {/* Second Column */}
          <div className="col-md-8">
            <h2 className="label-small">Additional Information</h2>
            <div className="divider"></div>
            <div className="mb-3">
              <label htmlFor="demolitionDocument" className="form-label label-small">Demolition Document</label>
              <input
                type="file"
                className="form-control input-small"
                id="demolitionDocument"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="demolitionExpenditure" className="form-label label-small">Demolition Expenditure Details</label>
              <textarea
                className="form-control input-small"
                id="demolitionExpenditure"
                placeholder="Write a long text here"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="policeStationName" className="form-label label-small">Police Station Name</label>
              <select
                className="form-select select-style"
                id="policeStationName"
              >
                <option>Select the police station name</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="protectionNumber" className="form-label label-small">Protection Number</label>
              <input
                type="text"
                className="form-control input-small"
                id="protectionNumber"
                placeholder="Enter contact number"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DemolitionOrder;

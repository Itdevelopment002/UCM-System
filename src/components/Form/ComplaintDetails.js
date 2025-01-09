import React from "react";
import map from "../../images/map.png";
import locate from "../../images/location-icon.png";
import iconbg from "../../images/icon-bg.png";
import "./FunctionalRequiremnt.css";

const ComplaintDetails = () => {
  return (
    <div className="form-container">
      <form>
        <div className="row">
          {/* Left Column - Complaint Details */}
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="complainantName" className="form-label label-small">Complaint Received from (Name)</label>
              <input
                type="text"
                className="form-control input-small"
                id="complainantName"
                placeholder="Enter name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="complaintDescription" className="form-label label-small">Complaint Description</label>
              <textarea
                className="form-control input-small"
                id="complaintDescription"
                rows="4"
                placeholder="Write a long text here"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="complainantContact" className="form-label label-small">Complainant Contact Details</label>
              <input
                type="text"
                className="form-control input-small"
                id="complainantContact"
                placeholder="Enter contact number"
              />
            </div>

            
          </div>

          {/* Right Column - Attachments and Location */}
          <div className="col-md-6">
            {/* Complaint Attachments */}
            <div className="mb-3">
              <label className="form-label label-big">Complaint Attachments</label>
              <div className="divider-form"></div>
              <div className="mb-3">
                <label htmlFor="uploadPhotos" className="form-label label-small">Photos</label>
                <input
                  type="file"
                  className="form-control input-small"
                  id="uploadPhotos"
                  accept="image/*"
                />
              </div>
              <div>
                <label htmlFor="uploadVideos" className="form-label label-small">Videos</label>
                <input
                  type="file"
                  className="form-control input-small"
                  id="uploadVideos"
                  accept="video/*"
                />
              </div>
            </div>

            {/* Location Details */}
            <div className="mt-4">
              <label className="form-label label-big fw-bold">Location Details</label>
              <div className="divider-form"></div>
              <div className="border p-3 rounded">
                <div className="row">
                  <div className="col mt-1">
                    <img
                      src={map}
                      alt="Map location"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col mt-2">
                    <div className="row mb-3">
                      <div className="col d-flex align-items-center">
                        <img src={locate} alt="location" className="img-fluid rounded" />
                        <div className="col d-flex align-items-center">
                          <span className="me-2">
                            <i className="bi bi-geo-alt-fill text-primary"></i>
                          </span>
                          <strong className="text-secondary fw-light">Delhi</strong>
                        </div>
                        <div className="position-relative" style={{ top: "5%" }}>
                          <img src={iconbg} alt="signup" className="img-fluid rounded" />
                          <i className="fas fa-paper-plane text-white position-absolute" style={{ top: "18%", left: "21%", fontSize: "1.4rem" }}></i>
                        </div>
                      </div>
                    </div>
                    <p className="mb-1 text-secondary fw-bold">Latitude <strong className="text-secondary fw-light">-28.7041</strong></p>
                    <p className="text-secondary fw-bold">Longitude <strong className="text-secondary fw-light">-77.1025</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ComplaintDetails;

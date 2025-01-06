import React from "react";
import map from "../../images/map.png";
import locate from "../../images/location-icon.png";
import iconbg from "../../images/icon-bg.png";

function ComplaintDetails() {
  const latitude = -24.123124;
  const longitude = -24.123124;

  // OpenStreetMap Static Map URL
  const mapUrl = `https://static-maps.yandex.ru/1.x/?ll=${longitude},${latitude}&z=14&l=map&size=400,200`;

  return (
    <div className="container mx-auto" style={{ padding: '10px', fontFamily: "poppins", fontWeight: "600", fontSize: "13px", backgroundColor: "white" }}>
      <form>
        <div className="row">
          {/* Left Side - Complaint Details */}
          <div className="col-md-6">
            <div className="form-group mb-4">
              <label htmlFor="complainantName" className="form-label text-dark">Complaint Received from (Name)</label>
              <input
                type="text"
                className="form-control text-secondary"
                id="complainantName"
                placeholder="Enter name"
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="complaintDescription" className="form-label text-dark">Complaint Description</label>
              <textarea
                className="form-control text-secondary"
                id="complaintDescription"
                rows="4"
                placeholder="Write a long text here"
              ></textarea>
            </div>

            <div className="form-group mb-4">
              <label htmlFor="complainantContact" className="form-label text-dark">Complainant Contact Details</label>
              <input
                type="text"
                className="form-control text-secondary"
                id="complainantContact"
                placeholder="Enter contact number"
              />
            </div>
          </div>

          {/* Right Side - Attachments and Location */}
          <div className="col-md-6">
            {/* Complaint Attachments */}
            <div className="form-group">
              <label className="form-label mb-2 text-dark" style={{ fontSize: "16px" }}>Complaint Attachments</label>
              <div className="mb-3" style={{ height: "2px", width: "auto", background: "#5038ED" }}></div>
              <div className="mb-3">
                <label htmlFor="uploadPhotos" className="form-label text-dark">
                  Photos
                </label>
                <input
                  type="file"
                  className="form-control text-secondary"
                  id="uploadPhotos"
                  accept="image/*"
                />
              </div>
              <div>
                <label htmlFor="uploadVideos" className="form-label text-dark">
                  Videos
                </label>
                <input
                  type="file"
                  className="form-control text-secondary"
                  id="uploadVideos"
                  accept="video/*"
                />
              </div>
            </div>

            {/* Location Details */}
            <div className="form-group mt-4">
              <label className="form-label text-dark fw-bold" style={{ fontSize: "16px" }}>Location Details</label>
              <div className="mb-3" style={{ height: "2px", width: "auto", background: "#5038ED" }}></div>
              <div className="border p-3 rounded">
                <div className="row">
                  <div className="col mt-1">
                    <img
                      src={map}
                      alt="Map location"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="mt-2 col">
                    <div className="row mb-3">
                      <div className="col d-flex align-items-center">
                        <img src={locate} alt="location" className="img-fluid rounded" />
                        <div className="col d-flex align-items-center">
                          <span className="me-2">
                            <i className="bi bi-geo-alt-fill text-primary"></i>
                          </span>
                          <strong className="text-secondary fw-light" style={{ fontSize: "20px" }}>Delhi</strong>
                        </div>
                        <div className="position-relative"style={{top: "5%"}} >
                          <img src={iconbg} alt="signup" className="img-fluid rounded"/>
                          <i className="fas fa-paper-plane text-white position-absolute"
                            style={{top: "18%",left: "21%", fontSize: "1.4rem"}}></i></div>
                      </div>
                    </div>
                    <p className="mb-1 text-secondary fw-bold">Latitude
                      <strong className="text-secondary fw-light" style={{ fontSize: "18px" }}> -28.7041</strong></p>
                    <p className="text-secondary fw-bold">Longitude
                      <strong className="text-secondary fw-light" style={{ fontSize: "18px" }}> -77.1025</strong></p>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ComplaintDetails;

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function ComplaintDetails() {
  const latitude = -24.123124;
  const longitude = -24.123124;

  // OpenStreetMap Static Map URL
  const mapUrl = `https://static-maps.yandex.ru/1.x/?ll=${longitude},${latitude}&z=14&l=map&size=400,200`;

  return (
    <div className="container mt-5">
      <form>
        <div className="row">
         
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="complainantName">Complaint Received from (Name)</label>
              <input
                type="text"
                className="form-control"
                id="complainantName"
                placeholder="Enter name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="complaintDescription">Complaint Description</label>
              <textarea
                className="form-control"
                id="complaintDescription"
                rows="4"
                placeholder="Write a long text here"
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="complainantContact">Complainant Contact Details</label>
              <input
                type="text"
                className="form-control"
                id="complainantContact"
                placeholder="Enter contact number"
              />
            </div>
          </div>

         
          <div className="col-md-6">
           
            <div className="form-group">
              <label>Complaint Attachments</label>
              <div className="mb-3">
                <label htmlFor="uploadPhotos" className="form-label">
                  Photos
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="uploadPhotos"
                  accept="image/*"
                />
              </div>
              <div>
                <label htmlFor="uploadVideos" className="form-label">
                  Videos
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="uploadVideos"
                  accept="video/*"
                />
              </div>
            </div>

         
            <div className="form-group mt-4">
              <label>Location Details</label>
              <div className="border p-3 rounded">
                <div className="d-flex align-items-center">
                  <span className="me-2">
                    <i className="bi bi-geo-alt-fill text-primary"></i>
                  </span>
                  <strong>Delhi</strong>
                </div>
                <div className="row" >
                <div className= " col mt-3">
                  <img
                    src={mapUrl}
                    alt="Map location"
                    className="img-fluid rounded"
                  />
                </div>
                <div className=" col mt-2">
                  <p className="mb-1">Latitude: {latitude}</p>
                  <p>Longitude: {longitude}</p>
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

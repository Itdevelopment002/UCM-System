import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import "./FunctionalRequiremnt.css"; // Reuse the common styles

const DemolitionOrder = () => {
  return (
    <div className="form-container">
      <form>
        <div className="row">
          {/* First Row */}
          <div className="col-md-4">
            <FormGroup>
              <Label htmlFor="demolitionDate" className="form-label">
                Demolition Date
              </Label>
              <Input
                type="date"
                id="demolitionDate"
                placeholder="DD/MM/YYYY"
                className="form-control"
              />
            </FormGroup>
          </div>
          <div className="col-md-4">
            <FormGroup>
              <Label htmlFor="demolitionTime" className="form-label">
                Demolition Time
              </Label>
              <Input
                type="time"
                id="demolitionTime"
                className="form-control"
              />
            </FormGroup>
          </div>
          <div className="col-md-4">
            <FormGroup>
              <Label htmlFor="demolitionDocument" className="form-label">
                Demolition Document
              </Label>
              <div className="upload-container">
                <label
                  htmlFor="hardCopyUpload"
                  className="form-control input-small upload-label"
                  style={{ cursor: "pointer" }}
                >
                  <i className="fas fa-upload upload-icon input-small"></i> Upload Documents
                </label>
                <input
                  type="file"
                  className="form-control input-small d-none"
                  id="hardCopyUpload"
                  accept="image/*"
                />
              </div>
            </FormGroup>
          </div>
        </div>

        {/* Second Row */}
        <div className="row">
          <div className="col-md-8">
            <FormGroup>
              <Label htmlFor="demolitionExpenditure" className="form-label">
                Demolition Expenditure Details
              </Label>
              <Input
                type="textarea"
                id="demolitionExpenditure"
                placeholder="Write a long text here"
                className="form-control"
              />
            </FormGroup>
          </div>
        </div>

        {/* Third Row */}
        <div className="row">
          <div className="col-md-4">
            <FormGroup className="position-relative">
              <Label htmlFor="constructionNumber" className="form-label">
                Construction Number
              </Label>
              <div className="input-group">
              <span className="input-group-text d-flex align-items-center">
                <i className="fa fa-search"></i>
              </span>
                <Input
                  type="search"
                  id="constructionNumber"
                  placeholder="Search Construction Number"
                  className="form-control"
                />
              </div>
            </FormGroup>
          </div>
          <div className="col-md-4">
            <FormGroup>
              <Label htmlFor="policeStationName" className="form-label">
                Police Station Name
              </Label>
              <Input
                type="select"
                id="policeStationName"
                className="form-control text-muted"
                style={{ fontSize: "15px" }}
              >
                <option>Select the police station name</option>
              </Input>
            </FormGroup>
          </div>
          <div className="col-md-4">
            <FormGroup>
              <Label htmlFor="policeManpowerDetails" className="form-label">
                Police Manpower Details
              </Label>
              <Input
                type="text"
                id="policeManpowerDetails"
                placeholder="Enter name"
                className="form-control"
              />
            </FormGroup>
          </div>
        </div>

        {/* Fourth Row */}
        <div className="row">
          <div className="col-md-4">
            <FormGroup>
              <Label htmlFor="wardOffice" className="form-label">
                Ward Office
              </Label>
              <div className="input-group">
                <Input
                  type="text"
                  id="wardOffice"
                  placeholder="Ward officer"
                  className="form-control"
                  style={{ backgroundColor: "#EEEEEE" }}
                />
                <span
                  className="input-group-text"
                  style={{ backgroundColor: "#EEEEEE" }}
                >
                  <i
                    className="fas fa-pencil"
                    style={{ color: "#010100" }}
                  ></i>
                </span>
              </div>
            </FormGroup>
          </div>
          <button
            type="submit"
            className="btn submit-btn"
            style={{
              background:
                "linear-gradient(99.78deg, #9181F4 -5.85%, #5038ED 109.55%)",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontFamily: "Poppins",
              borderRadius: "28px",
              padding: "10px 20px",
              border: "none",
              position: "absolute",
              bottom: "10px",
              right: "10px",
            }}
          >
            Save and Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DemolitionOrder;

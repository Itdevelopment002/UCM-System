import React, { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import "./FunctionalRequiremnt.css"; // Reuse the common styles

const DemolitionOrder = () => {
  const [fileName, setFileName] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="form-container">
      <form>
        <div className="row">
          {/* First Row */}
          <div className="col-md-4">
            <FormGroup>
              <Label htmlFor="demolitionDate" className="form-label label-small">
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
              <Label htmlFor="demolitionTime" className="form-label label-small">
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
              <Label htmlFor="demolitionDocument" className="form-label label-small">
                Demolition Document
              </Label>
              
              <div className=" input-group">
                  {fileName ? (
                    <div className="upload-container uploaded-file-name form-control ">
                      <i className="fas fa-upload upload-icon"></i> {fileName}
                    </div>
                  ) : (
                    <Label
                      htmlFor="hardCopyUpload"
                      className="form-control input-small upload-label"
                      style={{ cursor: "pointer" }}
                    >
                      <i className="fas fa-upload upload-icon"></i> Upload Documents
                    </Label>
                  )}
                  <Input
                    type="file"
                    className="form-control input-small d-none"
                    id="hardCopyUpload"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
              </div>

              {/* <div className="upload-container input-group">
                {fileName ? (
                  <div className="uploaded-file-name form-control input-small upload-label">
                     <i className="fas fa-upload upload-icon input-small mx-auto"></i>{fileName}
                  </div>
                ) : (
                  <Label
                    htmlFor="hardCopyUpload"
                    className="form-control input-small upload-label"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fas fa-upload upload-icon input-small"></i> Upload Documents
                  </Label>
                )}
                <Input
                  type="file"
                  className="form-control input-small d-none"
                  id="hardCopyUpload"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div> */}
            </FormGroup>
          </div>
        </div>

        {/* Second Row */}
        <div className="row">
          <div className="col-md-8">
            <FormGroup>
              <Label htmlFor="demolitionExpenditure" className="form-label label-small">
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
              <Label htmlFor="constructionNumber" className="form-label label-small">
                Construction Number
              </Label>
              <div className="input-group">
                <Input
                  type="search"
                  id="constructionNumber"
                  placeholder="Search Construction Number"
                  className="form-control"
                />
                <span className="input-group-text d-flex align-items-center">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </FormGroup>
          </div>
          <div className="col-md-4">
            <FormGroup>
              <Label htmlFor="policeStationName" className="form-label label-small">
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
              <Label htmlFor="policeManpowerDetails" className="form-label label-small">
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
              <Label htmlFor="wardOffice" className="form-label label-small">
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
          <button type="submit" className="btn submit-btn-form">
            Save and Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DemolitionOrder;

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
              <div className="input-group">
                <Input
                  type="text"
                  id="demolitionDate"
                  placeholder="dd-mm-yyyy"
                  className="form-control"
                />
                <span className="input-group-text">
                  <i className="fas fa-calendar " style={{ color: "#5038ed" }}></i>
                  {/* fa fa-calendar-o */}
                </span>
              </div>
            </FormGroup>
          </div>
          <div className="col-md-4">
            <FormGroup>
              <Label htmlFor="demolitionTime" className="form-label">
                Demolition Time
              </Label>
              <div className="input-group">
                <Input
                  type="text"
                  id="demolitionTime"
                  placeholder="--:--"
                  className="form-control"
                />
                <span className="input-group-text">
                  <i className="fas fa-clock" style={{ color: "#5038ed" }}></i>
                </span>
              </div>
            </FormGroup>
          </div>
          <div className="col-md-4">
            <FormGroup>
              <Label htmlFor="demolitionDocument" className="form-label">
                Demolition Document
              </Label>
              <div className="upload-container">
                <label htmlFor="hardCopyUpload" className="form-control input-small upload-label" style={{cursor:"pointer"}}>
                  <i className="fas fa-upload upload-icon input-small "></i>  Upload Document
                </label>
                <input
                  type="file"
                  className="form-control input-small d-none "
                  id="hardCopyUpload"
                  accept="image/*"
                />
              </div>
              {/* <div className="input-group">
                <Input
                  type="file"
                  id="demolitionDocument"
                  className="form-control"
                />
                <span className="input-group-text">
                  <i className="fas fa-upload" ></i>
                </span>
              </div> */}
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
            <FormGroup>
              <Label htmlFor="constructionNumber" className="form-label">
                Construction Number
              </Label>
              <div className="input-group">
                <Input
                  type="text"
                  id="constructionNumber"
                  placeholder="Search Construction Number"
                  className="form-control"
                />
                <span className="input-group-text">
                  <i className="fas fa-search" style={{ color: "#5038ed" }}></i>
                </span>
              </div>
            </FormGroup>
          </div>
          <div className="col-md-4">
            <FormGroup>
              <Label htmlFor="policeStationName" className="form-label">
                Police Station Name
              </Label>
              <div className="input-group">
                <Input
                  type="select"
                  id="policeStationName"
                  className="form-control text-muted custom-select-no-arrow"
                  style={{fontSize:"14px"}}
                >
                  <option>Select the police station name</option>
                </Input>
                <span className="input-group-text">
                  <i className="fa fa-angle-down" aria-hidden="true" style={{ color: "#5038ed" }}></i>
                </span>
              </div>
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
                  style={{backgroundColor:"#EEEEEE"}}
                />
                <span className="input-group-text" style={{backgroundColor:"#EEEEEE"}}>
                  <i className="fas fa-pencil" style={{ color: "#5038ed" }}></i>
                </span>
              </div>
            </FormGroup>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DemolitionOrder;

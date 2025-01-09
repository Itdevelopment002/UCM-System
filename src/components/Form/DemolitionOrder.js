import React from "react";
import { Container, Row, Col, FormGroup, Label, Input } from "reactstrap";
import "./FunctionalRequiremnt.css"; // Reuse the common styles

const DemolitionOrder = () => {
  return (
    <div className="form-container">
      <form>
        <div className="row">
          {/* First Column */}
          <div className="col-md-4">
            <FormGroup>
              <Label htmlFor="demolitionTarget" className="form-label label-small">
                Demolition Target
              </Label>
              <Input
                type="text"
                id="demolitionTarget"
                placeholder="Enter name"
                className="form-control input-small"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="demolitionDate" className="form-label label-small">
                Demolition Date
              </Label>
              <Input
                type="date"
                id="demolitionDate"
                placeholder="dd-mm-yyyy"
                className="form-control input-small"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="demolitionTime" className="form-label label-small">
                Demolition Time
              </Label>
              <Input
                type="time"
                id="demolitionTime"
                className="form-control input-small"
              />
            </FormGroup>
          </div>

          {/* Second Column */}
          <div className="col-md-8">
            <h2 className="heading">Additional Information</h2>
            <div className="divider"></div>
            <FormGroup>
              <Label htmlFor="demolitionDocument" className="form-label label-small">
                Demolition Document
              </Label>
              <Input
                type="file"
                id="demolitionDocument"
                className="form-control input-small"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="demolitionExpenditure" className="form-label label-small">
                Demolition Expenditure Details
              </Label>
              <Input
                type="textarea"
                id="demolitionExpenditure"
                placeholder="Write a long text here"
                className="form-control input-small"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="policeStationName" className="form-label label-small">
                Police Station Name
              </Label>
              <Input
                type="select"
                id="policeStationName"
                className="form-control input-small"
              >
                <option>Select the police station name</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="protectionNumber" className="form-label label-small">
                Protection Number
              </Label>
              <Input
                type="text"
                id="protectionNumber"
                placeholder="Enter contact number"
                className="form-control input-small"
              />
            </FormGroup>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DemolitionOrder;

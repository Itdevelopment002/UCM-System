import React from "react";
import { Container, Row, Col, FormGroup, Label, Input } from "reactstrap";
import './FunctionalRequiremnt.css'; // Import the CSS file for styles

const CourtOrder = () => {
  return (
    <div className="form-container">
      <form>
        {/* Court Matter Involvement */}
        <Row className="mb-4">
          <Col xs={12}>
            <FormGroup>
              <Label className="form-label text-dark fw-bold heading">
                Court Matter Involvement
              </Label>
              <div>
                <FormGroup check inline>
                  <Input type="radio" id="courtInvolvementYes" name="courtInvolvement" />
                  <Label check htmlFor="courtInvolvementYes" className="checkbox-label">Yes</Label>
                </FormGroup>
                <FormGroup check inline>
                  <Input type="radio" id="courtInvolvementNo" name="courtInvolvement" />
                  <Label check htmlFor="courtInvolvementNo" className="checkbox-label">No</Label>
                </FormGroup>
              </div>
            </FormGroup>
          </Col>
        </Row>

        {/* Form Fields */}
        <Row className="mb-4">
          <Col xs={12} md={4}>
            <FormGroup>
              <Label htmlFor="courtOrderNumber" className="form-label text-dark fw-bold label-small">
                Court Order Number
              </Label>
              <Input
                type="text"
                id="courtOrderNumber"
                placeholder="Enter court order number"
                className="form-control text-secondary input-small"
              />
            </FormGroup>
          </Col>
          <Col xs={12} md={4}>
            <FormGroup>
              <Label htmlFor="edDate" className="form-label text-dark fw-bold label-small">
                ED Date
              </Label>
              <Input
                type="date"
                id="edDate"
                className="form-control text-secondary input-small"
              />
            </FormGroup>
          </Col>
          <Col xs={12} md={4}>
            <FormGroup>
              <Label htmlFor="courtOrder" className="form-label text-dark fw-bold label-small">
                Court Order
              </Label>
              <Input
                type="file"
                id="courtOrder"
                className="form-control text-secondary input-small"
              />
            </FormGroup>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xs={12} md={4}>
            <FormGroup>
              <Label htmlFor="courtName" className="form-label text-dark fw-bold label-small">
                Court Name
              </Label>
              <Input
                type="text"
                id="courtName"
                placeholder="Enter court name"
                className="form-control text-secondary input-small"
              />
            </FormGroup>
          </Col>
          <Col xs={12} md={4}>
            <FormGroup>
              <Label htmlFor="typeOfCourt" className="form-label text-dark fw-bold label-small">
                Type of Court
              </Label>
              <Input type="select" id="typeOfCourt" className="form-control text-secondary select-style">
                <option>Choose court</option>
                <option>District Court</option>
                <option>High Court</option>
                <option>Supreme Court</option>
              </Input>
            </FormGroup>
          </Col>
          <Col xs={12} md={4}>
            <FormGroup>
              <Label htmlFor="petitionerName" className="form-label text-dark fw-bold label-small">
                Petitioner Name
              </Label>
              <Input
                type="text"
                id="petitionerName"
                placeholder="Enter petitioner name"
                className="form-control text-secondary input-small"
              />
            </FormGroup>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xs={12} md={4}>
            <FormGroup>
              <Label htmlFor="petitionerMobile" className="form-label text-dark fw-bold label-small">
                Petitioner Mobile Number
              </Label>
              <Input
                type="text"
                id="petitionerMobile"
                placeholder="Enter mobile number"
                className="form-control text-secondary input-small"
              />
            </FormGroup>
          </Col>
          <Col xs={12} md={8}>
            <FormGroup>
              <Label htmlFor="petitionerAddress" className="form-label text-dark fw-bold label-small">
                Petitioner Address
              </Label>
              <Input
                type="textarea"
                id="petitionerAddress"
                rows="3"
                placeholder="Write a long text here"
                className="form-control text-secondary input-small"
              />
            </FormGroup>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default CourtOrder;

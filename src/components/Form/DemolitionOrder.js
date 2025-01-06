import React from 'react';
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';

const DemolitionOrder = () => {
  return (
    <Container 
      className=" mx-auto" 
      style={{ padding: '20px', fontFamily: 'Poppins, sans-serif', fontWeight: '600', fontSize: '13px', backgroundColor: 'white' }}
    >
      <Row className="mb-4">
        <Col xs={12} md={4}>
          <FormGroup>
            <Label htmlFor="demolitionTarget" className="form-label text-dark fw-bold">
              Demolition Target
            </Label>
            <Input 
               style={{fontSize:"12px"}}
              type="text" 
              id="demolitionTarget" 
              placeholder="Enter name" 
              className="form-control text-secondary"
            />
          </FormGroup>
        </Col>
        <Col xs={12} md={4}>
          <FormGroup>
            <Label htmlFor="demolitionDate" className="form-label text-dark fw-bold">
              Demolition Date
            </Label>
            <Input 
               style={{fontSize:"12px"}}
              type="date" 
              id="demolitionDate" 
              placeholder="dd-mm-yyyy" 
              className="form-control text-secondary"
            />
          </FormGroup>
        </Col>
        <Col xs={12} md={4}>
          <FormGroup>
            <Label htmlFor="demolitionTime" className="form-label text-dark fw-bold">
              Demolition Time
            </Label>
            <Input 
               style={{fontSize:"12px"}}
              type="time" 
              id="demolitionTime" 
              className="form-control text-secondary"
            />
          </FormGroup>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col xs={12} md={4}>
          <FormGroup>
            <Label htmlFor="demolitionDocument" className="form-label text-dark fw-bold">
              Demolition Document
            </Label>
            <Input 
               style={{fontSize:"12px"}}
              type="file" 
              id="demolitionDocument" 
              className="form-control text-secondary"
            />
          </FormGroup>
        </Col>
        <Col xs={12} md={8}>
          <FormGroup>
            <Label htmlFor="demolitionExpenditure" className="form-label text-dark fw-bold">
              Demolition Expenditure Details
            </Label>
            <Input 
               style={{fontSize:"12px"}}
              type="textarea" 
              id="demolitionExpenditure" 
              placeholder="Write a long text here" 
              className="form-control text-secondary"
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={4}>
          <FormGroup>
            <Label htmlFor="policeStationName" className="form-label text-dark fw-bold">
              Police Station Name
            </Label>
            <Input 
               style={{fontSize:"12px"}}
              type="select" 
              id="policeStationName" 
              className="form-control text-secondary"
            >
              <option>Select the police station name</option>
            </Input>
          </FormGroup>
        </Col>
        <Col xs={12} md={8}>
          <FormGroup>
            <Label htmlFor="protectionNumber" className="form-label text-dark fw-bold">
              Protection Number
            </Label>
            <Input 
               style={{fontSize:"12px"}}
              type="text" 
              id="protectionNumber" 
              placeholder="Enter contact number" 
              className="form-control text-secondary"
            />
          </FormGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default DemolitionOrder;

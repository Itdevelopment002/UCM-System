import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const DemolitionOrder = () => {
  return (
    <Container className="mt-5">
   
      <Row className="mb-3 row">
        <Col xs={12} md={4}>
          <FormGroup>
            <Label for="demolitionTarget">Demolition Target</Label>
            <Input type="text" id="demolitionTarget" placeholder="Enter name" />
          </FormGroup>
        </Col>
        <Col xs={12} md={4}> 
          <FormGroup>
            <Label for="demolitionDate">Demolition Date</Label>
            <Input type="date" id="demolitionDate" placeholder="dd-mm-yyyy" />
          </FormGroup>
        </Col>

      
        <Col xs={12} md={4}>
          <FormGroup>
            <Label for="demolitionTime">Demolition Time</Label>
            <Input type="time" id="demolitionTime" />
          </FormGroup>
        </Col>
      </Row>

    

    
      <Row className="mb-3">
        <Col xs={12} md={4}>
          <FormGroup>
            <Label for="demolitionDocument">Demolition Document</Label>
            <Input type="file"  id="demolitionDocument"  placeholder="Upload Document"/>
          </FormGroup>
        </Col>
        <Col xs={12} md={8}>
          <FormGroup>
            <Label for="demolitionExpenditure">Demolition Expenditure Details</Label>
            <Input type="textarea" id="demolitionExpenditure" placeholder="Write a long text here" />
          </FormGroup>
        </Col>
      </Row>


      
      <Row>
        <Col xs={12} md={4}> 
          <FormGroup>
            <Label for="policeStationName">Police Station Name</Label>
            <Input type="select" id="policeStationName">
              <option>Select the police station name</option>
             
            </Input>
          </FormGroup>
        </Col>

        <Col xs={12} md={5}>
          <FormGroup>
            <Label for="protectionNumber">Protection Number</Label>
            <Input type="text" id="protectionNumber" placeholder="Enter contact number" />
          </FormGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default DemolitionOrder;
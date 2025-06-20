import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Header = () => {
  return (
        <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
      <Row>
        <Col md={3} className='bg-danger'>hELLO</Col>
        <Col md={9} className='bg-success'>wORLD</Col>
      </Row>
      <Container fluid>
      <Row>
        <Col>1 of 1</Col>
      </Row>
    </Container>
      </Container>
  );
}
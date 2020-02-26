import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Label, Input } from 'reactstrap';

const Login = () => {
  const userLog =() => {
    alert("You have logged in.")
  }
  return (
    <Container className="cont border border-secondary bg-light text-center">
      <Row className="m-3">
        <Col className="Ltext">
            <h1>Login</h1>
        </Col>
      </Row>
      <Row className="m-3">
        <Col sm="3"></Col>
        <Col className="Ltext">
            <Label>Username</Label>
        </Col>
        <Col sm="3" className="Uptext">
            <Input placeholder="Username" />
        </Col>
        <Col sm="3"></Col>
      </Row>
      <Row className="m-3">
        <Col sm="3"></Col>
        <Col className="Ltext">
            <Label>Password</Label>
        </Col>
        <Col sm="3" className="Uptext">
            <Input type="password" placeholder="Password" />
        </Col>
        <Col sm="3"></Col>
      </Row>
      <Row className="m-3">
        <Col className="Ltext">
            <Button color="info" onClick={userLog}>Log In</Button>
        </Col>
      </Row>
    </Container>
    );
}
export default Login
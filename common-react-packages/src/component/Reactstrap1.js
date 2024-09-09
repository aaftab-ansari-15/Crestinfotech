import React, { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
const Reactstrap1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div>
        <Navbar color="inverse" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Github
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Container>
          <Row>
            <Col>
              <h1>Welcome to React</h1>
              <p>
                <Button
                  tag="a"
                  color="success"
                  size="large"
                  href="http://reactstrap.github.io"
                  target="_blank"
                >
                  View Reactstrap Docs
                </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Reactstrap1;

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
function header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Reasonate Solutions
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="https://www.resonate.cx/customer-experience-management-platform/">
                Product
              </Nav.Link>
              <Nav.Link href="https://www.resonate.cx/nps-platform/">
                NPS&reg;
              </Nav.Link>
              <Nav.Link href="https://www.resonate.cx/customer-experience-management-platform/">
                Industries
              </Nav.Link>
              <Nav.Link href="https://www.resonate.cx/customer-experience-management-platform/">
                Resources
              </Nav.Link>
              <Nav.Link href="https://www.resonate.cx/about-us/">
                About Us
              </Nav.Link>
              <Button variant="outline-danger">Request Demo</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default header;

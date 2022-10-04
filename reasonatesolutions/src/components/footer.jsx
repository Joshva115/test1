import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
function footer() {
  return (
    <footer class="py-5 mt-5 bg-dark text-white">
      <Container>
        <Row>
          {/*Column 1 - Resources*/}
          <Col className="col-md-3 col-sm-6">
            <h4>CX Resources</h4>
            <ul className="list-unstyled p-2">
              <li className="pb-3">What is Customer Experience Management</li>
              <li className="pb-3">What are the common CX Metrics</li>
              <li className="pb-3">What is Net Promoter Score</li>
              <li className="pb-3">Why Voice of the Customer Program</li>
              <li className="pb-3">Resonate.CX Blog</li>
            </ul>
          </Col>
          {/*Column 2 - Technology*/}
          <Col className="col-md-3 col-sm-6">
            <h4>CX Technology</h4>
            <ul className="list-unstyled p-2">
              <li className="pb-3">Customer Experience Platform</li>
              <li className="pb-3">Employee Experience Platform</li>
              <li className="pb-3">A.I. Driven Conversational Survey</li>
              <li className="pb-3">Facial Emotion Analytics</li>
            </ul>
          </Col>
          {/*Column 3 - Connect*/}
          <Col className="col-md-3 col-sm-6">
            <h4>CX Resources</h4>
            <ul className="list-unstyled p-2">
              <li className="pb-3">Contact Us</li>
              <li className="pb-3">About Us</li>
              <li className="pb-3">Partners</li>
              <li className="pb-3">Request Demo</li>
            </ul>
          </Col>
          {/*Column 4 - Numbers*/}
          <Col className="col-md-3 col-sm-6">
            <h4>CX Numbers</h4>
            <ul className="list-unstyled p-2">
              <li class="pb-3 font-weight-bold">Sydney</li>
              <p>Tel: +61 2 9957 9400</p>
              <li className="pb-3 font-weight-bold">London</li>
              <p>Tel: +44 2078 463932</p>
              <li className="pb-3 font-weight-bold">New York</li>
              <p>Tel: +1 332 895 6179</p>
            </ul>
          </Col>
        </Row>
        <p class="text-center text-white lead">
          Copyright &copy; Joshua Bartlett - Reasonate Solutions
        </p>
      </Container>
    </footer>
  );
}

export default footer;

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-content">
          <Col md={4} className="footer-text">
            <p>"The problem with troubleshooting is that trouble shoots back." - Anonymous</p>
          </Col>
          <Col md={4} className="footer-copy">
          <p className="footer-copyright">&copy; 2024 Prabhat Rawat. All Rights Reserved.</p>
          </Col>
          <Col md={4} className="footer-actions">
            <Button variant="primary" href="#home" className="back-to-top-button">Back to Top</Button>
          </Col>

        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

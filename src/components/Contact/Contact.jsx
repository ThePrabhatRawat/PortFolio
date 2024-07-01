import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section section" id="contact">  
      <Container>
        <h2 className="section-title">Get in Touch</h2>
        <Row className="contact-icons">
          <Col xs={12} md={4} className="contact-item">
            <a href="mailto:prabhatrawat370370@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
              <p>prabhatrawat370370@gmail.com</p>
            </a>
          </Col>
          <Col xs={12} md={4} className="contact-item">
            <a href="tel:+918533056772" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FontAwesomeIcon icon={faPhoneAlt} size="2x" />
              <p>+918533056772</p>
            </a>
          </Col>
          <Col xs={12} md={4} className="contact-item">
            <a href="https://github.com/ThePrabhatRawat" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FontAwesomeIcon icon={faGithub} size="2x" />
              <p>Github</p>
            </a>
          </Col>
          <Col xs={12} md={4} className="contact-item">
            <a href="https://www.linkedin.com/in/prabhat-rawat-6619a2247/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
              <p>LinkedIn</p>
            </a>
          </Col>
          <Col xs={12} md={4} className="contact-item">
            <a href="https://www.instagram.com/prabhatrawat35/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              <p>Instagram</p>
            </a>
          </Col>
          <Col xs={12} md={4} className="contact-item">
            <a href="https://x.com/PrabhatRaw95796" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
              <p>Twitter</p>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './Herosection.css';

function HeroSection() {
  return (
    <section className="hero-section section" id="home">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <Fade left>
              <div className="hero-content">
                <h1 className="hero-title">Hi, I'm Prabhat Rawat</h1>
                <p className="hero-subtitle">Full Stack Developer | MERN Stack Specialist | DSA Enthusiast</p>
                <p className="hero-description">
                  Passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations.
                </p>
                <a href="#contact" className="btn btn-primary hero-btn">Get in Touch</a>
              </div>
            </Fade>
          </Col>
          <Col md={6}>
            <Fade right>
              <div className="hero-image text-center">
                <img src={require('../../images/web-developer-illustration-2005x2048-fal2biag.png')} alt="Prabhat Rawat" className="img-fluid rounded-circle" />
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;

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
                As a Full Stack Web Developer specialized in the MERN stack, I’m dedicated to crafting high-quality software that doesn't just work but makes you wonder how you ever lived without it. From small businesses to large enterprises, I bring technical expertise and a dash of humor to every project. Let's create something amazing—and have a little fun along the way.                </p>
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

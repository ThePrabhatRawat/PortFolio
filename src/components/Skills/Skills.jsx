import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Skills.css';

function Skills() {
  return (
    <section className="skills-section section" id="skills">
      <Container>
        <h2 className="section-title">Proficiencies</h2>
        <Row>
          <Col md={6}>
            <div className="skills-box">
              <h3 className="skills-subtitle">Technical Arsenal</h3>
              <div className="skills-list">
                <Button variant="outline-light" className="skill-btn">JavaScript</Button>
                <Button variant="outline-light" className="skill-btn">React</Button>
                <Button variant="outline-light" className="skill-btn">Node.js</Button>
                <Button variant="outline-light" className="skill-btn">Express</Button>
                <Button variant="outline-light" className="skill-btn">MongoDB</Button>
                <Button variant="outline-light" className="skill-btn">C++</Button>
                <Button variant="outline-light" className="skill-btn">HTML</Button>
                <Button variant="outline-light" className="skill-btn">CSS</Button>
                <Button variant="outline-light" className="skill-btn">BootStrap</Button>
                <Button variant="outline-light" className="skill-btn">Material Ui</Button>
                <Button variant="outline-light" className="skill-btn">Tailwind</Button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="skills-box">
              <h3 className="skills-subtitle">Behavioral Skills</h3>
              <div className="skills-list">
                <Button variant="outline-light" className="skill-btn">Communication</Button>
                <Button variant="outline-light" className="skill-btn">Teamwork</Button>
                <Button variant="outline-light" className="skill-btn">Problem Solving</Button>
                <Button variant="outline-light" className="skill-btn">Adaptability</Button>
                <Button variant="outline-light" className="skill-btn">Time Management</Button>
                <Button variant="outline-light" className="skill-btn">Eye For Detail</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;

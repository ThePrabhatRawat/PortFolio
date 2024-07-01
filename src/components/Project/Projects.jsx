import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'MyMart',
      description: 'Ecommerce app built in MERN, deployed on Vercel.',
      githubLink: 'https://github.com/ThePrabhatRawat/mern_ecommerce',
      liveLink: 'mern-ecommerce-three-liard.vercel.app',
      image: require('../../images/ecommece.png'),
      technologies: ['MERN', 'Stripe', 'Passport JS', 'Cookies', 'JWT', 'Tailwind CSS', 'Redux', 'REST API']
    },
    {
      title: 'NewsMania',
      description: 'News app built in React JS, deployed on Netlify.',
      githubLink: 'https://github.com/ThePrabhatRawat/NewsMania',
      liveLink: 'https://6676b0f9b8e00c7f8598633d--mellifluous-capybara-9b1f80.netlify.app/',
      image: require('../../images/news.png'),
      technologies: ['ReactJS', 'Redux', 'REST API', 'Bootstrap 5']
    },
    {
      title: 'ChatterBox',
      description: 'Chat app built in MERN, currently under development.',
      githubLink: 'https://github.com/ThePrabhatRawat/ChatterBox-Frontend',
      image: require('../../images/chat.png'),
      technologies: ['MERN', 'Redux', 'Material UI', 'JWT', 'Cookies', 'REST API', 'Socket.io', 'React Charts']
    },
    {
      title: 'MyPeerPro',
      description: 'Real-time code editor with video call, built in MERN.',
      githubLink: 'https://github.com/ThePrabhatRawat/To-Do-List-React',
      image: require('../../images/codeEditor.png'),
      technologies: ['ReactJS', 'SocketIO', 'WebRTC', 'UUID', 'Bootstrap'],
    }
  ];

  return (
    <section className="projects-section section" id="projects">
      <Container>
        <h2 className="section-title">Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} key={index}>
              <Card className="project-card">
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <div className="project-btns">
                    <Button variant="outline-light" href={project.githubLink} target="_blank" className="project-btn">
                      GitHub
                    </Button>
                    {project.liveLink && (
                      <Button variant="outline-light" href={project.liveLink} target="_blank" className="project-btn">
                        Live Demo
                      </Button>
                    )}
                  </div>
                  <div className="tech-buttons">
                    {project.technologies.map((tech, techIndex) => (
                      <Button variant="outline-light" className="tech-btn" key={techIndex}>{tech}</Button>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="github-quote">
          <p>"Why did the developer go broke? Because he used up all his cache. But you can help! Check out my other projects on <a href="https://github.com/yourusername" target="_blank" className="github-link">GitHub</a>."</p>
        </div>
      </Container>
    </section>
  );
}

export default Projects;

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const styles = {
  projectsSection: {
    backgroundColor: '#0d0d0d',
    color: '#e0e0e0',
    padding: '60px 0',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-image-source 0.3s ease-in-out',
  },
  projectsSectionHover: {
    transform: 'scale(1.02)',
    boxShadow: '0 4px 20px rgba(75, 0, 130, 0.7)',
    borderImageSource: 'linear-gradient(to right, #4b0082, #ff4500)',
    borderImageSlice: 1,
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    color: '#4b0082',
    marginBottom: '40px',
  },
  projectCard: {
    backgroundColor: '#1a1a1a',
    border: 'none',
    borderRadius: '10px',
    margin: '20px 10px',
    height: '100%',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-image-source 0.3s ease-in-out',
  },
  projectCardHover: {
    transform: 'translateY(-10px)',
    boxShadow: '0 4px 20px rgba(75, 0, 130, 0.7)',
    borderImageSource: 'linear-gradient(to right, #4b0082, #ff4500)',
    borderImageSlice: 1,
  },
  projectCardImg: {
    borderRadius: '10px 10px 0 0',
    objectFit: 'cover',
    width: '100%',
    height: '200px',
  },
  projectBtn: {
    backgroundColor: 'transparent',
    border: '2px solid #4b0082',
    color: '#e0e0e0',
    margin: '5px',
    transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
  },
  projectBtnHover: {
    backgroundColor: '#4b0082',
    color: '#fff',
  },
  techButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginTop: '10px',
  },
  techBtn: {
    backgroundColor: 'transparent',
    border: '2px solid #ff4500',
    color: '#e0e0e0',
    transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
  },
  techBtnHover: {
    backgroundColor: '#ff4500',
    color: '#fff',
  },
  cardTitle: {
    color: '#ff4500',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  githubQuote: {
    textAlign: 'center',
    marginTop: '40px',
    fontStyle: 'italic',
    fontSize:'1.2rem',
  },
  githubLink: {
    color: '#ff4500',
    textDecoration: 'none',
    fontWeight : 'bold',
    fontSize:'1.5rem',
  },
  githubLinkHover: {
    textDecoration: 'underline',
  },
};

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

  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <section
      className="projects-section section"
      id="projects"
      style={styles.projectsSection}
    >
      <Container>
        <h2 style={styles.sectionTitle}>Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} key={index}>
              <Card
                style={hoveredCard === index ? { ...styles.projectCard, ...styles.projectCardHover } : styles.projectCard}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card.Img variant="top" src={project.image} alt={project.title} style={styles.projectCardImg} />
                <Card.Body>
                  <Card.Title style={styles.cardTitle}>{project.title}</Card.Title>
                  <div className="project-btns">
                    <Button
                      variant="outline-light"
                      href={project.githubLink}
                      target="_blank"
                      style={hoveredButton === `github-${index}` ? { ...styles.projectBtn, ...styles.projectBtnHover } : styles.projectBtn}
                      onMouseEnter={() => setHoveredButton(`github-${index}`)}
                      onMouseLeave={() => setHoveredButton(null)}
                    >
                      GitHub
                    </Button>
                    {project.liveLink && (
                      <Button
                        variant="outline-light"
                        href={project.liveLink}
                        target="_blank"
                        style={hoveredButton === `live-${index}` ? { ...styles.projectBtn, ...styles.projectBtnHover } : styles.projectBtn}
                        onMouseEnter={() => setHoveredButton(`live-${index}`)}
                        onMouseLeave={() => setHoveredButton(null)}
                      >
                        Live Demo
                      </Button>
                    )}
                  </div>
                  <div style={styles.techButtons}>
                    {project.technologies.map((tech, techIndex) => (
                      <Button
                        variant="outline-light"
                        style={hoveredButton === `tech-${index}-${techIndex}` ? { ...styles.techBtn, ...styles.techBtnHover } : styles.techBtn}
                        onMouseEnter={() => setHoveredButton(`tech-${index}-${techIndex}`)}
                        onMouseLeave={() => setHoveredButton(null)}
                        key={techIndex}
                      >
                        {tech}
                      </Button>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div style={styles.githubQuote}>
          <p>
            "Why did the developer go broke? Because he used up all his cache. But you can help! Check out my other projects on &nbsp;
            <a 
              href="https://github.com/ThePrabhatRawat" 
              target="_blank" 
              style={hoveredButton === 'github-link' ? { ...styles.githubLink, ...styles.githubLinkHover } : styles.githubLink}
              onMouseEnter={() => setHoveredButton('github-link')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              GitHub
            </a>."
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Projects;

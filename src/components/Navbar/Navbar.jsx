
import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';

const styles = {
  navbarCustom: {
    backgroundColor: '#1a1a1a',
    borderBottom: '2px solid #4b0082',
  },
  navbarBrandCustom: {
    color: '#e0e0e0',
  },
  navbarLinkCustom: {
    color: '#e0e0e0',
    transition: 'color 0.3s ease-in-out',
  },
  navbarLinkHover: {
    color: '#4b0082',
  },
  navbarResumeButton: {
    backgroundColor: '#4b0082',
    border: 'none',
    color: '#fff',
    transition: 'background-color 0.3s ease-in-out',
  },
  navbarResumeButtonHover: {
    backgroundColor: '#6a0dad',
  },
  navbarToggler: {
    borderColor: '#4b0082',
  },
  navbarTogglerIcon: {
    backgroundImage: "url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23e0e0e0' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")",
  },
};

function CustomNavbar() {
  return (
    <Navbar style={styles.navbarCustom} expand="lg">
      <Container>
        <Navbar.Brand href="#home" style={styles.navbarBrandCustom}>Prabhat Rawat</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={styles.navbarToggler}>
          <span style={styles.navbarTogglerIcon}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              style={styles.navbarLinkCustom}
              onMouseEnter={(e) => e.target.style.color = styles.navbarLinkHover.color}
              onMouseLeave={(e) => e.target.style.color = styles.navbarLinkCustom.color}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              style={styles.navbarLinkCustom}
              onMouseEnter={(e) => e.target.style.color = styles.navbarLinkHover.color}
              onMouseLeave={(e) => e.target.style.color = styles.navbarLinkCustom.color}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              style={styles.navbarLinkCustom}
              onMouseEnter={(e) => e.target.style.color = styles.navbarLinkHover.color}
              onMouseLeave={(e) => e.target.style.color = styles.navbarLinkCustom.color}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              style={styles.navbarLinkCustom}
              onMouseEnter={(e) => e.target.style.color = styles.navbarLinkHover.color}
              onMouseLeave={(e) => e.target.style.color = styles.navbarLinkCustom.color}
            >
              Contact
            </Nav.Link>
          </Nav>
          <a
            href="../../resume/Prabhat Rawat (6).pdf"
            download
            style={styles.navbarResumeButton}
            onMouseEnter={(e) => e.target.style.backgroundColor = styles.navbarResumeButtonHover.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = styles.navbarResumeButton.backgroundColor}
            className="btn"
          >
            Download Resume
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState, useEffect } from 'react';

export const NavBar = () => {
  const [navbarBackground, setNavbarBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: navbarBackground ? '#004567' : 'white',
    transform: navbarBackground ? 'scale(1)' : 'scale(0.9)',
    transition: 'background-color 0.5s ease, transform 0.5s ease',
    boxShadow: navbarBackground ? '0 4px 8px rgba(0, 0, 0, 0.1)' : '0 0 0 rgba(0, 0, 0, 0)',
  };

  const linkStyle = {
    color: navbarBackground ? 'white' : '#004567',  // Adjust as needed for readability
  };

  const dropdownToggleStyle = {
    color: navbarBackground ? 'white' : '#004567',
    transition: 'color 0.5s ease',
    display: 'inline-block',
  };

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    let yOffset = 0;
    if(id == "stationary" || id=="brochures" || id=="packaging" || id=="fashion" || id=="product"){
        yOffset = -71;
    }
    const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yPosition, behavior: 'smooth' });
  };
  

  return (
    <Navbar collapseOnSelect expand="lg" style={navbarStyle} sticky="top">
      <Container>
        <img
          src="img/logo.png"
          width="50"
          height="50"
          className="d-inline-block align-top me-3"
          alt="React Bootstrap logo"
        />
        <Navbar.Brand href="#home" style={linkStyle}>TP Designs and Concepts</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleNavClick('carousel-section')} style={linkStyle}>Services</Nav.Link>
            <NavDropdown title={<span style={dropdownToggleStyle}>Portfolio</span>} id="collapsible-nav-dropdown">
              <NavDropdown.Item onClick={() => handleNavClick('stationary')}>Stationary and Branding</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavClick('brochures')}>Brochures and Catalogues</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavClick('packaging')}>Packaging Designs</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavClick('product')}>Product Photography</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavClick('fashion')}>Fashion Photography</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() => handleNavClick('cards-section')} style={linkStyle}>Clients</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link onClick={() => handleNavClick('contact-section')} style={linkStyle}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

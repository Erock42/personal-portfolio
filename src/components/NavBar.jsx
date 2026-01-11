import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/EELogo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/icons8-github.svg";


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, seScrolled] = useState(false);
  
  // If user scrolls more than 50 up or down it's true, else can be idle or less than 50
  
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    }
    
    // Uses onscroll funtion to check if user has scrolled more than 50px

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  
  // If user clicks on a link, it will navigate to the section coorelating to that link's name
    return (
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse className="toggle-items" id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
              
                <a href="#"><img src={navIcon1} alt="linkedin" /></a>
                <a href="#"><img src={navIcon2} alt="facebook" /></a>
                <a href="#"><img src={navIcon3} alt="instagram" /></a>
                <a href="#"><img src={navIcon4} alt="github" /></a>
           
              </div>
              <button className="vvd" onClick={() => console.log('connect')}>
                <span> "Let's Connect!" </span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
  }

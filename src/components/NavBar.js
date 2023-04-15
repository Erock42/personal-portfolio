import React, { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home")
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
  
  // If user clicks on a link, it will navigate to the section coorelating to that link's name
    
    return (
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={''} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={ } alt="LinkedIn" />LinkedIn</a>
                <a href="#"><img src={ } alt="Instagram" />Instagram</a>
                <a href="#"><img src={ } alt="Facebook" />Facebook</a>
              </div>
              <button className="btn btn-connect" onClick={() => console.log(connect)}>
                <span> "Let's Connect!" </span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
  }
}
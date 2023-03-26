import { Navbar, Container } from "react-bootstrap"

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home")
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll() => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** How do I add a logo to a navbar? */
  

  
  
  
  

  return (
  <Navbar expand="lg" className={scrolled ? "scrolled": "" }>
      <Container>
        <Navbar.Brand href="#home">
          <img src={''} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav>
          <span className="navbar-text">
           <div className="social-icon">
              <a href="#"><img src={} alt="LinkedIn" />LinkedIn</a>
              <a href="#"><img src={} alt="Instagram" />Instagram</a>
              <a href="#"><img src={} alt="Facebook" />Facebook</a>
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
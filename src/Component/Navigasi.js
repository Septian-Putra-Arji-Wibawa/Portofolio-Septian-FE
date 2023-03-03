import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigasi() {
  return (
    <Navbar collapseOnSelect expand="lg" className='NavigasiCss'>
      <Container>
        <h4 href="#home">PORTOFOLIO</h4>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#section2" style={{color:'white'}}>Experience</Nav.Link>
            <Nav.Link href="#section3" style={{color:'white'}}>Skill's</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigasi;
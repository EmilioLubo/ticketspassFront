import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './favicon.ico'
export default function NavbarBS() {
  return (
    <Navbar bg="light" expand="lg" >
      <Container>
        <img className='navbar-logo' src={logo} alt="Logo" />
        <Navbar.Brand  href="#home">TicketsPass+</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse >
          <Nav className="me-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Artist</Nav.Link>
            <Nav.Link href="#link">Buy</Nav.Link>
            <Nav.Link href="#link">Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

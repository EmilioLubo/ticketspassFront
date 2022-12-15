import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './favicon.ico'
import './NavbarBS.css'
export default function NavbarBS() {
  return (
    <Navbar bg="light" expand="lg" >
      <Container className='nav-flex2'>
        <img className='navbar-logo' src={logo} alt="Logo" />
        <Navbar.Brand  href="/">TicketsPass+</Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className=''>
          <Nav className="me-auto nav-flex1">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/artists">Artists</Nav.Link>
            <Nav.Link href="#link">Buy</Nav.Link>
            <Nav.Link className='register' href="signup">Sign Up</Nav.Link>
            <Nav.Link className='login' href="signin">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

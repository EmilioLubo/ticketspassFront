import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './favicon.ico'
import './NavbarBS.css'
import { Link } from 'react-router-dom';
export default function NavbarBS() {
  return (
    <Navbar bg="light" expand="lg" >
      <Container className='nav-flex2'>
        <img className='navbar-logo' src={logo} alt="Logo" />
        <Navbar.Brand  href="/">TicketsPass+</Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className=''>
          <Nav className="me-auto nav-flex1">
            <Link className='nav-btn' to="/">Home</Link>
            <Link className='nav-btn' to="/artists">Artists</Link>
            <Link className='nav-btn' to="/concerts">Concerts</Link>
            <Link className='register nav-btn' to="signup">Sign Up</Link>
            <Link className='login nav-btn' to="signin">Sign In</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

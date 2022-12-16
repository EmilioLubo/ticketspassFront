import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarBS.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function NavbarBS() {
  let {online} = useSelector(state => state.user)

  return (
    <Navbar bg="light" expand="lg" >
      <Container className='nav-flex2' style={{alignItems: 'center', display: 'flex'}}>
        <img className='navbar-logo mr-2' src='../assets/img/logo.png' alt="Logo" />
        <Navbar.Brand><Link className='logo-redirect-nav' to='/'>TicketsPass</Link></Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className=''>
          <Nav className="me-auto nav-flex1">
            <Link className='nav-btn' to="/">Home</Link>
            <Link className='nav-btn' to="/artists">Artists</Link>
            <Link className='nav-btn' to="/concerts">Concerts</Link>
            {!online ?
            <>
              <Link className='register nav-btn' to="signup">Sign Up</Link>
              <Link className='login nav-btn' to="signin">Sign In</Link>
            </> :
            <></>
          }
          <Link className='nav-btn-cart' to="cart"><img src="../assets/img/cart.png" alt="cart" width='40px' /></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

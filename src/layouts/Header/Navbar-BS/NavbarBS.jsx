import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarBS.css'
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
=======

>>>>>>> d888496da700ed1a764b7806784109ebb363606f
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
<<<<<<< HEAD
            {!online ?
            <>
              <Link className='register nav-btn' to="signup">Sign Up</Link>
              <Link className='login nav-btn' to="signin">Sign In</Link>
            </> :
            <></>
            }
=======
            <Link className='nav-btn' to="signup">Sign Up</Link>
            <Link className='nav-btn' to="signin">Sign In</Link>
            <Link className='nav-btn-cart' to="cart"><img src="../assets/img/cart.png" alt="cart" width='40px' /></Link>
>>>>>>> d888496da700ed1a764b7806784109ebb363606f
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

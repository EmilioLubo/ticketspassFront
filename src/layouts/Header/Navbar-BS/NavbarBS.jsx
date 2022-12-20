import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarBS.css'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ButtonNav from '../../../components/ButtonNav/ButtonNav';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import userActions from '../../../redux/actions/userActions';
import { useTranslation } from 'react-i18next';

export default function NavbarBS() {
  let { online, name, photo, token } = useSelector(state => state.user)
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const { logout } = userActions;
  const {t} = useTranslation()

  useEffect(() => {
    setOpen(false)
    // eslint-disable-next-line
  }, [location])

  function signOut() {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, log out!'
    })
        .then((result) => {
            if (result.isConfirmed) {
                dispatch(logout(token))
                Swal.fire(
                    'Logged out!',
                    'You have been logged out',
                    'success'
                )
            }
        })
}

  return (
    <Navbar className='navBar' bg="transparent" expand="lg" variant="dark" >
      <Container className='nav-flex2' style={{ alignItems: 'center', display: 'flex' }}>
        <div>
          <Link className='logo-redirect-nav' to='/'>
            <img className='navbar-logo mr-2' src='../assets/img/logo.png' alt="Logo" />
            <Navbar.Brand style={{ margin: '0' }}>TicketsPass</Navbar.Brand>
          </Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='navColapse'>
          <Nav className="me-auto nav-flex1">
            <Link className='nav-btn' to="/">{t('home')}</Link>
            <Link className='nav-btn' to="/artists">{t('artist')}</Link>
            <Link className='nav-btn' to="/concerts">{t('concert')}</Link>
            <Link className='nav-btn-cart' to="cart"><img src="../assets/img/cart.png" alt="cart" width='40px' /></Link>
            {!online ? (
              <div>
                <ButtonNav fx={() => setOpen(!open)} />
                {open && (
                  <div className='menu'>
                    <Link className='nav-btn' to="signup">{t('sign_up')}</Link>
                    <Link className='nav-btn' to="signin">{t('sign_in')} </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className='d-flex flex-column align-items-center justify-content-center gap-1 pt-4'>
                <img src={photo} width='40' alt="userLoged" onClick={() => setOpen(!open)} />
                <h5 className='text-white fs-6'>{name}</h5>
                {open && (
                  <div className='menu'>
                    <Link className='nav-btn' to="profile">{t('profile')}</Link>
                    <Link className='nav-btn' onClick={signOut}>{t('log_out')}</Link>
                  </div>
                )}
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

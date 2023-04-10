import React, { useRef, useEffect, useState } from 'react';
import './header.css';
import { Container, Row } from 'reactstrap';
import logo from '../../assets/images/eco-logo.png'
import { NavLink, useNavigate, Link } from 'react-router-dom';
import userIcon from '../../assets/images/userIcon.png'
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import useAuth from '../../custom-hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { toast } from 'react-toastify';

const nav__links = [
  {
    path: 'home',
    display: 'Home'
  },
  {
    path: 'shop',
    display: 'Shop'
  },
  {
    path: 'cart',
    display: 'Cart'
  },
]

const Header = () => {
  const headerRef = useRef(null);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const navigate = useNavigate();
  const { currentUser} = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
    if (headerRef?.current?.classList) {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    headerRef.current.classList.add('sticky__header')
    } else {
    headerRef.current.classList.remove('sticky__header')
    }
    }
    });
    };


  const logout = () => {
    signOut(auth).then(()=>{
        toast.success('Logged out');
        navigate("/home");
    }).catch((err)=>{
        toast.error(err.message);
    });
  };

  useEffect(() => {
    stickyHeaderFunc()
    return () => window.removeEventListener('scroll', stickyHeaderFunc);

  });

  const navigateToCart = () => {
    navigate('/cart');
  };

  const toggleProfileActions = () => setIsProfileOpen(!isProfileOpen);



  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className='nav_wrapper'>
            <div className='logo'>
              <img src={logo} alt="logo" />
              <div>
                <h1>TuniMart</h1>
              </div>
            </div>
            <div className='navigation'>
              <ul className='menu'>
                {
                  nav__links.map((item, index) => (
                    <li className='nav_item' key={index}>
                      <NavLink to={item.path} className={(navClass) =>
                        navClass.isActive ? 'nav__active' : ''}>{item.display}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className='nav_icons'>

              <span className='cart_icons' onClick={navigateToCart}>
                <i className="ri-shopping-bag-line"></i>
                <span className='badge'>{totalQuantity}</span>
              </span>

              <div className='profile'>
                <motion.img whileTap={{ scale: 1.1 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt=""
                  onClick={toggleProfileActions}
                />

                <div className='profile__actions'
                  style={{ display: isProfileOpen ? 'block' : 'none' }} onClick={toggleProfileActions}>
                  {
                    currentUser ? (<span onClick={logout}>Logout</span> ):( 
                    <div className='d-flex align-items-center justify-content-center flex-column'>
                      <Link to='/signup'> Signup</Link>
                      <Link to='/login'> Login</Link>
                      <Link to='/dashboard'> Dashboard</Link>

                    </div>
                  )}
                </div>
              </div>
            </div>
            
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
import React from 'react';
import './Navbar.scss';
import logo from '../../assets/images/sdlogo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='navbar__logo' src={logo} alt='temp' />
      <div className='navbar__navlinks'>
        <p className='navbar__link'>Home</p>
        <p className='navbar__link'>Projects</p>
        <p className='navbar__link'>Contact</p>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import './Navbar.scss';
import tempimage from '../../assets/images/arrow_back-24px.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='navbar__logo' src={tempimage} alt='temp' />
      <p className='navbar__link'>Home</p>
      <p className='navbar__link'>Projects</p>
    </div>
  );
};

export default Navbar;

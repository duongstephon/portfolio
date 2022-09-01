import React from 'react';
import './Navbar.scss';
import logo from '../../assets/images/sdlogo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <NavLink to='/'><img className='navbar__logo' src={logo} alt='temp' /></NavLink>
      <div className='navbar__navlinks'>
        <NavLink to='/' className='navbar__link'><p>Home</p></NavLink>
        <NavLink to='/projects' className='navbar__link'><p>Projects</p></NavLink>
        <NavLink to='/contact' className='navbar__link'><p>Contact</p></NavLink>
      </div>
    </div>
  );
};

export default Navbar;

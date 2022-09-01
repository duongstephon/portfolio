import React from 'react';
import './Navbar.scss';
import logo from '../../assets/images/sdlogo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'><img className='navbar__logo' src={logo} alt='temp' /></Link>
      <div className='navbar__navlinks'>
        <Link to='/' className='navbar__link'><p>Home</p></Link>
        <Link to='/projects' className='navbar__link'><p>Projects</p></Link>
        <Link to='/contact' className='navbar__link'><p>Contact</p></Link>
      </div>
    </div>
  );
};

export default Navbar;

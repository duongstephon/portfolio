import React from 'react';
import './Footer.scss'
import Github from '../../assets/images/github.png'
import Linkedin from '../../assets/images/linkedin.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <Link to='/contact' className='footer__contact'><p className='footer__text'>Contact</p></Link>
      </div>
      <div className='footer__links'>
      <a href='http://github.com/duongstephon'><img className='footer__icon' src={Github} alt='github'/></a>
        <a href='http://www.linkedin.com/in/stephonduong'><img className='footer__icon' src={Linkedin} alt='linkedin'/></a>
      </div>
    </div>
  );
};

export default Footer;

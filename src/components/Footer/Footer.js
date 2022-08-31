import React from 'react';
import './Footer.scss'
import Github from '../../assets/images/github.png'
import Linkedin from '../../assets/images/linkedin.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <p className='footer__contact'>Contact</p>
      </div>
      <div className='footer__links'>
        <img className='footer__icon' src={Github} alt='github'/>
        <img className='footer__icon' src={Linkedin} alt='linkedin'/>
      </div>
    </div>
  );
};

export default Footer;

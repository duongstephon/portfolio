import React from 'react';
import './Projects.scss'
import Readme from '../../assets/images/readme.png'
import Instock from '../../assets/images/instock.png'
import Brainflix from '../../assets/images/brainflix.png'
import IndustryProject from '../../assets/images/industry.png'

const Projects = () => {
  return (
    <div className='projects'>
      <h2 className='projects__title'>Projects</h2>
      <div className='projects__section'>
        <img className='projects__image' src={Readme} alt='Read.ME' />
        <img className='projects__image' src={IndustryProject} alt='IndustryProject' />
        <img className='projects__image' src={Instock} alt='Instock' />
        <img className='projects__image' src={Brainflix} alt='Brainflix' />
      </div>
    </div>
  );
};

export default Projects;

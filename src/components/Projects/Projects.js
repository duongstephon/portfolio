import React, { useState } from 'react';
import './Projects.scss';
import { MdOutlineArrowLeft, MdOutlineArrowRight } from 'react-icons/md';
import Readme from '../../assets/images/readme.png';
import Instock from '../../assets/images/instock.png';
import Brainflix from '../../assets/images/brainflix.png';
import IndustryProject from '../../assets/images/industry.png';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projectImages = [Readme, Instock, Brainflix, IndustryProject]

  const [current, setCurrent] = useState(0);
  const length = projectImages.length

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(projectImages) || length <= 0) {
    return null;
  }

  return (
    <div className='home-projects'>
      <h2 className='home-projects__title'>Some of My Projects...</h2>
      <div className='home-projects__middle'>
      <div className='home-projects__section'>
      <MdOutlineArrowLeft className='home-projects__arrow' onClick={nextImage} />
      <div className='home-projects__image-slides'>
        {projectImages.map((image, index) => {
          return (
            <div className={index === current ? 'home-projects__active' : 'home-projects__not-active'} key={index}>
              {index === current && <img className='home-projects__image' src={image} alt='project image' />}
            </div>
          )
        })}
      </div>
      <MdOutlineArrowRight className='home-projects__arrow' onClick={prevImage} />
    </div>
    <Link to='/projects'><button className='home-projects__button'>See All Projects</button></Link>
      </div>
    </div>
  );
};

export default Projects;

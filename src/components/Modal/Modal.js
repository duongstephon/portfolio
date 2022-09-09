import React from 'react';
import './Modal.scss';
import Readme from '../../assets/images/readme.png';
import Instock from '../../assets/images/instock.png';
import Brainflix from '../../assets/images/brainflix.png';
import IndustryProject from '../../assets/images/industry.png';
import Close from '../../assets/images/close-24px.svg';

const projectImages = { 'Read.ME': Readme, 'Google Industry Project': IndustryProject, 'InStock': Instock, 'Brainflix': Brainflix }

const Modal = (props) => {
  if (!props.showing) return null

  return (
    <div className='modal'>
    <div className='modal__wrapper' aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className='modal__card'>
        <img className='modal__close' src={Close} onClick={props.closeModal} alt='close tag'/>
        <img className='modal__image' src={projectImages[props.project.title]} alt='project thumbnail' />
        <div className='modal__info'>
          <h3 className='modal__title'>{props.project.title}</h3>
          <p className='modal__description'>{props.project.description}</p>
          <ul className='modal__techstack'>
            {props.project.techstack.map(tech => {
              return (
                <li className='modal__techstack-tech'>{tech}</li>
              )
            })}
          </ul>
          <a href={props.project.clientgit}><button className='modal__git-link'>Git Repository</button></a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Modal;

import React from 'react';
import './Modal.scss'
import Readme from '../../assets/images/readme.png'
import Instock from '../../assets/images/instock.png'
import Brainflix from '../../assets/images/brainflix.png'
import IndustryProject from '../../assets/images/industry.png'

const projectImages = {'Read.ME': Readme, 'Google Industry Project': IndustryProject, 'InStock': Instock, 'Brainflix': Brainflix }

const Modal = (props) => {
  if (!props.showing) return null

  return (
    <div className='modal'>
    <img className='modal__image' src={projectImages[props.project.title]} alt='project thumbnail' />
    <h3>{props.project.title}</h3>
    <p>{props.project.description}</p>
    <button onClick={props.closeModal}>Close</button>
    </div>
  )
}

export default Modal;

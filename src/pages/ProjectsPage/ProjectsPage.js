import React from 'react';
import './ProjectsPage.scss';
import ProjectData from '../../data/data.json';
import { useState, useEffect } from 'react';
import Modal from '../../components/Modal/Modal'

const ProjectsPage = () => {
  const [ isShowing, setIsShowing ] = useState(false)
  const [ project, setProject ] = useState(null)

  const openModal = () => {
    setIsShowing(true);
  }

  const closeModal = () => {
    setProject(null)
    setIsShowing(false);
  }

  return (
    <div className='projects'>
      <h1 className='projects__title'>Projects</h1>
      <div className='projects__all-cards'>
        <div className='projects__card projects__card--readme' onClick={() => {openModal(); setProject(ProjectData[0])}}>
          <p className='projects__card-title'>{ProjectData[0].title}</p>
          <p className='projects__card-number'>I</p>
        </div>
        <div className='projects__card projects__card--google' onClick={() => {openModal(); setProject(ProjectData[1])}}>
          <h2 className='projects__card-title projects__card-title--google'>{ProjectData[1].title}</h2>
          <p className='projects__card-number'>II</p>
        </div>
        <div className='projects__card projects__card--instock' onClick={() => {openModal(); setProject(ProjectData[2])}}>
          <h2 className='projects__card-title projects__card-title--instock'>{ProjectData[2].title}</h2>
          <p className='projects__card-number'>III</p>
        </div>
        <div className='projects__card projects__card--brainflix' onClick={() => {openModal(); setProject(ProjectData[3])}}>
          <h2 className='projects__card-title'>{ProjectData[3].title}</h2>
          <p className='projects__card-number'>IV</p>
        </div>
      </div>
      <Modal showing={isShowing} project={project} openModal={openModal} closeModal={closeModal}/>
    </div>
  );
};

export default ProjectsPage;

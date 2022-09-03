import React from 'react';
import './ProjectsPage.scss';
import ProjectData from '../../data/data.json';

const ProjectsPage = () => {
  console.log(ProjectData)
  return (
    <div className='projects'>
      <h1 className='projects__title'>Projects</h1>
      <div className='projects__all-cards'>
        <div className='projects__card projects__card--readme'>
          <p className='projects__card-title'>Read.ME</p>
          <p className='projects__card-number'>I</p>
        </div>
        <div className='projects__card projects__card--google'>
          <h2 className='projects__card-title projects__card-title--google'>Google Industry Project</h2>
          <p className='projects__card-number'>II</p>
        </div>
        <div className='projects__card projects__card--instock'>
          <h2 className='projects__card-title projects__card-title--instock'>InStock</h2>
          <p className='projects__card-number'>III</p>
        </div>
        <div className='projects__card projects__card--brainflix'>
          <h2 className='projects__card-title'>Brainflix</h2>
          <p className='projects__card-number'>IV</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

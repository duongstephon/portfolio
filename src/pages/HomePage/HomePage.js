import React from 'react';
import './HomePage.scss';
import ProfilePic from '../../assets/images/profile-pic.jpg'
import Projects from '../../components/Projects/Projects'

const HomePage = () => {
  return (
    <div className='homepage'>
      <section className='homepage__profile'>
        <div className='homepage__description'>
          <h1 className='homepage__title'>Stephon Duong</h1>
          <p className='homepage__text'>Hi, my name is Stephon Duong and I am a <span className='bolded'>Full-Stack Web Developer</span>. I enjoy problem solving and gaining knowledge in all things tech related. Check out some of the recent projects that I have worked on.</p>
          {/*<div className='homepage__list'>
            <ul>
              <li>HTML/CSS</li>
              <li>Sass</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Axios</li>
            </ul>
            <ul>
              <li>Python</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Knex.js</li>
              <li>MySQL</li>
            </ul>
  </div> */}
        </div>
        <img className='homepage__image' src={ProfilePic} alt='profile picture' />
      </section>
      <Projects />
    </div>
  );
};

export default HomePage;

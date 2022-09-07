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
        </div>
        <img className='homepage__image' src={ProfilePic} alt='profile picture' />
      </section>
      <Projects />
    </div>
  );
};

export default HomePage;

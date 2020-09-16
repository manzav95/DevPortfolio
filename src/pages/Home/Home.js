import React from 'react';
import Background from './../../components/Background/Background';
import SideNav from './../../components/SideNav/SideNav';

import './style.css';

const toggleMobileButton = function () {
  let burger = document.querySelector('.burger');
  let mobileMenu = document.querySelector('.mobile-menu');
  let body = document.querySelector('body');
  let mobileWrapper = document.querySelector('.sidenav-wrapper');

  burger.classList.toggle('burger-opened');
  mobileMenu.classList.toggle('mobile-menu-opened');
  body.classList.toggle('body-no-scroll');
  mobileWrapper.classList.toggle('mobile-wrapper-opened');
};

function Home() {
  return (
    <div>
      <Background />

      <header className='landing-wrapper'>
        <div className='burger' id='burger' onClick={toggleMobileButton}>
          <div className='burger-part'></div>
          <div className='burger-part'></div>
          <div className='burger-part'></div>
        </div>
        <SideNav />

        <section className='intro-wrapper'>
          <h1 className='first-line'>
            Hi, my name is <span id='name'>Manuel Zavala</span>
          </h1>
          <h2 className='second-line'>I'm a Full Stack Web Developer</h2>
        </section>
        <a id='learn-btn' href='/#about'>
          Learn More
        </a>
      </header>
      {/* <img src={PageDivide} alt='home page divider' id='page-divider-home' /> */}
    </div>
  );
}

export default Home;

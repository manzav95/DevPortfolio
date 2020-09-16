import React from 'react';

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

function SideNav() {
  return (
    <div>
      <div className='sidenav-wrapper'>
        <div className='burger' id='burger' onClick={toggleMobileButton}>
          <div className='burger-part'></div>
          <div className='burger-part'></div>
          <div className='burger-part'></div>
        </div>
        <nav className='mobile-menu'>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='contact'>Contact</a>
            </li>
            <li>
              <a href='projects'>Projects</a>
            </li>
            <li>
              <a href='resume'>Resume</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideNav;

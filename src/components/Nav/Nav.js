import React from 'react';
// import SideNav from '../SideNav/SideNav';

import './style.css';

function Nav() {
  return (
    <nav className='nav-wrapper'>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#resume'>Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

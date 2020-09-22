import React from 'react';
import Background from './../../components/Background/Background';

import './style.css';

function Home() {
  return (
    <div>
      <Background />

      <header className='landing-wrapper'>

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

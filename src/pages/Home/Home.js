import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  faGithubSquare,
  faTwitterSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import Background from './../../components/Background/Background';
import './style.css';

function Home() {
  return (
    <div>
      <Background />

      <header className='landing-wrapper diagonal' id='home'>
        <section className='intro-wrapper'>
          <h1 className='first-line'>
            Hi, my name is <span id='name'>Manuel Zavala</span>
          </h1>
          <h2 className='second-line'>I'm a Full Stack Web Developer</h2>
        </section>
        <a id='learn-btn' href='/#about'>
          Learn More
        </a>
        <section className='social-icons'>
          <a
            href='https://github.com/manzav95'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon id='github' icon={faGithubSquare} size='3x' />
          </a>
          <a
            href='https://www.linkedin.com/in/mzavala0402/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon id='linked' icon={faLinkedin} size='3x' />
          </a>
          <a
            href='https://twitter.com/zavalalifestyle'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon id='twitter' icon={faTwitterSquare} size='3x' />
          </a>
        </section>
      </header>
    </div>
  );
}

export default Home;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';
import {
  faHtml5,
  faJsSquare,
  faCss3Alt,
  faPython,
  faGit,
  faReact,
  faNpm,
  faGithub,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';

import './style.css';

function Skills() {
  return (
    <div>
      <div className='skills-wrapper'>
        <header>
          <h2>Skills && Experience</h2>
        </header>
        <section className='skill-list'>
          <ul>
            <li>
              HTML <FontAwesomeIcon id='html' icon={faHtml5} size='2x' />
            </li>
            <li>
              CSS <FontAwesomeIcon id='css' icon={faCss3Alt} size='2x' />
            </li>
            <li>
              Javascript
              <FontAwesomeIcon id='javascript' icon={faJsSquare} size='2x' />
            </li>
            <li>
              React <FontAwesomeIcon id='react' icon={faReact} size='2x' />
            </li>
            <li>
              Python <FontAwesomeIcon id='python' icon={faPython} size='2x' />
            </li>
            <li>
              Firebase
              <FontAwesomeIcon id='firebase' icon={faServer} size='2x' />
            </li>
            <li>
              Github Pages
              <FontAwesomeIcon id='github' icon={faGithub} size='2x' />
            </li>

            <li>
              Git <FontAwesomeIcon id='git' icon={faGit} size='2x' />
            </li>
            <li>
              npm <FontAwesomeIcon id='npm' icon={faNpm} size='2x' />
            </li>
            <li>
              NodeJS <FontAwesomeIcon id='api' icon={faNodeJs} size='2x' />
            </li>
            <li>
              MySQL <FontAwesomeIcon id='mysql' icon={faDatabase} size='2x' />
            </li>
            <li>
              MongoDB
              <FontAwesomeIcon id='mongodb' icon={faDatabase} size='2x' />
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Skills;

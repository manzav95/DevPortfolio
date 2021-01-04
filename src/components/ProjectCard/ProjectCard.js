import React from 'react';
import './style.css';
import Tilt from 'react-tilt';

function ProjectCard(props) {
  return (
    <div className='main-card' id='container'>
      <Tilt
        className='card-wrapper'
        options={{ max: 25, reverse: true, scale: 1.05, speed: 1250 }}
      >
        <h2 className='card-title'>{props.title}</h2>
        <img className='project-image' src={props.image} alt='' />
        <a
          className='view-code'
          href={props.code}
          target='_blank'
          rel='noopener noreferrer'
        >
          View Code
        </a>
        <a
          className='live-site'
          href={props.live}
          target='_blank'
          rel='noopener noreferrer'
        >
          Live Site
        </a>
        <div className='project-info'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            quibusdam dolorum voluptatem animi sequi maxime, minima mollitia
            iste tempora obcaecati incidunt alias, inventore dicta. Natus.
          </p>
        </div>
      </Tilt>
    </div>
  );
}

export default ProjectCard;

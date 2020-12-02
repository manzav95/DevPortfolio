import React from 'react';
import './style.css';

function ProjectCard(props) {
  return (
    <div>
      <div className='card-wrapper'>
        <h2 className='card-title'>{props.title}</h2>
        <img className='project-image' src={props.image} alt='' />
        <a className='view-code' href={props.code}>
          View Code
        </a>
        <a className='live-site' href={props.live}>
          Live Site
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;

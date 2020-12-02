import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './style.css';

function Projects() {
  return (
    <div>
      <div className='project-wrapper'>
        <h2 className='project-header'>Projects</h2>
        <div className='project-container'>
          <ProjectCard
            title='Project Title'
            live='https://www.myspace.com'
            code='https://www.github.com'
            image='https://via.placeholder.com/350x250.png/000000/ffffff?text=Project+Picture+Here'
          />
          <ProjectCard
            title='Project Title'
            live='https://www.myspace.com'
            code='https://www.github.com'
            image='https://via.placeholder.com/350x250.png/000000/ffffff?text=Project+Picture+Here'
          />
          <ProjectCard
            title='Project Title'
            live='https://www.myspace.com'
            code='https://www.github.com'
            image='https://via.placeholder.com/350x250.png/000000/ffffff?text=Project+Picture+Here'
          />
          <ProjectCard
            title='Project Title'
            live='https://www.myspace.com'
            code='https://www.github.com'
            image='https://via.placeholder.com/350x250.png/000000/ffffff?text=Project+Picture+Here'
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;

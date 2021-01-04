import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import primavera from '../../images/primaverataxx.png';
import deadline from '../../images/deadline.png';
import fridgetotable from '../../images/fridgetotable.png';
import crystalgame from '../../images/crystalgame.png';

import './style.css';

function Projects() {
  return (
    <div>
      <div className='project-wrapper' id='projects'>
        <h2 className='project-header'>Projects</h2>
        <div className='project-container'>
          <ProjectCard
            // title='Primavera Taxx'
            live='https://primavera-taxx.netlify.app/'
            code='https://github.com/manzav95/PrimaveraTaxx'
            image={primavera}
          />
          <ProjectCard
            // title='Fridge To Table'
            live=' '
            code='https://github.com/surigao86/FridgeToTable/tree/master/frontend'
            image={fridgetotable}
          />
          <ProjectCard
            // title='Deadline'
            live=' '
            code='https://github.com/jongomer22/deadline'
            image={deadline}
          />
          <ProjectCard
            // title='Crystal Game'
            live='https://manzav95.github.io/Crystal-Collectors-Game/'
            code='https://github.com/manzav95/Crystal-Collectors-Game'
            image={crystalgame}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;

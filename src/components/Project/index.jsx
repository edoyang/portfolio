import { projects } from './index.js';
import React from 'react';
import './style.scss';

const Project = () => {
  return (
    <div className="padding-lg">
      <p className='font-md'>Projects</p>
      <div className="projects">
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <div className="project">
              <div className="project-img">
                <img src={project.img || "/"} alt={project.title} />
              </div>
              <div className="project-details">
                <h1 className="project-title">{project.title}</h1>
                <div className="project-side">
                  <p className="project-date">{project.date}</p>
                  <p className="project-tech">{project.tech}</p>
                </div>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
            {index < projects.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Project;

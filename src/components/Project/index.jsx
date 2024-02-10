import { projects } from './index.js';
import React from 'react';
import './style.scss';

const Project = () => {
  const renderDescriptionWithLineBreaks = (description) => {
    return description.split('\n').map((line, index, array) => (
      <React.Fragment key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="padding-lg">
      <p className='font-md'>Projects</p>
      <div className="projects">
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <div className="project">
              <div className="project-img">
                <img src={project.img || "/"} alt={project.title} />
                <div className="options">                    
                  <a href={project.repo} target='_blank'>
                    <img src="repo.svg" alt="repo" />
                    <span className="link-text">See Repositories</span> {/* Added span here */}
                  </a>
                  <a href={project.link} target='_blank'>
                    <img src="live.svg" alt="live" />
                    <span className="link-text">See Live Demo</span> {/* And here */}
                  </a>
                </div>
              </div>
              <div className="project-details">
                <h1 className="project-title">{project.title}</h1>
                <div className="project-side">
                  <p className="project-date">{project.date}</p>
                  <p className="project-tech">{project.tech}</p>
                </div>
                <p className="project-description">
                  {renderDescriptionWithLineBreaks(project.description)}
                </p>
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
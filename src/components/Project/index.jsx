import projects from "./projects.json";
import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Project = () => {
  const renderDescriptionWithLineBreaks = (description) => {
    return description.split("\n").map((line, index, array) => (
      <React.Fragment key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="padding-lg">
      <h2 className="font-title">Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <div className="project">
              <div className="project-img">
                <img src={project.img || "/"} alt={project.title} />
                <div className="options">
                  <a href={project.repo} target="_blank">
                    <img src="repo.svg" alt="repo" />
                    <span className="link-text">See Repositories</span>
                  </a>
                  <a href={project.link} target="_blank">
                    <img src="live.svg" alt="live" />
                    <span className="link-text">See Live Demo</span>
                  </a>
                </div>
              </div>
              <Link to={`/display-project/${project.id}`}>
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
              </Link>
            </div>
            {index < projects.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Project;

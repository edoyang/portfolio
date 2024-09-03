import React from "react";
import { useParams } from "react-router-dom";
import projects from "../components/Project/projects.json";
import "./DisplayProject.scss";

const DisplayProject = () => {
  // Get the project ID from the URL parameters
  const { id } = useParams();

  // Find the project in the projects array using the ID
  const project = projects.find((project) => project.id === parseInt(id));

  // Handle case where project is not found
  if (!project) {
    return <div>Project not found.</div>;
  }

  const renderDescriptionWithLineBreaks = (description) => {
    return description.split("\n").map((line, index, array) => (
      <React.Fragment key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="padding-lg display-project">
      <h1 className="project-title">{project.title}</h1>
      <div className="project-image-container">
        <img src={`/${project.img}`} alt={project.title} />
      </div>
      <div className="project-details">
        <p className="project-date">{project.date}</p>
        <p className="project-tech">{project.tech}</p>
        <p className="project-description">
          {renderDescriptionWithLineBreaks(project.description)}
        </p>
      </div>
      <div className="options">
        <a href={project.repo} target="_blank" rel="noopener noreferrer">
          <img src="/repo.svg" alt="repo" />
          <span className="link-text">See Repositories</span>
        </a>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img src="/live.svg" alt="live" />
          <span className="link-text">See Live Demo</span>
        </a>
      </div>
    </div>
  );
};

export default DisplayProject;

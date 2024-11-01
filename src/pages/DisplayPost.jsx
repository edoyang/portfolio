import React from "react";
import { useParams } from "react-router-dom";
import posts from "../components/RecentPost/posts.json";
import "./DisplayProject.scss";

const DisplayPost = () => {
  // Get the project ID from the URL parameters
  const { id } = useParams();

  // Find the project in the posts array using the ID
  const project = posts.find((project) => project.id === parseInt(id));

  // Handle case where project is not found
  if (!project) {
    return <div>Post not found.</div>;
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
      <div className="project-details">
        <p className="project-tech">{project.tech}</p>
        <p className="project-description">
          {renderDescriptionWithLineBreaks(project.description)}
        </p>
      </div>
    </div>
  );
};

export default DisplayPost;

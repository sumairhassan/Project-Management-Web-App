import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>My project details My project details </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Hassan</div>
          <div>17th January, 19:00</div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;

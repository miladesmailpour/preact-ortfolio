import React from "react";
import "./Project.css";

const Project = (props) => {
  return (
    <div className="project">
      <a href="#">
        <h2>{props.title}</h2>
        <img src={props.img.url} alt={props.img.alt} />
        <p><span>{props.decs}</span></p>
      </a>
    </div>
  );
};

export default Project;

import React from "react";
import "./ProjectList.css";
import Project from "./Project";

const ProjectsInfo = [
  {
    title: "Project 1",
    img: {
      url: "./test.jpg",
      alt: "Project 1",
    },
    decs: "Project 1 tech used: JavaScript",
  },
  {
    title: "Project 2",
    img: {
      url: "./test.jpg",
      alt: "Project 2",
    },
    decs: "Project 2 tech used: JavaScript",
  },
  {
    title: "Project 1",
    img: {
      url: "./test.jpg",
      alt: "Project 1",
    },
    decs: "Project 1 tech used: JavaScript",
  },
  {
    title: "Project 2",
    img: {
      url: "./test.jpg",
      alt: "Project 2",
    },
    decs: "Project 2 tech used: JavaScript",
  },
  {
    title: "Project 1",
    img: {
      url: "./test.jpg",
      alt: "Project 1",
    },
    decs: "Project 1 tech used: JavaScript",
  },
  {
    title: "Project 2",
    img: {
      url: "./test.jpg",
      alt: "Project 2",
    },
    decs: "Project 2 tech used: JavaScript",
  },
];

const ProjectList = () => {
  return (
    <div id="portfolio-content">
      {ProjectsInfo.map((pi) => {
        return <Project title={pi.title} img={pi.img} decs={pi.decs} />;
      })}
    </div>
  );
};

export default ProjectList;

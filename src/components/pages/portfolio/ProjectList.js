import React from "react";
import "./ProjectList.css";
import Project from "./Project";

const ProjectsInfo = [
  {
    title: "Minal Fantasy",
    img: {
      url: "./img/p3.png",
      alt: "Minal Fantasy",
    },
    decs: "Game Paltform (Express, NoSql, Graphql, etc.)",
    url: "https://minal-fantasy-547c1b57de9f.herokuapp.com/play",
  },
  {
    title: "Quiz",
    img: {
      url: "./img/quiz.png",
      alt: "Quiz",
    },
    decs: "A online quiz (JavaScript, HTML, CSS)",
    url: "https://miladesmailpour.github.io/quiz-code/",
  },
  {
    title: "COTER",
    img: {
      url: "./img/coter.png",
      alt: "coter",
    },
    decs: "Social Media Paltform (Express, MYSQL, etc.)",
    url: "https://coter-app-ead89d3057b0.herokuapp.com/",
  },
  {
    title: "Note Taker",
    img: {
      url: "./img/note.png",
      alt: "note taker",
    },
    decs: "Organize the daily Notes (Express, Heroku)",
    url: "https://morning-fortress-95302.herokuapp.com/notes",
  },
  {
    title: "Weather Dashboard",
    img: {
      url: "./img/weather.png",
      alt: "Weather Dashboard",
    },
    decs: "Keep track of Weather (JavaScript, HTML, CSS)",
    url: "https://miladesmailpour.github.io/weather-dashboard/",
  },
  {
    title: "Worker Day Scheduler",
    img: {
      url: "./img/scheduler.png",
      alt: "worker day scheduler",
    },
    decs: "Manage your work day (JavaScript, HTML, CSS)",
    url: "https://miladesmailpour.github.io/worker-day-scheduler/",
  },
  {
    title: "Regex Tutorial",
    img: {
      url: "./img/regex.png",
      alt: "regex tutorial",
    },
    decs: "demonstrate the defination of the Regex (GitHub, Regex)",
    url: "https://gist.github.com/miladesmailpour/8eca0b7092012fa57701214c960deff6/",
  },
];

const ProjectList = () => {
  return (
    <div id="portfolio-content">
      {ProjectsInfo.map((pi) => {
        return (
          <Project title={pi.title} img={pi.img} decs={pi.decs} url={pi.url} />
        );
      })}
    </div>
  );
};

export default ProjectList;

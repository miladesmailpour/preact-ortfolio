import React from "react";
import "./Portfolio.css";
import ProjectList from "./portfolio/ProjectList";

const Portfolio = () => {
  return (
    <main>
      <div>
        <h1 id="portfolio-title">Portfolio</h1>
        <ProjectList />
      </div>
    </main>
  );
};

export default Portfolio;

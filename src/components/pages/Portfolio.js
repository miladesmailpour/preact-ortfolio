import React from "react";
import "./Portfolio.css";
import ProjectList from "./portfolio/ProjectList";

const Portfolio = () => {
  return (
    <main>
      <div>
        {/* <h2 id="portfolio-title">Portfolio</h2> */}
        <ProjectList />
      </div>
    </main>
  );
};

export default Portfolio;

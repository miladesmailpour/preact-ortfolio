import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <main>
      <div>
        <div id="resume">
          <h2 id="resume-title">Skills and Experiences</h2>
          <div id="resume-link">
            <div id="resume-img">
              <a
                href="https://drive.google.com/file/d/1DT81mnQwMXoGW1b96pGCUykCsGW_fEtJ/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./img/download.gif" alt="PDF" />
              </a>
            </div>
          </div>
        </div>
        <div id="resume-content">
          <div id="resume-text">
            <h4>TECHNICAL SKILLS</h4>
            <ul>
              <li>
                Languages and Frameworks: JavaScript, JAVA, PHP, ReactJS, VueJS,
                React Native, NodeJS, .NET, Laravel, Spring, MySQL, MS SQL
                Server, NoSQL (MongoDB, DynamoDB, CosmosDB).
              </li>
              <li>
                Markup Languages/data interchange/Styling: HTML5, XML, JSON,
                CSS3, Bootstrap, Tailwind{" "}
              </li>
              <li>
                Databases: MySQL, Microsoft SQL Server, NoSQL (MongoDB, S3,
                DynamoDB, CosmosDB)
              </li>
              <li>
                Design/Analysis/Test/Software Management: UML, Visual paradigm,
                Figma, Unit Test, TDD, Jest, Selenium, dev Tools, MS SQL
                profiler, Jira, Teams, Project Insight, Asana, Microsoft
                Project, Git, TFS
              </li>
            </ul>
            <h4>EXPERIENCES </h4>
            <h6>Giesecke+Devrient Mobile Security</h6>
            <p>
              As a Full-stack Developer at Giesecke+Devrient Mobile Security,
              designed and implemented APIs, utilizing REST architecture, to
              retrieve user-written scripts and provide enhanced data validation
              and customization control. Led the implementation of data
              processing functionality for parallel processing and merging,
              improving application performance. Additionally, designed a
              user-friendly interface for increased user control and developed
              efficient table structures and stored procedures for managing
              incoming data. Processing data on HSM servers, maintaining,
              debugging, and writing various tests for feature enhancements.
            </p>
            <h6>FocusedQ</h6>
            <p>
              As a Full-stack Developer at FocusedQ, designed and implemented a
              send invitation service using PHP and Laravel framework, allowing
              customers to effectively utilize promotions received through email
              or message. Collaborated with third-party services to streamline
              scheduling processes between Users (Clients and Contractors) and
              created reusable components for mail invitation services. My role
              included providing documentation, usable samples, required unit
              and integration tests, and implementing GraphQL APIs for seamless
              software delivery.
            </p>
            <h6>10Count</h6>
            <p>
              As a Front-end Developer at 10Count, designed and implemented a
              chat system using React Native to facilitate effective
              communication between trainers and clients. Successfully
              implemented the required APIs, higher-order components (HOCs), and
              data structures using the MERN stack and socket.io. Additionally,
              developed a sophisticated location-sharing system integrating
              various APIs (Geocoding, Calendar, WeatherAPI, COVID-19),
              enhancing user experience. My responsibilities also included
              designing and developing APIs for data collection and storage and
              implementing third-party APIs and components (React, Redux) for
              insightful reports and charts.
            </p>
            <h4>PROJECTS </h4>
            <h6>StatisRing </h6>
            <p>
              A Web application allows the customer to connect with their smart
              ring to manage the contact info. Tools/languages: JavaScript
              (React.js, Node.js, Typescript) Restful, MySQL, AWS.
            </p>
            <h6>Notei: AI-powered Note-taking App </h6>
            <p>
              AI-powered note-taking app for enhanced voice or keyboard to
              organize and think structuring. Tools/languages: React.js,
              Node.js, GraphQL, MongoDB (Atlas), Heroku, OpenAI, Mozilla Deep
              Speech
            </p>
            <h6>Top Fit - Capstone Project: Fitness Companion App</h6>
            <p>
              A workout app that tracks progress and guides workouts powered by
              AI. Tools/languages: Android Studio, Java, Volley, Retrofit, Room,
              MySQL, Google Maps SDK, XML
            </p>

            <h4>EDUCATION</h4>
            <ul>
              <li>
                <span>Boot Camp Certificate: UofT SCS Coding Boot Camp,</span> Toronto, ON A
                24-week intensive program focused on gaining technical
                programming skills in HTML5, CSS3, Javascript, JQuery,
                Bootstrap, Firebase, Node.js, MySQL, MongoDB, QrapgQL, Express,
                ReactJS. Unit Test, TDD, Jest, etc.
              </li>
              <li>
                <span>Advanced Diploma: George Brown College,</span> Toronto, ON A 3-year
                intensive program, focused on gaining technical programming and
                analyzing skills in Algorithms and Data Structures, Java,
                Python, Javascript, C#, Oracle, MySQL, AWS, Heroku, Restful,
                .Net, Spring, Laravel, Unit Test, TDD, Jest, etc.
              </li>
              <li>
                <span>Software Engineering Bachelor: University of Applied Science and
                Technology,</span> Tehran, TA, 4-year intensive program, focused on
                gaining technical skills in System Design, Software
                Architecture, Problem-solving, Project Management, Team
                Collaboration, Algorithms and Data Structures, Software Testing,
                Software Design Patterns, Database Management, etc.
              </li>
              <li><span>ITC College</span> - Database Certificate Oracle 9i</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Resume;

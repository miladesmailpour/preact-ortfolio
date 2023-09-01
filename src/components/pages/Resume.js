import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <main>
      <div>
        <div id="resume">
          <h2 id="resume-title">Work Experience</h2>
          <div id="resume-link">
            <div id="resume-img">
              <a
                href="https://drive.google.com/file/d/1U5jBQBXZf4TJ0KB1g_EObPEDVnZRGCSv/view?usp=sharing"
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
              <li>Languages: JavaScript, JAVA, PHP</li>
              <li>University of Applied Science and Technology</li>
              Frameworks and Libraries: ReactJS, VueJS, React Native, NodeJS,
              .NET, Laravel, Spring
              <li>
                Markup Languages/data interchange/Styling: HTML5, XML, JSON,
                CSS3, Bootstrap, Tailwind{" "}
              </li>
              <li>
                Databases: MySQL, Microsoft SQL Server, NoSQL (MongoDB, S3,
                DynamoDB, CosmosDB)
              </li>
              <li>
                Version Control Systems: Git, Microsoft Team Foundation Server
                (TFS)
              </li>
              <li>
                Design/Analysis/Test/Software Management: UML, Visual paradigm,
                Figma, Unit Test, TDD, Jest, Selenium, dev Tools, MS SQL
                profiler, Jira, Teams, Project Insight, Asana, Microsoft Project{" "}
              </li>
            </ul>
            <h4>EXPERIENCES </h4>
            <h6>StatisRing </h6>
            <p>
              As a Full-stack Developer at StatisRing, I was responsible for
              developing and deploying highly interactive web applications
              utilizing JavaScript (React.js, NodeJS) on AWS. My role also
              involved integrating Restful APIs and external web services to
              ensure optimal performance on both mobile and desktop platforms. I
              provided SEO solutions for single-page apps and contributed to the
              design of architecture patterns for application scalability,
              deployment, monitoring, and security. Additionally, I established
              static analysis code quality rules to align microservices with
              future state design, promoting clean, modular web-based SaaS
              applications. I collaborated with teams to create documentation,
              samples, and necessary unit and integration tests.
            </p>
            <h6>Giesecke+Devrient Mobile Security</h6>
            <p>
              As a Full-stack Developer at Giesecke+Devrient Mobile Security, I
              designed and implemented APIs, utilizing REST architecture, to
              retrieve user-written scripts and provide enhanced data validation
              and customization control. I led the implementation of data
              processing functionality for parallel processing and merging,
              improving application performance. Additionally, I designed a
              user-friendly interface for increased user control and developed
              efficient table structures and stored procedures for managing
              incoming data. My responsibilities included processing data on HSM
              servers, maintaining, debugging, and writing various tests for
              feature enhancements.
            </p>
            <h6>FocusedQ</h6>
            <p>
              As a Full-stack Developer at FocusedQ, I designed and implemented
              a send invitation service using PHP and Laravel framework,
              allowing customers to effectively utilize promotions received
              through email or message. I collaborated with third-party services
              to streamline scheduling processes between Users (Clients and
              Contractors) and created reusable components for mail invitation
              services. My role included providing documentation, usable
              samples, required unit and integration tests, and implementing
              GraphQL APIs for seamless software delivery.
            </p>
            <h6>10Count</h6>
            <p>
              In my role as a Front-end Developer at 10Count, I designed and
              implemented a chat system using React Native to facilitate
              effective communication between trainers and clients. I
              successfully implemented the required APIs, higher-order
              components (HOCs), and data structures using the MERN stack and
              socket.io. Additionally, I developed a sophisticated
              location-sharing system integrating various APIs (Geocoding,
              Calendar, WeatherAPI, COVID-19), enhancing user experience. My
              responsibilities also included designing and developing APIs for
              data collection and storage and implementing third-party APIs and
              components (React, Redux) for insightful reports and charts.
            </p>
            <h4>EDUCATION</h4>
            <ul>
              <li>
                George Brown College - Advanced Diploma of Computer Programmer
                Analyst (2017 - 2020)
              </li>
              <li>University of Applied Science and Technology</li>
              <ul>
                <li>Bachelor of Software Engineering (2006 - 2008)</li>
                <li>Advanced Diploma of Software Engineering (2001 - 2004)</li>
              </ul>
              <li>
                ITC College - Database Certificate Oracle 9i (2006 - 2006)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Resume;

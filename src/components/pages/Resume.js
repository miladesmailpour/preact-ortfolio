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
                href="https://drive.google.com/file/d/1LyZq6sUOL_njLFi6-8av2H4gRmwz17KT/view?usp=sharing"
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
            <h4>StatisRing </h4>
            <p>
              Develop highly interactive web applications utilizing
              JavaScript(React.js, NodeJS) on cloud(AWS) and integrate Restful
              APIs, and external web services ensuring high performance on
              Mobile and Desktop. Provide SEO solutions for single-page apps. •
              Drafted details design objectives and created architecture
              patterns for application design, scalability, deployment, cloud,
              monitoring, security, and infrastructure. Define static analysis
              code quality rules to evaluate Microservices to align with the
              future state design. Write clean, modular web-based SaaS
              applications in an agile and ever-changing environment. Create the
              documentation, Samples, required unit test, and integration tests.
            </p>
            <h4> Giesecke+Devrient Mobile Security</h4>
            <p>
              Design and implement APIs to retrieve the written script by users
              and apply its logic to give the user more control over its data
              validation and customization. implement the functionality to
              splitting the data to process parallel and merge it, based on its
              category Design and implement a user-friendly interface to have
              more control over the application in HSM. Design and implement the
              table structures and relevant stored procedures to convert the
              incoming data from APIs or flat files fed by the clients.
              Processing the Data on HSM servers by writing down and
              Implementing the required functionality. Controlling the data flow
              of the retrieved and processed data to the application to use by
              other teams. Maintaining, debugging, and writing unit tests,
              integration tests, and end-to-end tests for the features.
            </p>
            <h4>FocusedQ</h4>
            <p>
              Design and implement the send invitation service using PHP and
              Laravel framework to allow customers to use promotions that will
              be received through email or message. Use third parties to make
              scheduling smoother between Users(Clients and Contractors) •
              Design and implement reusable components to handle mail invitation
              service.to send emails Provide documentation, usable samples,
              required unit test, and integration tests. implement advice
              service to help customers in every step they take to make a
              remarkable experience. implement warranty service to ensure
              customers have all support they need even after the purchase. •
              Design and implement Restful APIs using PHP/Laravel framework, Vue
              components, and MySQL tables to Do it a reliable service on Azure.
            </p>
            <h4>10Count</h4>
            <p>
              Design and implement a chat system with react native for trainers
              to connect and share information and reduce the time-consuming and
              complexity of using the different sharing systems. Implement
              required APIs, HOCs, and data structure from scratch using MERN
              stack, socket.io, react hooks, and lazy loading. Design and
              implement a share location system for the clients to find the
              location during the pandemic. integrate Maps Geocoding, Calendar,
              WeatherAPI, COVID-19 APIs, etc. to make Intelligent UI/UX. Design
              and implement the APIs to connect to the existing sensors to
              collect and store the data. Transfer the data sent by the
              Microsoft WCF to the newly designed front-end use react. implement
              third-party APIs and components using React and Redux to Design
              reports and charts.
            </p>
            <h4>Education</h4>
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

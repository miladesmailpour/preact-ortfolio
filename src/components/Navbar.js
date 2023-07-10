import React from "react";

const Navbar = ({ currentPage, handlePageChange }) => {
  return (
    <div id="navbar-container">
      <ul className="nav nav-pills navbar-item-bg">
        <li className="nav-item  custom-nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active custom-nav-link" : "nav-link"}
          >
            About
          </a>
        </li>
        <li className="nav-item custom-nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active custom-nav-link" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item  custom-nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active custom-nav-link" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
        <li className="nav-item dropdown custom-nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active custom-nav-link" : "nav-link custom-nav-link"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

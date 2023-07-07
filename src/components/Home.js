import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import './Home.css'

const Home = () => {
  const [currentPage, setCurrentPage] = useState("About");

  // This method rendering differant component base on currentPage value
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      case "Portfolio":
        return <Portfolio />;
      default:
        return <About />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default Home;

import React from "react";

const styles = {
  headerStyle: {
    background: "red",
  },
  headingStyle: {
    fontSize: "100px",
  },
};

const Header = () => {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Milad Esmaeelpour</h1>
    </header>
  );
};

export default Header;

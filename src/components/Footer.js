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
    <footer style={styles.headerStyle} className="header">
      <a href="https://github.com/miladesmailpour/">GitHub</a>
      <a href="https://www.linkedin.com/in/milad-esmaeelpour/">Linkedin</a>
    </footer>
  );
};

export default Header;

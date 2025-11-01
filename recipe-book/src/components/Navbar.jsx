import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Recipe Book</h1>
      <div className="navbar-right">
        <span className="navbar-link">Home</span>
        <span className="navbar-menu">⋮</span>
      </div>
    </nav>
  );
};

export default Navbar;
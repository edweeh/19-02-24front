// NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the NavBar.css file

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you will create Navbar.css for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">RamTeq</Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar; 
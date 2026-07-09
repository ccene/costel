import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          AVE <span>System</span>
        </Link>
        
        <button className="nav-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''} 
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/modules" 
              className={isActive('/modules') ? 'active' : ''} 
              onClick={closeMenu}
            >
              Modules
            </Link>
          </li>
          <li>
            <Link 
              to="/how-it-works" 
              className={isActive('/how-it-works') ? 'active' : ''} 
              onClick={closeMenu}
            >
              How AVE Works
            </Link>
          </li>
          <li>
            <Link 
              to="/installations" 
              className={isActive('/installations') ? 'active' : ''} 
              onClick={closeMenu}
            >
              Installations
            </Link>
          </li>
          <li>
            <Link 
              to="/partners" 
              className={isActive('/partners') ? 'active' : ''} 
              onClick={closeMenu}
            >
              Partners
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={isActive('/about') ? 'active' : ''} 
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={isActive('/contact') ? 'active' : ''} 
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

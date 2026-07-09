import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            MyAMR
          </Link>
        </div>

        <div className="navbar-toggle" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </div>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/modules" className="navbar-link" onClick={closeMobileMenu}>
              Modules
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/how-it-works" className="navbar-link" onClick={closeMobileMenu}>
              How MyAMR Works
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/installations" className="navbar-link" onClick={closeMobileMenu}>
              Installations
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/partners" className="navbar-link" onClick={closeMobileMenu}>
              Partners
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

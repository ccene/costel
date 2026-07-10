// @ts-nocheck
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Footer(): React.ReactElement {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-brand">
            <h4>MyAMR</h4>
            <p>Energy consumption data reading and management system</p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/modules">Modules</Link></li>
            <li><Link to="/how-it-works">How MyAMR Works</Link></li>
            <li><Link to="/installations">Installations</Link></li>
            <li><Link to="/partners">Partners</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>NC13 Industries Ltd.</h4>
          <ul className="footer-links">
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> info@myamr.co.uk
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} /> +44 (0) 1234 567890
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> UK
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NC13 Industries Ltd. | All rights reserved</p>
      </div>
    </footer>
  );
}

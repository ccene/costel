import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>AVE System</h4>
            <p>
              A system designed to automatically read energy-consumption data from 
              different types of devices, validate it, show it on a PC, in a Web 
              browser, or on a tablet/smartphone, and pass it to a CRM system for 
              billing purposes.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul style={{ listStyle: 'none' }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/modules">Modules</Link></li>
              <li><Link to="/how-it-works">How AVE Works</Link></li>
              <li><Link to="/installations">Installations</Link></li>
              <li><Link to="/partners">Partners</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p><i className="fas fa-map-marker-alt"></i> Cechovo nabrezi 1790, 530 03 Pardubice, Czech Republic</p>
            <p><i className="fas fa-phone"></i> +420 466 024 111</p>
            <p><i className="fas fa-phone"></i> +420 466 024 423</p>
            <p><i className="fas fa-envelope"></i> support-ave@geovap.cz</p>
          </div>
          
          <div className="footer-section">
            <h4>GEOVAP</h4>
            <p>Reliance SCADA/HMI system</p>
            <div style={{ marginTop: '1rem' }}>
              <a href="#" style={{ marginRight: '1rem' }}>
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" style={{ marginRight: '1rem' }}>
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} GEOVAP, spol. s r.o. | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

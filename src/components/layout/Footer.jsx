import React from 'react';
import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer shell">
      <div className="footer-top">
        <div className="footer-brand-col">
          <Link to="/" aria-label="PixelCore Tech home">
            <img src="/assets/pixelcore-logo.webp" alt="PixelCore Tech logo" />
          </Link>
          <p>Expert engineering for embedded Linux, custom firmware, full-stack platforms, and Android apps.</p>
          
          <div className="social-links">
            <a href="https://www.linkedin.com/company/pixelcore-it-solutions/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-links-col">
          <h4>Services</h4>
          <Link to="/services">Software Services</Link>
          <Link to="/expertise">Our Expertise</Link>
          <Link to="/solutions">Tech Solutions</Link>
        </div>

        <div className="footer-links-col">
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/projects">Case Studies</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-links-col contact-col">
          <h4>Get in Touch</h4>
          <p>contact@pixelcore-tech.com</p>
          <p>projects@pixelcore-tech.com</p>
          <p style={{ marginTop: '10px' }}>Tunis, Tunisia<br/>Working worldwide.</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {currentYear} PixelCore Tech. All rights reserved.</p>
        <button className="back-to-top" onClick={scrollToTop}>
          <ArrowUp size={16} /> Back to top
        </button>
      </div>
    </footer>
  );
};

export default Footer;

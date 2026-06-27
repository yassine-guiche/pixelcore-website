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
      <div className="footer-brand">
        <Link to="/" aria-label="PixelCore Tech home">
          <img src="/assets/pixelcore-logo.png" alt="PixelCore Tech logo" />
        </Link>
        <p>Embedded Linux. Firmware. Full-stack. Android.</p>
        
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
      
      <nav aria-label="Footer navigation">
        <Link to="/services">Services</Link>
        <Link to="/expertise">Expertise</Link>
        <Link to="/solutions">Solutions</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      
      <div className="footer-right">
        <button className="back-to-top" onClick={scrollToTop}>
          <ArrowUp size={16} /> Back to top
        </button>
        <p>© {currentYear} PixelCore Tech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

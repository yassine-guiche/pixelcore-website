import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove('menu-open');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`site-header ${isScrolled ? 'scrolled' : ''}`} 
      id="top"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
    >
      <Link className="brand" to="/" aria-label="PixelCore Tech home" onClick={closeMenu}>
        <img src="/assets/pixelcore-logo.png" alt="PixelCore Tech logo" />
      </Link>

      <button 
        className="nav-toggle" 
        type="button" 
        aria-label="Open navigation" 
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`site-nav ${isOpen ? 'open' : ''}`} aria-label="Main navigation">
        <Link to="/services" className={currentPath === '/services' ? 'active' : ''} aria-current={currentPath === '/services' ? 'page' : undefined} onClick={closeMenu}>Services</Link>
        <Link to="/projects" className={currentPath === '/projects' ? 'active' : ''} aria-current={currentPath === '/projects' ? 'page' : undefined} onClick={closeMenu}>Projects</Link>
        <Link to="/about" className={currentPath === '/about' ? 'active' : ''} aria-current={currentPath === '/about' ? 'page' : undefined} onClick={closeMenu}>About</Link>
        <Link className="nav-cta" to="/contact" onClick={closeMenu}>Start a Project</Link>
      </nav>
    </motion.header>
  );
};

export default Header;

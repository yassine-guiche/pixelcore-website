import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
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
      // Only run scroll spy on the homepage
      if (location.pathname === '/') {
        const sections = document.querySelectorAll('section[id]');
        let current = '';

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
          }
        });

        setActiveSection(current);
      } else {
        setActiveSection('');
      }
      
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    // Run it once on mount to catch initial position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Helper to determine if a nav item is active
  const isActive = (sectionId) => {
    if (currentPath === '/') return activeSection === sectionId;
    return currentPath === `/${sectionId}`; // Fallback if they are on the actual dedicated subpage
  };

  return (
    <motion.header 
      className={`site-header ${isScrolled ? 'scrolled' : ''}`} 
      id="top"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
    >
      <HashLink smooth className="brand" to="/#top" aria-label="PixelCore Tech home" onClick={closeMenu}>
        <img src="/assets/pixelcore-logo.png" alt="PixelCore Tech logo" />
      </HashLink>

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
        <HashLink smooth to="/#services" className={isActive('services') ? 'active' : ''} onClick={closeMenu}>Services</HashLink>
        <HashLink smooth to="/#expertise" className={isActive('expertise') ? 'active' : ''} onClick={closeMenu}>Expertise</HashLink>
        <HashLink smooth to="/#solutions" className={isActive('solutions') ? 'active' : ''} onClick={closeMenu}>Solutions</HashLink>
        <HashLink smooth to="/#work" className={isActive('work') ? 'active' : ''} onClick={closeMenu}>Projects</HashLink>
        <HashLink smooth to="/#feedback" className={isActive('feedback') ? 'active' : ''} onClick={closeMenu}>Testimonials</HashLink>
        <HashLink smooth to="/#about" className={isActive('about') ? 'active' : ''} onClick={closeMenu}>About</HashLink>
        <HashLink smooth className="nav-cta" to="/#contact" onClick={closeMenu}>Start a Project</HashLink>
      </nav>
    </motion.header>
  );
};

export default Header;

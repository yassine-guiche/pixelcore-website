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
    // 1. Scroll spy using IntersectionObserver (highly performant)
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && location.pathname === '/') {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    // 2. Throttle the 'isScrolled' check for the header background
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    if (location.pathname !== '/') setActiveSection('');
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
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
        <img src="/assets/pixelcore-logo.webp" alt="PixelCore Tech logo" />
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

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

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
      const sections = document.querySelectorAll('section[id]');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current);
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
      <a className="brand" href="#top" aria-label="PixelCore Tech home" onClick={closeMenu}>
        <img src="/assets/pixelcore-logo.png" alt="PixelCore Tech logo" />
      </a>

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
        <a href="#services" className={activeSection === 'services' ? 'active' : ''} aria-current={activeSection === 'services' ? 'page' : undefined} onClick={closeMenu}>Services</a>
        <a href="#expertise" className={activeSection === 'expertise' ? 'active' : ''} aria-current={activeSection === 'expertise' ? 'page' : undefined} onClick={closeMenu}>Expertise</a>
        <a href="#solutions" className={activeSection === 'solutions' ? 'active' : ''} aria-current={activeSection === 'solutions' ? 'page' : undefined} onClick={closeMenu}>Solutions</a>
        <a href="#work" className={activeSection === 'work' ? 'active' : ''} aria-current={activeSection === 'work' ? 'page' : undefined} onClick={closeMenu}>Projects</a>
        <a href="#feedback" className={activeSection === 'feedback' ? 'active' : ''} aria-current={activeSection === 'feedback' ? 'page' : undefined} onClick={closeMenu}>Testimonials</a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''} aria-current={activeSection === 'about' ? 'page' : undefined} onClick={closeMenu}>About</a>
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Start a Project</a>
      </nav>
    </motion.header>
  );
};

export default Header;

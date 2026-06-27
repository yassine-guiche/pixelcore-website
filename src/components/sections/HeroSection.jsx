import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';
import './HeroSection.css';

const TypewriterText = ({ lines }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    if (currentChar < lines[currentLine].text.length) {
      const timeout = setTimeout(() => {
        setCurrentChar((prev) => prev + 1);
      }, lines[currentLine].speed || 30);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);
      }, lines[currentLine].delay || 300);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, lines]);

  return (
    <pre>
      {lines.slice(0, currentLine).map((line, i) => (
        <div key={i} className="typing-line">{line.text}</div>
      ))}
      {currentLine < lines.length && (
        <div className="typing-line typing-cursor">
          {lines[currentLine].text.substring(0, currentChar)}
        </div>
      )}
    </pre>
  );
};

const MagneticButton = ({ children, className, href, style }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = buttonRef.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      className={className}
      style={{ ...style }}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
    >
      {children}
    </motion.a>
  );
};

const HeroSection = () => {
  const { x, y } = useMousePosition();
  
  const terminalLines = [
    { text: '$ pixelcore build --target arm64', speed: 50, delay: 500 },
    { text: '[ok] Yocto layers synced', speed: 10, delay: 200 },
    { text: '[ok] Kernel + DTS validated', speed: 10, delay: 200 },
    { text: '[ok] Root filesystem optimized', speed: 10, delay: 200 },
    { text: '[ok] OTA package generated', speed: 10, delay: 200 },
    { text: '[ok] Android API bridge ready', speed: 10, delay: 200 }
  ];

  return (
    <section className="hero shell">
      <div className="hero-grid-bg"></div>
      <div className="hero-copy">


        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          <span></span> Embedded Linux • Firmware • Web • Android • Digital Growth
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Embedded Linux, Firmware, Full-Stack &
          <span>Digital Growth Solutions</span>
        </motion.h1>
        
        <motion.p 
          className="lead"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          PixelCore Tech helps businesses build reliable embedded systems, software platforms, Android apps, and marketing-ready digital experiences — from idea to production.
        </motion.p>
        
        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
        >
          <MagneticButton className="btn primary" href="#contact">Start a Project</MagneticButton>
          <MagneticButton className="btn secondary" href="#contact">Book a Consultation</MagneticButton>
          <MagneticButton className="btn secondary" href="#services" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)' }}>View Services</MagneticButton>
        </motion.div>
        
        <motion.div 
          className="trust-strip" 
          aria-label="PixelCore trust indicators"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: '40px' }}
        >
          <div>
            <strong>Top Rated</strong>
            <span>Upwork profile</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Job Success</span>
          </div>
          <div>
            <strong>5.0</strong>
            <span>Client rating</span>
          </div>
          <div>
            <strong>100+</strong>
            <span>Projects</span>
          </div>
          <div>
            <strong>Worldwide</strong>
            <span>Remote Support</span>
          </div>
        </motion.div>
      </div>

      <div className="hero-visual" aria-label="PixelCore engineering dashboard preview">
        <motion.div 
          className="logo-hologram"
          animate={{ 
            x: x * -15, 
            y: y * -15 
          }}
          transition={{ type: 'spring', stiffness: 75, damping: 20 }}
        >
          <img src="/assets/pixelcore-logo.webp" alt="PixelCore IT Solutions logo" />
        </motion.div>

        <motion.div 
          className="terminal-card glass-panel"
          animate={{ 
            x: x * 25, 
            y: y * 25,
            rotateX: y * -5,
            rotateY: x * 5
          }}
          transition={{ type: 'spring', stiffness: 75, damping: 20 }}
        >
          <div className="window-bar"><span></span><span></span><span></span><em>build_firmware.sh</em></div>
          <TypewriterText lines={terminalLines} />
        </motion.div>

        <motion.div 
          className="status-card glass-panel"
          animate={{ 
            x: x * -20, 
            y: y * -20,
            rotateX: y * 5,
            rotateY: x * -5
          }}
          transition={{ type: 'spring', stiffness: 75, damping: 20 }}
        >
          <small>System status</small>
          <div className="status-row"><span>Firmware</span><strong>Stable</strong></div>
          <div className="status-row"><span>API</span><strong>Secure</strong></div>
          <div className="status-row"><span>Mobile</span><strong>Ready</strong></div>
        </motion.div>

        <motion.div 
          className="chip-card glass-panel"
          animate={{ 
            x: x * 15, 
            y: y * 15 
          }}
          transition={{ type: 'spring', stiffness: 75, damping: 20 }}
        >
          <span>Linux BSP</span>
          <span>Drivers</span>
          <span>Networking</span>
          <span>Cloud</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

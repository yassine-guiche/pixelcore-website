import React from 'react';
import { motion } from 'framer-motion';
import './Background.css';

const Background = () => {
  return (
    <div className="site-bg" aria-hidden="true">
      {/* Animated Grid Layer */}
      <div className="grid-layer"></div>
      
      {/* Glowing Aurora Orbs */}
      <motion.div 
        className="orb orb-cyan"
        animate={{ 
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.9, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="orb orb-green"
        animate={{ 
          x: [0, -150, 50, 0],
          y: [0, 100, -100, 0],
          scale: [1, 1.3, 1, 1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 2 }}
      />
      <motion.div 
        className="orb orb-accent"
        animate={{ 
          x: [0, 80, -80, 0],
          y: [0, 150, -50, 0],
          scale: [1, 0.8, 1.2, 1]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear", delay: 5 }}
      />

      {/* Decorative Circuit SVG representation */}
      <div className="circuit circuit-left"></div>
      <div className="circuit circuit-right"></div>
    </div>
  );
};

export default Background;

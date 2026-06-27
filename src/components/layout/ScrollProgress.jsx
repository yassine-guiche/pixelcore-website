import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, var(--brand-cyan), var(--brand-green))',
        transformOrigin: '0%',
        scaleX: scrollYProgress,
        zIndex: 100,
      }}
    />
  );
};

export default ScrollProgress;

import React from 'react';
import './TechMarquee.css';

const TechMarquee = () => {
  const technologies = [
    "Yocto", "OpenWrt", "Buildroot", "Linux Kernel", 
    "Device Tree", "BSP", "React", "Node.js", "Android"
  ];

  // Duplicate for seamless looping
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <section className="shell" aria-label="Technology keywords">
      <div className="logo-ribbon-container">
        <div className="logo-ribbon animate-marquee">
          {duplicatedTech.map((tech, index) => (
            <span 
              key={index} 
              className={`tech-chip ${index % 2 === 0 ? 'cyan' : 'green'}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;

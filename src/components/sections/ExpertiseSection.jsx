import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './ExpertiseSection.css';

const MarqueeRow = ({ items, speed, direction }) => {
  return (
    <div className="marquee-container">
      <div className={`marquee-content ${direction}`} style={{ '--duration': `${speed}s` }}>
        {[...items, ...items, ...items, ...items].map((tech, index) => (
          <span key={index} className="tech-chip-premium">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const ExpertiseSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const categories = [
    {
      title: "Embedded & Hardware",
      items: ["Linux", "Yocto", "Buildroot", "OpenWrt", "U-Boot", "Kernel", "Device Tree", "C/C++", "Bash"]
    },
    {
      title: "Software & Cloud",
      items: ["Python", "Node.js", "React", "Android", "Kotlin", "Java", "REST APIs", "Docker", "Firebase", "Cloud", "DevOps"]
    },
    {
      title: "Networking & Growth",
      items: ["WireGuard", "OpenVPN", "Meta Ads", "SEO Basics", "Landing Pages", "Brand Content"]
    }
  ];

  return (
    <section className="section expertise-section" id="expertise" style={{ overflow: 'hidden' }}>
      <div className="shell">
        <motion.div 
          ref={headerRef}
          className="section-heading expertise-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <p className="kicker">Technology Stack</p>
          <h2>Engineering & Digital Expertise</h2>
        </motion.div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginTop: '40px' }}>
        <MarqueeRow items={categories[0].items} speed={40} direction="left" />
        <MarqueeRow items={categories[1].items} speed={50} direction="right" />
        <MarqueeRow items={categories[2].items} speed={35} direction="left" />
      </div>
    </section>
  );
};

export default ExpertiseSection;

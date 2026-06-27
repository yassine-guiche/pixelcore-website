import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './StackSection.css';

const StackNode = ({ number, title, description, isActive, onHover, index }) => {
  return (
    <motion.article 
      className={`stack-node glass-panel ${isActive ? 'active' : ''}`}
      onMouseEnter={onHover}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <strong>{number}</strong>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.article>
  );
};

const StackSection = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default to Embedded Linux
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const stackData = [
    { number: "01", title: "Hardware", desc: "ARM boards, routers, IoT devices, gateways." },
    { number: "02", title: "Embedded Linux", desc: "Yocto, OpenWrt, Buildroot, BSP, kernel." },
    { number: "03", title: "System Services", desc: "Networking, VPN, OTA, recovery, daemons." },
    { number: "04", title: "Cloud & APIs", desc: "Backend, database, dashboards, automation." },
    { number: "05", title: "Android", desc: "Mobile control, field apps, user interfaces." },
  ];

  return (
    <section className="section shell stack-section" id="stack" ref={sectionRef}>
      <motion.div 
        className="stack-copy"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6 }}
      >
        <p className="kicker">System architecture</p>
        <h2>From board bring-up to business platform.</h2>
        <p>
          PixelCore connects the full product chain: hardware, embedded Linux, system services, backend APIs, dashboards, and Android applications.
        </p>
      </motion.div>

      <div className="stack-diagram">
        <motion.div 
          className="stack-line"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
        ></motion.div>
        
        {stackData.map((node, i) => (
          <StackNode 
            key={i}
            index={i}
            number={node.number}
            title={node.title}
            description={node.desc}
            isActive={activeIndex === i}
            onHover={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default StackSection;

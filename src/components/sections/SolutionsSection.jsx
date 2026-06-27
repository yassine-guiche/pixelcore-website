import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Settings, Wifi, Cloud, PieChart, Smartphone, Lightbulb, Monitor, Megaphone, Bot } from 'lucide-react';
import './SolutionsSection.css';

const SolutionsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const solutions = [
    { title: "Embedded Product Bring-Up", Icon: Cpu },
    { title: "Custom Firmware & Linux Images", Icon: Settings },
    { title: "Router / Gateway Firmware", Icon: Wifi },
    { title: "Device + Cloud Platforms", Icon: Cloud },
    { title: "Business Dashboards", Icon: PieChart },
    { title: "Android Apps", Icon: Smartphone },
    { title: "MVP & Product Consulting", Icon: Lightbulb },
    { title: "Marketing Websites", Icon: Monitor },
    { title: "Digital Campaigns", Icon: Megaphone },
    { title: "Business Automation", Icon: Bot }
  ];

  return (
    <section className="section shell solutions-section" id="solutions">
      <motion.div 
        ref={headerRef}
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <p className="kicker">Solutions</p>
        <h2>Engineering and digital solutions for real-world business growth</h2>
        <p>
          From a hardware board booting a Linux system to a high-converting digital platform, we deliver end-to-end technical outcomes.
        </p>
      </motion.div>

      <div className="solutions-grid">
        {solutions.map((sol, idx) => (
          <motion.div 
            key={idx}
            className="solution-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (idx % 5) * 0.1 }}
          >
            <div style={{ color: 'var(--brand-green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <sol.Icon size={20} />
            </div>
            <h3>{sol.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsSection;

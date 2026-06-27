import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="section shell about-section" id="about">
      <motion.div 
        className="about-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.img 
          src="/assets/pixelcore-logo.webp" 
          alt="PixelCore Tech logo" 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        
        <div className="about-content">
          <motion.p 
            className="kicker"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <MapPin size={14} /> Based in Tunis, Operating Globally
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Low-level expertise. Full-stack execution. Real-world results.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            PixelCore Tech is a premier engineering and digital growth agency. From architecting robust embedded hardware to launching scalable cloud platforms and targeted marketing campaigns, we partner with visionary teams to turn complex ideas into production-ready reality.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{ marginTop: '20px', paddingLeft: '16px', borderLeft: '2px solid var(--brand-cyan)', fontStyle: 'italic', color: 'var(--text-secondary)' }}
          >
            "We treat every client's product as if it were our own, ensuring technical excellence from the very first line of code to the final market launch."
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;

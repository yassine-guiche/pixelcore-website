import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './ProcessSection.css';

const ProcessSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const steps = [
    { title: "Discover", desc: "Technical audit, feasibility analysis, and understanding your business goals." },
    { title: "Architect", desc: "Planning hardware/software integration, product architecture, and MVP scope." },
    { title: "Build", desc: "Low-level firmware engineering, API development, and UI/UX implementation." },
    { title: "Test", desc: "Debugging, system validation, and performance optimization." },
    { title: "Deploy", desc: "Production-ready image flashing, cloud deployment, and app store release." },
    { title: "Grow", desc: "Digital marketing, social media campaigns, SEO, and brand presence expansion." },
    { title: "Maintain & Iterate", desc: "The cycle continues. We monitor analytics, maintain infrastructure, and loop back to Discover for the next big feature." }
  ];

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered, steps.length]);

  return (
    <section className="section shell process-section" id="process">
      <motion.div 
        ref={headerRef}
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <p className="kicker">Our Process</p>
        <h2>From Idea to Production to Market</h2>
        <p>
          A clean, structured pipeline ensuring technical excellence and digital success.
        </p>
      </motion.div>

      <div 
        className="process-pipeline"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {steps.map((step, idx) => {
          const isActive = activeStep === idx;
          return (
            <motion.div 
              key={idx}
              className={`process-step ${isActive ? 'active' : ''}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setActiveStep(idx)}
            >
              <div className="step-number">0{idx + 1}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 8 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      className="step-desc-wrapper"
                    >
                      <p>{step.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProcessSection;

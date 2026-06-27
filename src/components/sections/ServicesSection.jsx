import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';
import { Cpu, Router, CircuitBoard, LayoutDashboard, Smartphone, TrendingUp } from 'lucide-react';
import './ServicesSection.css';

const ServiceCard = ({ number, title, description, features, Icon, isLarge, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const baseDelay = 0.2;
  const delay = baseDelay + index * 0.15;

  return (
    <motion.article 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`service-card glass-panel ${isLarge ? 'large' : ''}`}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.02,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
    >
      <div className="icon-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(42, 143, 214, 0.1)', color: 'var(--brand-cyan)', marginBottom: '20px', position: 'relative', zIndex: 2 }}>
        <Icon size={24} />
      </div>
      <span className="card-number">{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
    </motion.article>
  );
};

const ServicesSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="section shell services-section" id="services">
      <motion.div 
        ref={headerRef}
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <p className="kicker">Core Capabilities</p>
        <h2>End-to-End Technical & Digital Services</h2>
        <p>
          We provide complete operational support — bridging the gap between deep hardware engineering and high-performance digital marketing.
        </p>
      </motion.div>

      <div className="service-grid">
        <ServiceCard 
          index={0}
          isLarge={true}
          number="01"
          Icon={Cpu}
          title="Embedded Linux & Firmware"
          description="Deep low-level engineering for Linux-based products, connected devices, industrial systems, and custom hardware platforms."
          features={[
            "Kernel configuration & debugging",
            "Device Tree / DTS / DTB work",
            "Firmware upgrade & recovery systems"
          ]}
        />
        <ServiceCard 
          index={1}
          isLarge={false}
          number="02"
          Icon={Router}
          title="OpenWrt / Networking"
          description="Build and customize router, gateway, and network appliance firmware with robust security and routing."
          features={[
            "Custom OpenWrt builds",
            "WireGuard & OpenVPN integration",
            "LTE/4G/5G gateway support"
          ]}
        />
        <ServiceCard 
          index={2}
          isLarge={false}
          number="03"
          Icon={CircuitBoard}
          title="Yocto / Buildroot BSP"
          description="Production-ready Linux image development for ARM, STM32MP, Rockchip, Amlogic, Raspberry Pi, and other platforms."
          features={[
            "Board support package integration",
            "Yocto layer customization",
            "Flash layout and image generation"
          ]}
        />
        <ServiceCard 
          index={3}
          isLarge={false}
          number="04"
          Icon={LayoutDashboard}
          title="Full-Stack IT Consulting"
          description="Build business platforms, internal tools, admin dashboards, and scalable digital systems."
          features={[
            "React, Node.js & REST APIs",
            "Business automation & DevOps",
            "Technical architecture consulting"
          ]}
        />
        <ServiceCard 
          index={4}
          isLarge={false}
          number="05"
          Icon={Smartphone}
          title="Android App Development"
          description="Android applications connected to APIs, devices, dashboards, and business workflows."
          features={[
            "Native Android applications",
            "IoT and connected-device apps",
            "App debugging and maintenance"
          ]}
        />
        <ServiceCard 
          index={5}
          isLarge={true}
          number="06"
          Icon={TrendingUp}
          title="Digital Marketing & Growth"
          description="Help businesses grow online through professional digital marketing, brand growth, and content services."
          features={[
            "Meta Ads & Campaign ideas",
            "Conversion-focused landing pages",
            "Social media content & SEO"
          ]}
        />
      </div>
    </section>
  );
};

export default ServicesSection;

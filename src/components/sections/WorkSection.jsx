import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './WorkSection.css';

const WorkCard = ({ tag, title, description, image, index }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const tiltX = isHovered ? (mousePosition.y / 300) * -15 : 0;
  const tiltY = isHovered ? (mousePosition.x / 400) * 15 : 0;

  return (
    <motion.article 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="work-card"
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      animate={{ 
        rotateX: tiltX, 
        rotateY: tiltY,
        transformPerspective: 1000
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { type: 'spring', stiffness: 400, damping: 25 }
      }}
    >
      <img src={image} alt={title} className="work-card-image" loading="lazy" />
      <div className="work-card-content">
        <span>{tag}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.article>
  );
};

const WorkSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const portfolioItems = [
    {
      tag: "OpenWrt / Networking",
      title: "Custom OpenWrt firmware",
      description: "Custom OpenWrt firmware for networking device with package integration, VPN workflows, and system services.",
      image: "/assets/networking_firmware.png"
    },
    {
      tag: "Yocto / BSP",
      title: "Yocto ARM Linux Image",
      description: "Yocto-based production image for ARM platform including layer integration, kernel settings, and rootfs optimization.",
      image: "/assets/arm_linux_image.png"
    },
    {
      tag: "Android",
      title: "Connected Mobile App",
      description: "Android application connected to backend APIs for hardware monitoring and operational tasks.",
      image: "/assets/android_app.png"
    },
    {
      tag: "Full-stack",
      title: "Admin Dashboard",
      description: "Admin dashboard for business operations, managing users, devices, and complex data models.",
      image: "/assets/technical_dashboard.png"
    },
    {
      tag: "Digital Marketing",
      title: "Marketing Landing Page",
      description: "High-conversion marketing landing page designed and deployed for a local service business.",
      image: "/assets/digital_marketing.png"
    },
    {
      tag: "Brand Growth",
      title: "Social Media Campaigns",
      description: "Social media campaign support, promotional visuals, and copywriting for product and service launches.",
      image: "/assets/brand_growth.png"
    },
    {
      tag: "System Debugging",
      title: "Firmware Recovery",
      description: "Linux boot/debugging, firmware extraction, and recovery support for unresponsive industrial boards.",
      image: "/assets/firmware_recovery.png"
    }
  ];

  return (
    <section className="section shell" id="work">
      <motion.div 
        ref={headerRef}
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <p className="kicker">Case Studies</p>
        <h2>NDA-Safe Projects & Implementations</h2>
        <p>
          Real-world engineering and digital growth solutions delivered to clients worldwide, without exposing confidential IP.
        </p>
      </motion.div>

      <div className="work-grid">
        {portfolioItems.map((item, index) => (
          <WorkCard 
            key={index}
            index={index}
            tag={item.tag}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkSection;

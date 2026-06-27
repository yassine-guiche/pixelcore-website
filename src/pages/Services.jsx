import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesSection from '../components/sections/ServicesSection';
import SolutionsSection from '../components/sections/SolutionsSection';
import TechMarquee from '../components/sections/TechMarquee';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | PixelCore Tech</title>
        <meta name="description" content="Explore PixelCore Tech's core services: Custom Embedded Linux, Firmware Development, Full-Stack Web Architecture, Android OS Customization, and Digital Marketing." />
      </Helmet>
      
      <div style={{ paddingTop: '100px' }}>
        <ServicesSection />
      </div>
      <SolutionsSection />
      <TechMarquee />
    </>
  );
};

export default Services;

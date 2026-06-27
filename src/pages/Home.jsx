import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import ExpertiseSection from '../components/sections/ExpertiseSection';
import StackSection from '../components/sections/StackSection';
import SolutionsSection from '../components/sections/SolutionsSection';
import ProcessSection from '../components/sections/ProcessSection';
import WorkSection from '../components/sections/WorkSection';
import FeedbackSection from '../components/sections/FeedbackSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';
import TechMarquee from '../components/sections/TechMarquee';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>PixelCore Tech | Embedded Linux, Firmware & Full-Stack Solutions</title>
        <meta name="description" content="PixelCore Tech is a software engineering company specializing in embedded Linux, custom firmware, full-stack IT consulting, Android apps, and digital growth." />
      </Helmet>
      
      <HeroSection />
      <ServicesSection />
      <ExpertiseSection />
      <StackSection />
      <SolutionsSection />
      <ProcessSection />
      <WorkSection />
      <TechMarquee />
      <FeedbackSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default Home;

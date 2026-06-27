import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/sections/HeroSection';
import ExpertiseSection from '../components/sections/ExpertiseSection';
import ProcessSection from '../components/sections/ProcessSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>PixelCore Tech | Embedded Linux, Firmware & Full-Stack Solutions</title>
        <meta name="description" content="PixelCore Tech is a software engineering company specializing in embedded Linux, custom firmware, full-stack IT consulting, Android apps, and digital growth." />
      </Helmet>
      
      <HeroSection />
      <ExpertiseSection />
      <ProcessSection />
    </>
  );
};

export default Home;

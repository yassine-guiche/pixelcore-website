import React from 'react';
import { Helmet } from 'react-helmet-async';
import ExpertiseSection from '../components/sections/ExpertiseSection';
import StackSection from '../components/sections/StackSection';

const Expertise = () => {
  return (
    <>
      <Helmet>
        <title>Our Expertise | PixelCore Tech</title>
        <meta name="description" content="Discover our deep technical expertise across Embedded Linux, System Architecture, IoT, and high-performance applications." />
      </Helmet>
      
      <div style={{ paddingTop: '100px' }}>
        <ExpertiseSection />
      </div>
      <StackSection />
    </>
  );
};

export default Expertise;

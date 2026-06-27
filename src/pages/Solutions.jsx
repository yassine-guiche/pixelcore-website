import React from 'react';
import { Helmet } from 'react-helmet-async';
import SolutionsSection from '../components/sections/SolutionsSection';

const Solutions = () => {
  return (
    <>
      <Helmet>
        <title>Solutions | PixelCore Tech</title>
        <meta name="description" content="Explore our technical solutions tailored for modern businesses, from custom hardware integrations to cloud architectures." />
      </Helmet>
      
      <div style={{ paddingTop: '100px' }}>
        <SolutionsSection />
      </div>
    </>
  );
};

export default Solutions;

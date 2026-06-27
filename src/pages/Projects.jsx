import React from 'react';
import { Helmet } from 'react-helmet-async';
import WorkSection from '../components/sections/WorkSection';

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects & Case Studies | PixelCore Tech</title>
        <meta name="description" content="View our portfolio of technical case studies. From automated IoT gateways to high-performance e-commerce platforms and Android AOSP firmware." />
      </Helmet>
      
      <div style={{ paddingTop: '100px' }}>
        <WorkSection />
      </div>
    </>
  );
};

export default Projects;

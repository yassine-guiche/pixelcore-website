import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutSection from '../components/sections/AboutSection';
import FeedbackSection from '../components/sections/FeedbackSection';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | PixelCore Tech</title>
        <meta name="description" content="Learn about PixelCore Tech, our mission, our core philosophy, and read testimonials from our satisfied B2B clients worldwide." />
      </Helmet>
      
      <div style={{ paddingTop: '100px' }}>
        <AboutSection />
      </div>
      <FeedbackSection />
    </>
  );
};

export default About;

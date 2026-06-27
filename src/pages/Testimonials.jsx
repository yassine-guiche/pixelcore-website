import React from 'react';
import { Helmet } from 'react-helmet-async';
import FeedbackSection from '../components/sections/FeedbackSection';

const Testimonials = () => {
  return (
    <>
      <Helmet>
        <title>Testimonials & Feedback | PixelCore Tech</title>
        <meta name="description" content="Read testimonials from our satisfied B2B clients worldwide and see how PixelCore Tech has transformed their businesses." />
      </Helmet>
      
      <div style={{ paddingTop: '100px' }}>
        <FeedbackSection />
      </div>
    </>
  );
};

export default Testimonials;

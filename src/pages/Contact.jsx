import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactSection from '../components/sections/ContactSection';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | PixelCore Tech</title>
        <meta name="description" content="Get in touch with PixelCore Tech. Let's discuss your next big engineering project, IoT solution, or digital marketing campaign." />
      </Helmet>
      
      <div style={{ paddingTop: '100px' }}>
        <ContactSection />
      </div>
    </>
  );
};

export default Contact;

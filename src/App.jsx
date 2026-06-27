import React from 'react';
import Background from './components/layout/Background';
import Header from './components/layout/Header';
import ScrollProgress from './components/layout/ScrollProgress';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import ExpertiseSection from './components/sections/ExpertiseSection';
import SolutionsSection from './components/sections/SolutionsSection';
import ProcessSection from './components/sections/ProcessSection';
import WorkSection from './components/sections/WorkSection';
import FeedbackSection from './components/sections/FeedbackSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <ScrollProgress />
      <Background />
      <Header />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <ServicesSection />
        <ExpertiseSection />
        <SolutionsSection />
        <ProcessSection />
        <WorkSection />
        <FeedbackSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;

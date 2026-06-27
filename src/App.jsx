import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';

// Lazy load all page components for code-splitting
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Expertise = lazy(() => import('./pages/Expertise'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Projects = lazy(() => import('./pages/Projects'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

// A simple loading spinner/fallback while pages download
const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#030014' }}>
    <div style={{ color: '#00f0ff', fontFamily: 'monospace', fontSize: '1.2rem' }}>Loading system...</div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="services" element={<Services />} />
              <Route path="expertise" element={<Expertise />} />
              <Route path="solutions" element={<Solutions />} />
              <Route path="projects" element={<Projects />} />
              <Route path="testimonials" element={<Testimonials />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}

export default App;

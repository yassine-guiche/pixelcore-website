import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ContactSection.css';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Embedded Linux / Firmware',
    message: ''
  });

  const CONTACT_EMAIL = 'contact@pixelcore-tech.com';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    
    const formDataObj = new FormData();
    formDataObj.append("access_key", "63cde86e-e76a-497c-aea7-93374736c587");
    formDataObj.append("subject", `New Project Request - ${formData.projectType}`);
    formDataObj.append("from_name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("projectType", formData.projectType);
    formDataObj.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      });
      const data = await response.json();
      
      if (data.success) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', projectType: 'Embedded Linux / Firmware', message: '' });
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section shell" id="contact">
      <motion.div 
        className="contact-card"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="contact-copy">
          <p className="kicker">Start a project</p>
          <h2>Need firmware, a platform, or an Android app?</h2>
          <p>
            Send your project details and PixelCore Tech will help you choose the right technical path.
          </p>
          <div className="contact-tags">
            <span>Embedded Linux</span>
            <span>Firmware</span>
            <span>Full-stack</span>
            <span>Android</span>
            <span>Digital Growth</span>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{ marginTop: '24px', padding: '12px 16px', background: 'rgba(95, 184, 106, 0.1)', border: '1px solid rgba(95, 184, 106, 0.2)', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--brand-green)' }}
          >
            <strong>⚡ We typically respond within 24 hours</strong> to discuss your technical needs.
          </motion.div>
          <div style={{ marginTop: '30px', color: 'var(--text-secondary)' }}>
            <p style={{ margin: '5px 0' }}><strong>General:</strong> contact@pixelcore-tech.com</p>
            <p style={{ margin: '5px 0' }}><strong>Projects:</strong> projects@pixelcore-tech.com</p>
            <p style={{ margin: '5px 0' }}><strong>Marketing:</strong> marketing@pixelcore-tech.com</p>
            <p style={{ margin: '5px 0', marginTop: '15px' }}>Tunis, Tunisia — Working worldwide.</p>
          </div>
        </div>

        {isSuccess ? (
          <div className="contact-form" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '50px 30px', background: 'rgba(95, 184, 106, 0.03)', border: '1px solid var(--line-green)', borderRadius: '24px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--brand-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', boxShadow: '0 0 30px rgba(95, 184, 106, 0.3)' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#06141d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '12px', fontSize: '1.4rem' }}>Request Sent Successfully!</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Thank you for reaching out. We will review your project details and get back to you shortly.</p>
            <button className="btn secondary" onClick={() => setIsSuccess(false)}>Send another message</button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="input-group">
              Name
              <input 
                name="name" 
                type="text" 
                placeholder="Your name" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label className="input-group">
              Email
              <input 
                name="email" 
                type="email" 
                placeholder="you@company.com" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label className="input-group">
              Project type
              <select 
                name="projectType" 
                required
                value={formData.projectType}
                onChange={handleChange}
              >
                <option value="Embedded Linux / Firmware">Embedded Linux / Firmware</option>
                <option value="Yocto / Buildroot / OpenWrt">Yocto / Buildroot / OpenWrt</option>
                <option value="Full-Stack Web Platform">Full-Stack Web Platform</option>
                <option value="Android App">Android App</option>
                <option value="IT Consulting">IT Consulting</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Website / Landing Page">Website / Landing Page</option>
                <option value="Business Automation">Business Automation</option>
                <option value="Maintenance / Debugging">Maintenance / Debugging</option>
              </select>
            </label>
            <label className="input-group">
              Message
              <textarea 
                name="message" 
                rows="5" 
                placeholder="Tell us about your device, product, platform, or application..." 
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </label>
            
            {isError && (
              <div style={{ color: '#ff6b6b', background: 'rgba(255, 107, 107, 0.08)', padding: '14px', borderRadius: '12px', marginBottom: '20px', fontSize: '0.9rem', border: '1px solid rgba(255, 107, 107, 0.2)' }}>
                Something went wrong. Please try again or email us directly at contact@pixelcore-tech.com.
              </div>
            )}
            
            <button className="btn primary btn-submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending securely...' : 'Send project request'}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default ContactSection;

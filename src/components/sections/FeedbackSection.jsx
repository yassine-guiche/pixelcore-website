import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FeedbackSection.css';

const FeedbackSection = () => {
  const testimonials = [
    {
      quote: "Again, result oriented approach. Clear communicator, solution oriented and very negotiable gentleman. Would be my first choice for next similar projects!",
      author: "Verified Upwork Client",
      role: "Android 14 SBC modification"
    },
    {
      quote: "Great job done! Thank you Mohamed for taking your time to fix the issue which has been more prolonged than expected. You did absolute best you can. Very good communicator...",
      author: "Kirill B.",
      role: "Android image modification"
    },
    {
      quote: "Mohamed worked tirelessly to get the project done. Once done, Mohamed reached out to see if the work still was satisfactory, and made sure the job was what we really wanted.",
      author: "Isaac H.",
      role: "OpenWrt & Unifi Engineering"
    },
    {
      quote: "Mohammed is an amazing network IT person who really knows how to solve difficult issues.",
      author: "Shawn K.",
      role: "Travel Router Troubleshooting"
    },
    {
      quote: "Highly recommend this freelancer. He went above and beyond to get this project done successfully.",
      author: "Jeff S.",
      role: "Raspberry Pi Zero Programming"
    }
  ];

  const miniReviews = [
    "Fantastic would highly recommend went above and beyond well use him again",
    "Mohamed was great to work with!",
    "Great to work with. Mohamed was very prompt and understanding.",
    "Mohamed did realy great job. Finished the task very fast.",
    "Thanks. It's great"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="section shell feedback-section" id="feedback">
      <motion.div 
        className="feedback-left"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="kicker">Client feedback</p>
        <h2>Verified reviews from real embedded Linux and Android projects.</h2>
        <p>
          A track record of 5-star Upwork ratings across firmware, networking, and Android engagements.
        </p>
        <a className="btn secondary" href="https://www.upwork.com/freelancers/~0179adb964fb496742" target="_blank" rel="noreferrer">View Verified Upwork Profile</a>
      </motion.div>

      <div style={{ position: 'relative' }}>
        <AnimatePresence mode="wait">
          <motion.article 
            key={currentIndex}
            className="testimonial-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <div className="stars">★★★★★</div>
            <blockquote>"{testimonials[currentIndex].quote}"</blockquote>
            <footer>
              {testimonials[currentIndex].author} 
              <span>{testimonials[currentIndex].role}</span>
            </footer>
          </motion.article>
        </AnimatePresence>

        <div className="mini-review-grid">
          {miniReviews.map((review, idx) => (
            <motion.article 
              key={idx} 
              className="mini-review"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="stars">★★★★★</div>
              <p>{review}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;

import React from 'react';
import { motion } from 'framer-motion';
import './ContactSection.scss';
import ContactImage from '../../../assets/images/Landing/contact-image.webp';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="contact section-content">
      <div className="signal-container" aria-label="Signal icon with antenna emoji">
        <svg
          className="signal-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" fill="#22C55E" fillOpacity="0.2" className="signal-outer" />
          <circle cx="12" cy="12" r="4" fill="#22C55E" className="signal-inner" />
        </svg>
        <span className="signal-emoji">📍</span>
        <span className="signal-emoji">🎓</span>
      </div>

      <div className="contact-content">
        <div className="contact-grid">
          <div className="contact-text">
            <p>I'm open to new opportunities.</p>
            <p>Newcastle, NSW.</p>
            <h4>I've recently graduated <br /> Torrens University.</h4>
            <div className="social-links">
              <motion.a
                href="mailto:yo@kyleradcliffe.com.au"
                className="contact-link"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1, transition: { duration: 0.1, ease: 'linear' } }}
                animate={{ opacity: 0.7, transition: { duration: 0.1, ease: 'linear' } }}
              >
                yo@kyleradcliffe.com.au
              </motion.a>
                            <motion.a
                href="https://www.github.com/radz17"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1, transition: { duration: 0.1, ease: 'linear' } }}
                animate={{ opacity: 0.7, transition: { duration: 0.1, ease: 'linear' } }}
              >
                GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/kyle-radcliffe/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1, transition: { duration: 0.1, ease: 'linear' } }}
                animate={{ opacity: 0.7, transition: { duration: 0.1, ease: 'linear' } }}
              >
                LinkedIn
              </motion.a>
            </div>
          </div>
          <div className="contact-image">
            <img src={ContactImage} alt="Kyle Radcliffe" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
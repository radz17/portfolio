import React from 'react';
import { motion } from 'framer-motion';
import './IntroSection.scss';
import Sticky1 from '../../../assets/images/Landing/intro-sticky.webp';


const text = [
  "I'm a designer",
  "who builds.",
  "Concept to",
  "production",
  
];

const IntroSection: React.FC = () => {
  const h1Variants = {
    initial: { y: '2rem', opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="intro" className="intro" aria-label="Introduction section">
      <div className="sticky-container">
        <div className="sticky-image-container">
          <img src={Sticky1} alt="Sticky Note" loading="lazy" />
        </div>
      </div>
      <div className="intro-content">
        <svg className="wireframe-x" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="100" y2="100" stroke="#999" strokeWidth="0.8" />
          <line x1="100" y1="0" x2="0" y2="100" stroke="#999" strokeWidth="0.8" />
        </svg>
        <div className="intro-text">
          <motion.h1
            variants={h1Variants}
            initial="initial"
            animate="animate"
            viewport={{ once: true }}
          >
            
            {text.map((line, index) => (
              <div key={index}>
                {line}
                {index === text.length - 1 && (
                  <span className="animated-period">.</span>
                )}
                {index < text.length - 1 && <br />}
              </div>
            ))}
          </motion.h1>
        </div>
        
      </div>

      


    </section>
  );
};

export default IntroSection;
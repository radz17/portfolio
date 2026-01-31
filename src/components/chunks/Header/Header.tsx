import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import Hamburger from '../../basics/Hamburger/Hamburger';
import HeaderLogo from '../../basics/HeaderLogo/HeaderLogo';

import './Header.scss';

interface HeaderProps {
  onBack?: () => void;
  isCaseStudyView?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onBack, isCaseStudyView }) => {
  const [isOpen, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');
  const controls = useAnimation();

  const toggleMobileMenu = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (isOpen) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    const handleScrollPosition = () => {
      if (isCaseStudyView) return; // Skip scroll handling in CaseStudyView
      const sections = ['intro', 'work', 'values', 'about', 'contact'];
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          const sectionTop = top + scrollY;
          const sectionBottom = bottom + scrollY;

          if (scrollY + windowHeight / 2 >= sectionTop && scrollY + windowHeight / 2 < sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollPosition);
    handleScrollPosition();
    return () => window.removeEventListener('scroll', handleScrollPosition);
  }, [isCaseStudyView]);

  const navVariants = {
    open: { opacity: 1, transition: { duration: 0.15, ease: 'easeOut' } },
    closed: { opacity: 0, transition: { duration: 0.15, ease: 'easeIn' } },
  };

  const linkVariants = {
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.15, delay: i * 0.05 },
    }),
    closed: (i: number) => ({
      opacity: 0,
      y: -20,
      transition: { duration: 0.15, delay: (4 - i) * 0.05 },
    }),
  };

  const handleScroll = async (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY;
      await controls.start({
        y: [window.scrollY, y],
        transition: { duration: 0, ease: [0.25, 0.1, 0.25, 1] },
      });
      window.scrollTo({ top: y });
      setActiveSection(sectionId);
    }
    if (isOpen) {
      toggleMobileMenu();
    }
  };

  const handleLogoClick = async () => {
    if (isCaseStudyView && onBack) {
      onBack(); // Exit CaseStudyView
      setTimeout(() => {
        handleScroll('intro'); // Scroll to intro after state update
      }, 100);
    } else {
      handleScroll('intro');
    }
  };

  return (
    <header className="header">
      
      <HeaderLogo onClick={handleLogoClick} />
      
      <Hamburger isOpen={isOpen} onClick={toggleMobileMenu} />
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="mobile-nav"
            initial="closed"
            animate="open"
            exit="closed"
            variants={navVariants}
          >
            <div className="menu-links">
              {['Intro', 'Work', 'Values', 'About', 'Contact'].map((text, index) => (
                <motion.div
                  key={text}
                  custom={index}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={linkVariants}
                >
                  <motion.a
                    href={`#${text.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(text.toLowerCase());
                    }}
                    className={activeSection === text.toLowerCase() ? 'active' : ''}
                    initial={{ opacity: activeSection === text.toLowerCase() ? 1 : 0.5 }}
                    whileHover={{ opacity: 1, transition: { duration: 0.1, ease: 'linear' } }}
                    animate={{ opacity: activeSection === text.toLowerCase() ? 1 : 0.5, transition: { duration: 0.1, ease: 'linear' } }}
                  >
                    {text}
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
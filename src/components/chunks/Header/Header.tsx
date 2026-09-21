import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [resumeClicked, setResumeClicked] = useState(false);
  const rafRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleMobileMenu = () => {
    setOpen(!isOpen);
  };

  const handleResumeClick = () => {
    setResumeClicked(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => setResumeClicked(false), 1000);
  };

  useEffect(() => () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  }, []);

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
    const detectSection = () => {
      if (isCaseStudyView) return;
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

    const handleScrollPosition = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        detectSection();
        rafRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScrollPosition);
    detectSection();
    return () => {
      window.removeEventListener('scroll', handleScrollPosition);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
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

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y });
      setActiveSection(sectionId);
    }
    if (isOpen) {
      toggleMobileMenu();
    }
  };

  const handleLogoClick = () => {
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
              <motion.div
                custom={5}
                initial="closed"
                animate="open"
                exit="closed"
                variants={linkVariants}
                className="resume-item"
              >
                <motion.a
                  href="/Kyle_Radcliffe_Resume.pdf"
                  download="Kyle_Radcliffe_Resume.pdf"
                  onClick={handleResumeClick}
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1, transition: { duration: 0.1, ease: 'linear' } }}
                  animate={{ opacity: resumeClicked ? 1 : 0.5, transition: { duration: resumeClicked ? 0.1 : 0.4, ease: 'linear' } }}
                >
                  Resume
                </motion.a>
                <AnimatePresence>
                  {resumeClicked && (
                    <motion.span
                      className="resume-flash"
                      aria-hidden="true"
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0, transition: { duration: 0.12, ease: 'easeOut' } }}
                      exit={{ opacity: 0, x: -12, transition: { duration: 0.15, ease: 'easeIn' } }}
                    >
                      😎
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
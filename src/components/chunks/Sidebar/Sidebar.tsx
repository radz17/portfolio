import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Sidebar.scss';


interface SidebarProps {
  resetCaseStudy: () => void;
  isCaseStudyOpen: boolean;
}

const SidebarNav: React.FC<SidebarProps> = ({ resetCaseStudy, isCaseStudyOpen }) => {
  const [activeSection, setActiveSection] = useState('intro');
  const rafRef = useRef<number | null>(null);

  const detectActiveSection = () => {
    const sections = ['intro', 'work', 'values', 'about', 'contact'];
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    let newActiveSection = 'intro';
    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const { top, bottom } = section.getBoundingClientRect();
        const sectionTop = top + scrollY;
        const sectionBottom = bottom + scrollY;
        if (scrollY + windowHeight / 2 >= sectionTop && scrollY + windowHeight / 2 < sectionBottom) {
          newActiveSection = sectionId;
          break;
        }
      }
    }
    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        detectActiveSection();
        rafRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll);
    detectActiveSection();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isCaseStudyOpen) {
      requestAnimationFrame(detectActiveSection);
    }
  }, [isCaseStudyOpen]);

  const handleScroll = (sectionId: string) => {
    resetCaseStudy();

    const scrollToSection = () => {
      const section = document.getElementById(sectionId);
      if (section) {
        const y = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: y, behavior: 'smooth' });
        setActiveSection(sectionId);
      } else if (sectionId === 'intro') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    };

    // If the section is already in the DOM (portfolio visible), scroll immediately.
    // Otherwise wait for the AnimatePresence exit animation before the portfolio mounts.
    if (document.getElementById(sectionId) || sectionId === 'intro') {
      scrollToSection();
    } else {
      setTimeout(scrollToSection, 250);
    }
  };

  return (
    <nav className="sidebar-nav">
      <ul>
        {['Intro', 'Work', 'Values', 'About', 'Contact'].map((text) => (
          <li key={text}>
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
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNav;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Sidebar.scss';


interface SidebarProps {
  resetCaseStudy: () => void;
}

const SidebarNav: React.FC<SidebarProps> = ({ resetCaseStudy }) => {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScrollPosition = () => {
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

    window.addEventListener('scroll', handleScrollPosition);
    handleScrollPosition();
    return () => window.removeEventListener('scroll', handleScrollPosition);
  }, []);

  const handleScroll = (sectionId: string) => {
    resetCaseStudy(); // Clear case study to show Portfolio view
    // Defer to allow Portfolio to re-render before the DOM element exists
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const y = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: y, behavior: 'smooth' });
        setActiveSection(sectionId);
      } else if (sectionId === 'intro') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    });
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
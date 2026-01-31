import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import MainLayout from './components/layouts/MainLayout';
import Portfolio from './components/views/Portfolio';
import CaseStudy from './components/chunks/CaseStudy/CaseStudy';
import { Project } from './data/projects';

const App: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  const handleCaseStudySelect = (project: Project | null) => {
    setSelectedCaseStudy(project);
    if (project) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const resetCaseStudy = () => {
    setSelectedCaseStudy(null);
    
    // Wait for Portfolio component to render before scrolling
    setTimeout(() => {
      const workSection = document.getElementById('work');
      if (workSection) {
        const y = workSection.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: y, behavior: 'smooth' });
        console.log('Scrolled to work section, y:', y);
      } else {
        console.warn('Work section not found');
      }
    },);
  };

  return (
    <>
      <MainLayout
        stuffInside={
          <AnimatePresence mode="wait">
            {selectedCaseStudy ? (
              <motion.div
                key="case-study"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <CaseStudy
                  project={selectedCaseStudy}
                  onBack={resetCaseStudy}
                />
              </motion.div>
            ) : (
              <motion.div
                key="portfolio"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Portfolio setSelectedCaseStudy={handleCaseStudySelect} />
              </motion.div>
            )}
          </AnimatePresence>
        }
        resetCaseStudy={resetCaseStudy}
        isCaseStudyOpen={!!selectedCaseStudy}
      />
      <Analytics />
    </>
  );
};

export default App;

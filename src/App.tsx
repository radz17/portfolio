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
    if (project) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
    setSelectedCaseStudy(project);
  };

  const resetCaseStudy = () => {
    setSelectedCaseStudy(null);
  };

  const handleBack = () => {
    setSelectedCaseStudy(null);
    // Exit is instant so portfolio mounts on next tick
    setTimeout(() => {
      const workSection = document.getElementById('work');
      if (workSection) {
        const y = workSection.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: y, behavior: 'instant' as ScrollBehavior });
      }
    }, 0);
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
              exit={{ opacity: 0, transition: { duration: 0 } }}
              transition={{ duration: 0.2 }}
            >
              <CaseStudy
                project={selectedCaseStudy}
                onBack={handleBack}
              />
            </motion.div>
          ) : (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0 } }}
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
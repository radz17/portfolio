import React, { useState, lazy, Suspense } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import MainLayout from './components/layouts/MainLayout';
import Portfolio from './components/views/Portfolio';
import { Project } from './data/projects';

const CaseStudy = lazy(() => import('./components/chunks/CaseStudy/CaseStudy'));
const ProjectSnapshot = lazy(() => import('./components/chunks/ProjectSnapshot/ProjectSnapshot'));

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
        selectedCaseStudy ? (
          <div key="case-study" className="view-fade">
            <Suspense fallback={null}>
              {selectedCaseStudy.displayType === 'snapshot' ? (
                <ProjectSnapshot
                  project={selectedCaseStudy}
                  onBack={handleBack}
                />
              ) : (
                <CaseStudy
                  project={selectedCaseStudy}
                  onBack={handleBack}
                />
              )}
            </Suspense>
          </div>
        ) : (
          <div key="portfolio" className="view-fade">
            <Portfolio setSelectedCaseStudy={handleCaseStudySelect} />
          </div>
        )
      }
      resetCaseStudy={resetCaseStudy}
      isCaseStudyOpen={!!selectedCaseStudy}
    />
    <Analytics />
    <SpeedInsights />
    </>
  );
};

export default App;
import React from 'react';
import IntroSection from '../chunks/IntroSection/IntroSection';
import WorkSection from '../chunks/WorkSection/WorkSection';
import ValuesSection from '../chunks/ValuesSection/ValuesSection';
import AboutSection from '../chunks/AboutSection/AboutSection';
import ContactSection from '../chunks/ContactSection/ContactSection';
import { Project } from '../../data/projects';
import './Portfolio.scss';

interface PortfolioProps {
  setSelectedCaseStudy: (project: Project | null) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ setSelectedCaseStudy }) => {
  return (
    <div className="portfolio">
      <IntroSection />
      <WorkSection setSelectedCaseStudy={setSelectedCaseStudy} />
      <ValuesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Portfolio;
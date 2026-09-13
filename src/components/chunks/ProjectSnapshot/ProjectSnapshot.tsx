import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectSnapshot.scss';
import { Project } from '../../../data/projects';

interface ProjectSnapshotProps {
  project: Project;
  onBack: () => void;
}

const ProjectSnapshot: React.FC<ProjectSnapshotProps> = ({ project, onBack }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const snapshot = project.snapshot;
  const cs = project.caseStudy;

  if (!snapshot) return null;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="case-study">
      <div className="case-study-content">

        {/* Back Button */}
        <button className="back-button" onClick={onBack}>
          ← Back to Portfolio
        </button>

        {/* Hero Section — same as CaseStudy */}
        <div className="case-study-hero">
          {cs.impact && (
            <p className="case-study-description">{cs.impact}</p>
          )}

          <div className="hero-info-grid">
            {cs.role.length > 0 && cs.role[0] !== '' && (
              <div className="hero-info-column">
                <h3 className="hero-info-title">My role</h3>
                {cs.role.map((roleItem, index) => (
                  <p key={index} className="hero-info-text">{roleItem}</p>
                ))}
              </div>
            )}
            {cs.outcomes.metrics.length > 0 && (
              <div className="hero-info-column">
                <h3 className="hero-info-title">Results</h3>
                {cs.outcomes.metrics.map((metric, index) => (
                  <p key={index} className="hero-info-text">{metric}</p>
                ))}
              </div>
            )}
          </div>

          {cs.heroImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${project.title} - ${index + 1}`}
              className="case-study-hero-image"
              loading="lazy"
            />
          ))}
        </div>

        {/* Context Section — same as CaseStudy */}
        {(cs.duration || cs.date || cs.team || cs.tools.length > 0) && (
          <div className="case-study-context">
            <div className="context-grid">
              {cs.duration && (
                <div className="context-item">
                  <p className="context-label">Duration</p>
                  <p className="context-value">{cs.duration}</p>
                </div>
              )}
              {cs.date && (
                <div className="context-item">
                  <p className="context-label">Date</p>
                  <p className="context-value">{cs.date}</p>
                </div>
              )}
              {cs.team && (
                <div className="context-item">
                  <p className="context-label">Team</p>
                  <p className="context-value">{cs.team}</p>
                </div>
              )}
              {cs.tools.length > 0 && cs.tools[0] !== '' && (
                <div className="context-item">
                  <p className="context-label">Tools</p>
                  <p className="context-value">{cs.tools.join(', ')}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Product Image */}
        {snapshot.tabletImage && (
          <div className="content-section">
            <div className="image-block">
              <img src={snapshot.tabletImage} alt={`${project.title} product`} loading="lazy" />
            </div>
          </div>
        )}

        {/* Accordion Sections */}
        <div className="snapshot-accordion">
          {snapshot.accordionItems.map((item, index) => (
            <div
              key={index}
              className={`accordion-item${openIndex === index ? ' accordion-item--open' : ''}`}
            >
              <button
                className="accordion-trigger"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <span className="accordion-title">{item.title}</span>
                <span className="accordion-icon">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="accordion-body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    <p>{item.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="case-study-cta">
          <button className="cta-button" onClick={onBack}>
            ← Back to Portfolio
          </button>
          {snapshot.url && (
            <button
              className="cta-button"
              onClick={() => window.open(snapshot.url, '_blank', 'noopener,noreferrer')}
            >
              Visit Live Project →
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectSnapshot;

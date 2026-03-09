import React, { useState } from 'react';
import Card from '../Card/Card';
import { Project, projects } from '../../../data/projects';
import './WorkSection.scss';

interface WorkSectionProps {
  setSelectedCaseStudy: (project: Project | null) => void;
}

const WorkSection: React.FC<WorkSectionProps> = ({ setSelectedCaseStudy }) => {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  return (
    <section id="work" className="work section-content" aria-label="Work portfolio section">
      <div className="work-content">
        <div className="work-grid">
          {projects.map((project) => {
            const comingSoon = project.comingSoon || !project?.caseStudy?.problem;
            return (
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl || '/assets/images/fallback-project.webp'}
                onClick={comingSoon ? undefined : () => setSelectedCaseStudy(project)}
                isHovered={hoveredCardId === project.id}
                onHoverChange={(hovered) => setHoveredCardId(hovered ? project.id : null)}
                hasAnyHovered={hoveredCardId !== null}
                comingSoon={comingSoon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
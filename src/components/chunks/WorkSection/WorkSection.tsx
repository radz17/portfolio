import React, { useState } from 'react';
import Card from '../Card/Card';
import { Project, projects } from '../../../data/projects';
import './WorkSection.scss';

interface WorkSectionProps {
  setSelectedCaseStudy: (project: Project | null) => void;
}

const WorkSection: React.FC<WorkSectionProps> = ({ setSelectedCaseStudy }) => {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const handleCardClick = (project: Project) => {
    if (project?.caseStudy?.images?.every((img) => img)) {
      setSelectedCaseStudy(project);
    } else {
      console.error(`Invalid case study data for project: ${project.title}`);
    }
  };

  return (
    <section id="work" className="work section-content" aria-label="Work portfolio section">
      <div className="work-content">
        <div className="work-grid">
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl || '/assets/images/fallback-project.webp'}
              onClick={() => handleCardClick(project)}
              isHovered={hoveredCardId === project.id}
              onHoverChange={(hovered) => setHoveredCardId(hovered ? project.id : null)}
              hasAnyHovered={hoveredCardId !== null}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
// CaseStudy.tsx
import React from 'react';
import './CaseStudy.scss';
import { Project } from '../../../data/projects';

interface CaseStudyProps {
  project: Project;
  onBack: () => void;
}

const COMPLETE_CASE_STUDY_IDS = ['Telco', 'themeforge', 'cluera', 'mains'];

const CaseStudy: React.FC<CaseStudyProps> = ({ project, onBack }) => {
  const isComplete = COMPLETE_CASE_STUDY_IDS.includes(project.id);

  const ctaButtons = (
    <div className="case-study-cta">
      <button className="cta-button" onClick={onBack}>
        ← Back to Portfolio
      </button>
      {project.caseStudy.url && (
        <button
          className="cta-button"
          onClick={() => window.open(project.caseStudy.url, '_blank', 'noopener,noreferrer')}
        >
          View Live Project →
        </button>
      )}
    </div>
  );

  return (
    <section className="case-study">
      <div className="case-study-content">

        {/* Back Button */}
        <button className="back-button" onClick={onBack}>
          ← Back to Portfolio
        </button>

        {/* Hero Section */}
        <div className="case-study-hero">
          <p className="case-study-description">{project.caseStudy.impact}</p>

          <div className="hero-info-grid">
            {project.caseStudy.role.length > 0 && project.caseStudy.role[0] !== '' && (
              <div className="hero-info-column">
                <h3 className="hero-info-title">My role</h3>
                {project.caseStudy.role.map((roleItem, index) => (
                  <p key={index} className="hero-info-text">{roleItem}</p>
                ))}
              </div>
            )}
            <div className="hero-info-column">
              <h3 className="hero-info-title">Results</h3>
              {project.caseStudy.outcomes.metrics.map((metric, index) => (
                <p key={index} className="hero-info-text">{metric}</p>
              ))}
            </div>
          </div>

          {project.caseStudy.heroVideo ? (
            <video
              src={project.caseStudy.heroVideo}
              className="case-study-hero-video"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            project.caseStudy.heroImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${project.title} - ${index + 1}`}
                className="case-study-hero-image"
                loading="lazy"
              />
            ))
          )}
        </div>

        {/* Context Section */}
        {(project.caseStudy.duration || project.caseStudy.date || project.caseStudy.team || project.caseStudy.tools.length > 0) && (
          <div className="case-study-context">
            <div className="context-grid">
              {project.caseStudy.duration && (
                <div className="context-item">
                  <p className="context-label">Duration</p>
                  <p className="context-value">{project.caseStudy.duration}</p>
                </div>
              )}
              {project.caseStudy.date && (
                <div className="context-item">
                  <p className="context-label">Date</p>
                  <p className="context-value">{project.caseStudy.date}</p>
                </div>
              )}
              {project.caseStudy.team && (
                <div className="context-item">
                  <p className="context-label">Team</p>
                  <p className="context-value">{project.caseStudy.team}</p>
                </div>
              )}
              {project.caseStudy.tools.length > 0 && project.caseStudy.tools[0] !== '' && (
                <div className="context-item">
                  <p className="context-label">Tools</p>
                  <p className="context-value">{project.caseStudy.tools.join(', ')}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Problem Section */}
        {(project.caseStudy.problemTitle || project.caseStudy.problem) && (
          <div className="content-section">
            <p className="section-label">Problem</p>
            {project.caseStudy.problemTitle && (
              <h3 className="section-heading">{project.caseStudy.problemTitle}</h3>
            )}
            {project.caseStudy.problem && (
              <p className="section-text">{project.caseStudy.problem}</p>
            )}
            {project.caseStudy.problemImage && (
              <div className="image-block">
                <img src={project.caseStudy.problemImage} alt="Problem visualization" loading="lazy" />
              </div>
            )}
          </div>
        )}

        {/* Solution Section */}
        {(project.caseStudy.solution.solutionTitle || project.caseStudy.solution.content) && (
          <div className="content-section">
            <p className="section-label">Solution</p>
            {project.caseStudy.solution.solutionTitle && (
              <h3 className="section-heading">{project.caseStudy.solution.solutionTitle}</h3>
            )}
            {project.caseStudy.solution.content && (
              <p className="section-text">{project.caseStudy.solution.content}</p>
            )}

            {project.caseStudy.solutionImage && (
              <div className="image-block">
                <img src={project.caseStudy.solutionImage} alt="Solution visualization" loading="lazy" />
              </div>
            )}
          </div>
        )}

        {/* Project Mockup Images */}
        {project.caseStudy.projectWork && (project.caseStudy.projectWork.image1 || project.caseStudy.projectWork.image2 || project.caseStudy.projectWork.image3 || project.caseStudy.projectWork.image4) && (
          <div className="content-section">
            <p className="section-label">The Product</p>
            {project.caseStudy.projectWork.image1 && (
              <div className="image-block">
                <img src={project.caseStudy.projectWork.image1} alt={`${project.title} mockup`} loading="lazy" />
              </div>
            )}
            {project.caseStudy.projectWork.image2 && (
              <div className="image-block">
                <img src={project.caseStudy.projectWork.image2} alt={`${project.title} mockup`} loading="lazy" />
              </div>
            )}
            {project.caseStudy.projectWork.image3 && (
              <div className="image-block">
                <img src={project.caseStudy.projectWork.image3} alt={`${project.title} mockup`} loading="lazy" />
              </div>
            )}
            {project.caseStudy.projectWork.image4 && (
              <div className="image-block">
                <img src={project.caseStudy.projectWork.image4} alt={`${project.title} mockup`} loading="lazy" />
              </div>
            )}
          </div>
        )}

        {/* CTA Buttons — only shown here when the rest of the case study is still blurred out */}
        {!isComplete && ctaButtons}

        {/* Research and beyond — blurred with a WIP badge unless the case study is complete */}
        <div className={`case-study-wip${isComplete ? ' case-study-wip--complete' : ''}`}>
          {!isComplete && (
            <div className="wip-badge">
              <span>This case study is still a work in progress</span>
            </div>
          )}
          <div className="wip-blur-wrapper">
          <div className="case-study-wip-inner">

            {/* Research Section */}
            {(project.caseStudy.research.headingTitle || project.caseStudy.research.content) && (
              <div className="content-section">
                <p className="section-label">Research</p>
                {project.caseStudy.research.headingTitle && (
                  <h3 className="section-heading">{project.caseStudy.research.headingTitle}</h3>
                )}
                {project.caseStudy.research.content && (
                  <p className="section-text">{project.caseStudy.research.content}</p>
                )}
                {project.caseStudy.research.keyFindings && (
                  <div className="findings-list">
                    {project.caseStudy.research.keyFindings.map((finding, index) => (
                      <p key={index} className="finding-item">• {finding}</p>
                    ))}
                  </div>
                )}
                {project.caseStudy.researchWork && (
                  <>
                    {project.caseStudy.researchWork.image1 && (
                      <div className="image-block">
                        <img src={project.caseStudy.researchWork.image1} alt="Research work" loading="lazy" />
                        {project.caseStudy.researchWork.caption1 && (
                          <p className="image-caption">{project.caseStudy.researchWork.caption1}</p>
                        )}
                      </div>
                    )}
                    {project.caseStudy.researchWork.image2 && (
                      <div className="image-block">
                        <img src={project.caseStudy.researchWork.image2} alt="Research work" loading="lazy" />
                        {project.caseStudy.researchWork.caption2 && (
                          <p className="image-caption">{project.caseStudy.researchWork.caption2}</p>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            {/* Define Section */}
            {project.caseStudy.define && (
              <div className="content-section">
                <p className="section-label">Define</p>
                <h3 className="section-heading">{project.caseStudy.define.heading}</h3>
                {project.caseStudy.define.content.map((paragraph, index) => (
                  paragraph && <p key={index} className="section-text">{paragraph}</p>
                ))}
                {project.caseStudy.defineWork && (
                  <>
                    {project.caseStudy.defineWork.image1 && (
                      <div className="image-block">
                        <img src={project.caseStudy.defineWork.image1} alt="Define work" loading="lazy" />
                        {project.caseStudy.defineWork.caption1 && (
                          <p className="image-caption">{project.caseStudy.defineWork.caption1}</p>
                        )}
                      </div>
                    )}
                    {project.caseStudy.defineWork.image2 && (
                      <div className="image-block">
                        <img src={project.caseStudy.defineWork.image2} alt="Define work" loading="lazy" />
                        {project.caseStudy.defineWork.caption2 && (
                          <p className="image-caption">{project.caseStudy.defineWork.caption2}</p>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            {/* Insights Section */}
            {(project.caseStudy.insights.headingTitle || project.caseStudy.insights.content) && (
              <div className="content-section">
                <p className="section-label">Insights</p>
                {project.caseStudy.insights.headingTitle && (
                  <h3 className="section-heading">{project.caseStudy.insights.headingTitle}</h3>
                )}
                {project.caseStudy.insights.content && (
                  <p className="section-text">{project.caseStudy.insights.content}</p>
                )}
                <div className="insights-grid">
                  {project.caseStudy.insights.userNeeds && (
                    <div className="insights-list">
                      <p className="list-label">What users needed:</p>
                      {project.caseStudy.insights.userNeeds.map((need, index) => (
                        <p key={index} className="insight-item">• {need}</p>
                      ))}
                    </div>
                  )}
                  {project.caseStudy.insights.designPrinciples && (
                    <div className="insights-list">
                      <p className="list-label">Design principles:</p>
                      {project.caseStudy.insights.designPrinciples.map((principle, index) => (
                        <p key={index} className="insight-item">• {principle}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Design & Iteration Section */}
            {project.caseStudy.designIteration && (
              <div className="content-section">
                {project.caseStudy.designIteration.concept.heading && (
                  <div className="content-section">
                    <p className="section-label">Design & Iteration</p>
                    <h3 className="section-heading">{project.caseStudy.designIteration.concept.heading}</h3>
                    <p className="section-text">{project.caseStudy.designIteration.concept.content}</p>
                    {project.caseStudy.designIteration.concept.image && (
                      <div className="image-block">
                        <img src={project.caseStudy.designIteration.concept.image} alt="Initial concept" loading="lazy" />
                        {project.caseStudy.designIteration.concept.caption && (
                          <p className="image-caption">{project.caseStudy.designIteration.concept.caption}</p>
                        )}
                      </div>
                    )}
                  </div>
                )}
                {project.caseStudy.designIteration.prototype.heading && (
                  <div className="content-section">
                    <h3 className="section-heading">{project.caseStudy.designIteration.prototype.heading}</h3>
                    <p className="section-text">{project.caseStudy.designIteration.prototype.content}</p>
                    {project.caseStudy.designIteration.prototype.beforeImage && (
                      <div className="image-block">
                        <img src={project.caseStudy.designIteration.prototype.beforeImage} alt="Initial prototype" loading="lazy" />
                        {project.caseStudy.designIteration.prototype.beforeCaption && (
                          <p className="image-caption">{project.caseStudy.designIteration.prototype.beforeCaption}</p>
                        )}
                      </div>
                    )}
                    {project.caseStudy.designIteration.prototype.afterImage && (
                      <div className="image-block">
                        <img src={project.caseStudy.designIteration.prototype.afterImage} alt="Refined prototype" loading="lazy" />
                        {project.caseStudy.designIteration.prototype.afterCaption && (
                          <p className="image-caption">{project.caseStudy.designIteration.prototype.afterCaption}</p>
                        )}
                      </div>
                    )}
                  </div>
                )}
                {project.caseStudy.designIteration.abTesting.heading && (
                  <div className="content-section">
                    <h3 className="section-heading">{project.caseStudy.designIteration.abTesting.heading}</h3>
                    <p className="section-text">{project.caseStudy.designIteration.abTesting.content}</p>
                    {project.caseStudy.designIteration.abTesting.image && (
                      <div className="image-block">
                        <img src={project.caseStudy.designIteration.abTesting.image} alt="A/B testing results" loading="lazy" />
                        {project.caseStudy.designIteration.abTesting.caption && (
                          <p className="image-caption">{project.caseStudy.designIteration.abTesting.caption}</p>
                        )}
                      </div>
                    )}
                  </div>
                )}
                {project.caseStudy.designIteration.finalSolution.heading && (
                  <div className="content-section">
                    <h3 className="section-heading">{project.caseStudy.designIteration.finalSolution.heading}</h3>
                    <p className="section-text">{project.caseStudy.designIteration.finalSolution.content}</p>
                    {project.caseStudy.designIteration.finalSolution.screens &&
                      project.caseStudy.designIteration.finalSolution.screens.slice(0, 4).map((screen, index) => (
                        <div key={index} className="image-block">
                          <img src={screen} alt={`Final screen ${index + 1}`} loading="lazy" />
                          {project.caseStudy.designIteration?.finalSolution.captions?.[index] && (
                            <p className="image-caption">
                              {project.caseStudy.designIteration.finalSolution.captions[index]}
                            </p>
                          )}
                        </div>
                      ))}
                  </div>
                )}
              </div>
            )}

            {/* Reflection Section */}
            {(project.caseStudy.reflection.heading || project.caseStudy.reflection.content.length > 0) && (
              <div className="content-section">
                <p className="section-label">Reflection</p>
                {project.caseStudy.reflection.heading && (
                  <h3 className="section-heading">{project.caseStudy.reflection.heading}</h3>
                )}
                {project.caseStudy.reflection.content.map((paragraph, index) => (
                  paragraph && <p key={index} className="section-text">{paragraph}</p>
                ))}
              </div>
            )}

          </div>
          </div>{/* end wip-blur-wrapper */}
        </div>{/* end case-study-wip */}

        {/* CTA Buttons — shown at the end once the full case study is visible */}
        {isComplete && ctaButtons}
      </div>
    </section>
  );
};

export default CaseStudy;

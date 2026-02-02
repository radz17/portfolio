// CaseStudy.tsx
import React from 'react';
import './CaseStudy.scss';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  caseStudy: {
    impact: string;
    heroImages: string[];
    duration: string;
    date: string;
    role: string[];
    team: string;
    tools: string[];
    problemTitle: string;
    problem: string;
    problemImage?: string;
    solutionImage?: string;
    research: {
      content: string;
      headingTitle: string;
      keyFindings?: string[];
      researchMethods?: string[];
      images?: string[];
    };
    researchWork?: {
      image1?: string;
      image2?: string;
      image3?: string;
      image4?: string;
      caption1?: string;
      caption2?: string;
      caption3?: string;
      caption4?: string;
    };
    define?: {
      heading: string;
      content: string[];
    };
    defineWork?: {
      image1?: string;
      image2?: string;
      image3?: string;
      image4?: string;
      caption1?: string;
      caption2?: string;
      caption3?: string;
      caption4?: string;
    };
    insights: {
      content: string;
      headingTitle: string;
      userNeeds?: string[];
      designPrinciples?: string[];
      images?: string[];
    };
    designIteration?: {
      concept: {
        heading: string;
        content: string;
        image?: string;
        caption?: string;
      };
      prototype: {
        heading: string;
        content: string;
        beforeImage?: string;
        afterImage?: string;
        beforeCaption?: string;
        afterCaption?: string;
      };
      testingWork?: {
        image1?: string;
        image2?: string;
        image3?: string;
        image4?: string;
        caption1?: string;
        caption2?: string;
        caption3?: string;
        caption4?: string;
      };
      abTesting: {
        heading: string;
        content: string;
        image?: string;
        caption?: string;
      };
      finalSolution: {
        heading: string;
        content: string;
        screens?: string[];
        captions?: string[];
      };
    };
    solution: {
      solutionTitle: string;
      content: string;
      solutionImage?: string;
      keyFeatures?: string[];
      images?: string[];
    };
    outcomes: {
      metrics: string[];
      qualitative?: string[];
    };
    reflection: {
      heading: string;
      content: string[];
    };
    images: string[];
    url?: string;
  };
}

interface CaseStudyProps {
  project: Project;
  onBack: () => void;
}

// Helper function to detect if a file is a video
const isVideo = (filePath: string): boolean => {
  return filePath.endsWith('.mp4') || 
         filePath.endsWith('.webm') || 
         filePath.endsWith('.mov');
};

const CaseStudy: React.FC<CaseStudyProps> = ({ project, onBack }) => {
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

          {project.caseStudy.heroImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${project.title} - ${index + 1}`}
              className="case-study-hero-image"
              loading="lazy"
            />
          ))}
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
            <h2 className="section-label">Problem</h2>
            {project.caseStudy.problemTitle && (
              <h1 className="section-heading">{project.caseStudy.problemTitle}</h1>
            )}
            {project.caseStudy.problem && (
              <p className="section-text">{project.caseStudy.problem}</p>
            )}
            {project.caseStudy.problemImage && (
              <div className="image-block">
                {isVideo(project.caseStudy.problemImage) ? (
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="case-study-video"
                  >
                    <source src={project.caseStudy.problemImage} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={project.caseStudy.problemImage} alt="Problem visualization" loading="lazy" />
                )}
              </div>
            )}
          </div>
        )}

        {/* Solution Section */}
        {(project.caseStudy.solution.solutionTitle || project.caseStudy.solution.content) && (
          <div className="content-section">
            <h2 className="section-label">Solution</h2>
            {project.caseStudy.solution.solutionTitle && (
              <h1 className="section-heading">{project.caseStudy.solution.solutionTitle}</h1>
            )}
            {project.caseStudy.solution.content && (
              <p className="section-text">{project.caseStudy.solution.content}</p>
            )}
            
            {/* Main solution image/video */}
            {project.caseStudy.solutionImage && (
              <div className="image-block">
                {isVideo(project.caseStudy.solutionImage) ? (
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="case-study-video"
                  >
                    <source src={project.caseStudy.solutionImage} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={project.caseStudy.solutionImage} alt="Solution visualization" loading="lazy" />
                )}
              </div>
            )}

            {/* Additional solution images/videos array */}
            {project.caseStudy.solution.images && 
              project.caseStudy.solution.images.map((media, index) => (
                <div key={index} className="image-block">
                  {isVideo(media) ? (
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="case-study-video"
                    >
                      <source src={media} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img src={media} alt={`Solution ${index + 1}`} loading="lazy" />
                  )}
                </div>
              ))}
          </div>
        )}

        {/* Research Section */}
        {(project.caseStudy.research.headingTitle || project.caseStudy.research.content) && (
          <div className="content-section">
            <h2 className="section-label">Research</h2>
            {project.caseStudy.research.headingTitle && (
              <h1 className="section-heading">{project.caseStudy.research.headingTitle}</h1>
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
                    {isVideo(project.caseStudy.researchWork.image1) ? (
                      <video autoPlay loop muted playsInline className="case-study-video">
                        <source src={project.caseStudy.researchWork.image1} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={project.caseStudy.researchWork.image1} alt="Research work" loading="lazy" />
                    )}
                    {project.caseStudy.researchWork.caption1 && (
                      <p className="image-caption">{project.caseStudy.researchWork.caption1}</p>
                    )}
                  </div>
                )}
                {project.caseStudy.researchWork.image2 && (
                  <div className="image-block">
                    {isVideo(project.caseStudy.researchWork.image2) ? (
                      <video autoPlay loop muted playsInline className="case-study-video">
                        <source src={project.caseStudy.researchWork.image2} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={project.caseStudy.researchWork.image2} alt="Research work" loading="lazy" />
                    )}
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
            <h2 className="section-label">Define</h2>
            <h1 className="section-heading">{project.caseStudy.define.heading}</h1>
            {project.caseStudy.define.content.map((paragraph, index) => (
              paragraph && <p key={index} className="section-text">{paragraph}</p>
            ))}

            {project.caseStudy.defineWork && (
              <>
                {project.caseStudy.defineWork.image1 && (
                  <div className="image-block">
                    {isVideo(project.caseStudy.defineWork.image1) ? (
                      <video autoPlay loop muted playsInline className="case-study-video">
                        <source src={project.caseStudy.defineWork.image1} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={project.caseStudy.defineWork.image1} alt="Define work" loading="lazy" />
                    )}
                    {project.caseStudy.defineWork.caption1 && (
                      <p className="image-caption">{project.caseStudy.defineWork.caption1}</p>
                    )}
                  </div>
                )}
                {project.caseStudy.defineWork.image2 && (
                  <div className="image-block">
                    {isVideo(project.caseStudy.defineWork.image2) ? (
                      <video autoPlay loop muted playsInline className="case-study-video">
                        <source src={project.caseStudy.defineWork.image2} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={project.caseStudy.defineWork.image2} alt="Define work" loading="lazy" />
                    )}
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
            <h2 className="section-label">Insights</h2>
            {project.caseStudy.insights.headingTitle && (
              <h1 className="section-heading">{project.caseStudy.insights.headingTitle}</h1>
            )}
            {project.caseStudy.insights.content && (
              <p className="section-text">{project.caseStudy.insights.content}</p>
            )}

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
        )}

        {/* Design & Iteration Section */}
        {project.caseStudy.designIteration && (
          <div className="content-section">

            {/* Concept */}
            {project.caseStudy.designIteration.concept.heading && (
              <div className="content-section">
                <h2 className="section-label">Design & Iteration</h2>
                <h1 className="section-heading">{project.caseStudy.designIteration.concept.heading}</h1>
                <p className="section-text">{project.caseStudy.designIteration.concept.content}</p>
                {project.caseStudy.designIteration.concept.image && (
                  <div className="image-block">
                    {isVideo(project.caseStudy.designIteration.concept.image) ? (
                      <video autoPlay loop muted playsInline className="case-study-video">
                        <source src={project.caseStudy.designIteration.concept.image} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={project.caseStudy.designIteration.concept.image} alt="Initial concept" loading="lazy" />
                    )}
                    {project.caseStudy.designIteration.concept.caption && (
                      <p className="image-caption">{project.caseStudy.designIteration.concept.caption}</p>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Prototype */}
            {project.caseStudy.designIteration.prototype.heading && (
              <div className="content-section">
                <h1 className="section-heading">{project.caseStudy.designIteration.prototype.heading}</h1>
                <p className="section-text">{project.caseStudy.designIteration.prototype.content}</p>

                {project.caseStudy.designIteration.prototype.beforeImage && (
                  <div className="image-block">
                    {isVideo(project.caseStudy.designIteration.prototype.beforeImage) ? (
                      <video autoPlay loop muted playsInline className="case-study-video">
                        <source src={project.caseStudy.designIteration.prototype.beforeImage} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={project.caseStudy.designIteration.prototype.beforeImage} alt="Initial prototype" loading="lazy" />
                    )}
                    {project.caseStudy.designIteration.prototype.beforeCaption && (
                      <p className="image-caption">{project.caseStudy.designIteration.prototype.beforeCaption}</p>
                    )}
                  </div>
                )}

                {project.caseStudy.designIteration.prototype.afterImage && (
                  <div className="image-block">
                    {isVideo(project.caseStudy.designIteration.prototype.afterImage) ? (
                      <video autoPlay loop muted playsInline className="case-study-video">
                        <source src={project.caseStudy.designIteration.prototype.afterImage} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={project.caseStudy.designIteration.prototype.afterImage} alt="Refined prototype" loading="lazy" />
                    )}
                    {project.caseStudy.designIteration.prototype.afterCaption && (
                      <p className="image-caption">{project.caseStudy.designIteration.prototype.afterCaption}</p>
                    )}
                  </div>
                )}             
              </div>
            )}

            {/* A/B Testing */}
            {project.caseStudy.designIteration.abTesting.heading && (
              <div className="content-section">
                <h1 className="section-heading">{project.caseStudy.designIteration.abTesting.heading}</h1>
                <p className="section-text">{project.caseStudy.designIteration.abTesting.content}</p>
                {project.caseStudy.designIteration.abTesting.image && (
                  <div className="image-block">
                    {isVideo(project.caseStudy.designIteration.abTesting.image) ? (
                      <video autoPlay loop muted playsInline className="case-study-video">
                        <source src={project.caseStudy.designIteration.abTesting.image} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={project.caseStudy.designIteration.abTesting.image} alt="A/B testing results" loading="lazy" />
                    )}
                    {project.caseStudy.designIteration.abTesting.caption && (
                      <p className="image-caption">{project.caseStudy.designIteration.abTesting.caption}</p>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Final Solution */}
            {project.caseStudy.designIteration.finalSolution.heading && (
              <div className="content-section">
                <h1 className="section-heading">{project.caseStudy.designIteration.finalSolution.heading}</h1>
                <p className="section-text">{project.caseStudy.designIteration.finalSolution.content}</p>

                {project.caseStudy.designIteration.finalSolution.screens &&
                  project.caseStudy.designIteration.finalSolution.screens.slice(0, 4).map((screen, index) => (
                    <div key={index} className="image-block">
                      {isVideo(screen) ? (
                        <video autoPlay loop muted playsInline className="case-study-video">
                          <source src={screen} type="video/mp4" />
                        </video>
                      ) : (
                        <img src={screen} alt={`Final screen ${index + 1}`} loading="lazy" />
                      )}
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
            <h2 className="section-label">Reflection</h2>
            {project.caseStudy.reflection.heading && (
              <h1 className="section-heading">{project.caseStudy.reflection.heading}</h1>
            )}
            {project.caseStudy.reflection.content.map((paragraph, index) => (
              paragraph && <p key={index} className="section-text">{paragraph}</p>
            ))}
          </div>
        )}

        {/* CTA Buttons */}
        <div className="case-study-cta">
          <button className="cta-button" onClick={onBack}>
            ← Back to Portfolio
          </button>
          {project.caseStudy.url && (
            <button
              className="cta-button"
              onClick={() => window.open(project.caseStudy.url, '_blank', 'noopener,noreferrer')}
            >
              View Live Prototype →
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
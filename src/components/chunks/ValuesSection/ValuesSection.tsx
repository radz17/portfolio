import React from 'react';
import './ValuesSection.scss';
import Sticky1 from '../../../assets/images/Landing/to-do-sticky-1.webp';
import Sticky2 from '../../../assets/images/Landing/to-do-sticky-2.webp';

const ValuesSection: React.FC = () => {
  return (
    <section id="values" className="values section-content" aria-label="Values section">
      <div className="values-content">
        <h1>
          Grounded<br/>
          Human<br/>
          Visual<br/>
          Exact
        </h1>
        <div className="values-grid">
          <div className="values-item">
            <div className="sticky-image-container">
              <img src={Sticky1} alt="Sticky Note" loading="lazy" />
            </div>
          </div>
          <div className="values-item">
            <p>
              I'm a Product Designer who works across UX, UI and full-stack development. I've designed enterprise dashboards and shipped micro-SaaS products, taking ideas from research through to production. Before design, I spent over 10 years in the construction industry, working with and leading teams on multimillion-dollar projects. Building taught me that quality work means no shortcuts, and everything needs to hold up over time. After travelling through 24 countries, from Saigon's bustling markets to Edinburgh's rainy streets, I learned to put people at the centre of everything I make. Whether I'm exploring new technology or chasing down new challenges, my curiosity drives me to produce high-quality work with clarity and purpose. I'm here to design products that actually matter.
            </p>
          </div>
          <div className="values-item">
            <p>
              With a Bachelor's in UX & Web Design from Torrens University, I use tools like Figma and Adobe XD to create experiences based on research and testing. I know how to balance what people need with what projects demand, managing complexity while keeping quality high. The work you see within my portfolio is my attempt at making beautiful, functional things that help people. I'm only just getting started.
            </p>
          </div>
          <div className="values-item">
            <div className="sticky-image-container">
              <img src={Sticky2} alt="Sticky Note" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
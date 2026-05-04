import React, { useState, useEffect } from 'react';
import Header from '../chunks/Header/Header';
import Sidebar from '../chunks/Sidebar/Sidebar';
import VisitorCounter from '../chunks/VisitorCounter/VisitorCounter';
import '../../styles/main.scss';

interface MainLayoutProps {
  stuffInside: React.ReactNode;
  resetCaseStudy: () => void;
  isCaseStudyOpen: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ stuffInside, resetCaseStudy, isCaseStudyOpen }) => {
  const [showGrid, setShowGrid] = useState(false);
  const [theme, setTheme] = useState<string>(() => {
    try { return localStorage.getItem('theme') || 'dark'; } catch { return 'dark'; }
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1022);

  useEffect(() => {
    document.documentElement.className = `app ${showGrid ? 'dev-mode' : theme}`;
  }, [theme, showGrid]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1022);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => {
    if (showGrid) return;
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.className = `app ${newTheme}`;
    localStorage.setItem('theme', newTheme);
  };

  const columnCount = isMobile ? 6 : 12;

  return (
    <div className={`app ${showGrid ? 'dev-mode' : theme}`}>
      <div className={`pro-grid-overlay ${showGrid ? 'active' : ''}`}>
        <div className="grid-container">
          {Array.from({ length: columnCount }).map((_, i) => (
            <div key={i} className="grid-column">
              <span className="grid-column-number">{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
      <Header onBack={resetCaseStudy} isCaseStudyView={isCaseStudyOpen} />
      
      <div style={{ display: isCaseStudyOpen ? 'none' : undefined }}>
        <Sidebar resetCaseStudy={resetCaseStudy} isCaseStudyOpen={isCaseStudyOpen} />
      </div>
      <main>{stuffInside}</main>
      
      {/* Visitor Counter - positioned with the other fixed UI elements */}
      <div className="visitor-counter-wrapper">
        <VisitorCounter theme={showGrid ? 'dev-mode' : theme} />
      </div>
      
      <div className="dev-mode-button">
        <button
          className="grid-toggle"
          onClick={() => setShowGrid(!showGrid)}
        >
          {showGrid ? 'Pro Mode' : 'Dev Mode'}
        </button>
      </div>
      <div className="theme-toggle-button">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          disabled={showGrid}
        >
          {theme === 'light' ? (
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="5" fill="#1A1A1A" />
              <path
                d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                stroke="#1F2937"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
                fill="#FFFFFF"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default MainLayout;
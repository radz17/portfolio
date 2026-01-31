// VisitorCounter.tsx
import React, { useState, useEffect } from 'react';
import { ref, get, set } from 'firebase/database';
import { database } from '../../../firebase/config';
import './VisitorCounter.scss';

interface VisitorCounterProps {
  theme: string;
}

const VisitorCounter: React.FC<VisitorCounterProps> = ({ theme }) => {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      setScrollY(currentScrollY);
      
      // Once scrolled past threshold, stay hidden
      if (currentScrollY >= 100 && !hasScrolled) {
        setHasScrolled(true);
        // Set display: none after the fade transition completes (300ms)
        setTimeout(() => {
          setShouldHide(true);
        }, 300);
      }
    };
    
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  useEffect(() => {
    const initCounter = async () => {
      try {
        const localKey = 'visitor_counted_session';
        const alreadyCounted = sessionStorage.getItem(localKey);
        
        const visitorCountRef = ref(database, 'visitorCount');
        
        if (!alreadyCounted) {
          const snapshot = await get(visitorCountRef);
          const currentCount = snapshot.val() || 0;
          
          await set(visitorCountRef, currentCount + 1);
          sessionStorage.setItem(localKey, 'true');
          
          setCount(currentCount + 1);
        } else {
          const snapshot = await get(visitorCountRef);
          const currentCount = snapshot.val() || 0;
          setCount(currentCount);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching visitor count:', error);
        setLoading(false);
      }
    };

    initCounter();
  }, []);

  const formatCountWithBoxes = (num: number) => {
    const numStr = num.toLocaleString();
    const parts: React.ReactElement[] = [];
    
    // Random offsets for typewriter effect (consistent per digit)
    const offsets = [1, -1, 0.5, -0.5, 1.5, -1.5, 0, 0.5];
    
    numStr.split('').forEach((char, index) => {
      if (char === ',') {
        parts.push(
          <span key={`comma-${index}`} className="digit-comma">
            ,
          </span>
        );
      } else {
        const offset = offsets[index % offsets.length];
        parts.push(
          <span key={`digit-${index}`} className="digit-box">
            <span style={{ transform: `translateY(${offset}px)`, display: 'inline-block' }}>
              {char}
            </span>
          </span>
        );
      }
    });
    
    return parts;
  };

  // Calculate opacity based on scroll (fades out between 0-100px of scroll)
  // Once hasScrolled is true, it stays at 0
  const counterOpacity = hasScrolled ? 0 : Math.max(1 - (scrollY / 100), 0);

  // Don't render at all once shouldHide is true
  if (shouldHide) {
    return null;
  }

  return (
    <div 
      className={`visitor-counter ${theme}`}
      style={{ 
        opacity: counterOpacity,
        transition: 'opacity 0.3s ease-out'
      }}
    >
      <span className="visitor-label">Hello, visitor</span>
      <span className="visitor-count">
        {loading ? (
          <span className="digit-box">...</span>
        ) : (
          formatCountWithBoxes(count || 0)
        )}
      </span>
    </div>
  );
};

export default VisitorCounter;
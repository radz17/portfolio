import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const path01Variants = {
  open: { d: "M3 3L27 27" },
  closed: { d: "M0 11L30 11" },
};

const path02Variants = {
  open: { d: "M3 27L27 3" },
  moving: { d: "M0 20L30 20" },
  closed: { d: "M0 20L18 20" },
};

interface HamburgerProps {
  isOpen: boolean;
  onClick: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, onClick }) => {
  const path01Controls = useAnimation();
  const path02Controls = useAnimation();

  // Sync animations with isOpen prop
  useEffect(() => {
    if (isOpen) {
      path02Controls.start(path02Variants.moving).then(() => {
        path01Controls.start(path01Variants.open);
        path02Controls.start(path02Variants.open);
      });
    } else {
      path01Controls.start(path01Variants.closed).then(() => {
        path02Controls.start(path02Variants.moving).then(() => {
          path02Controls.start(path02Variants.closed);
        });
      });
    }
  }, [isOpen, path01Controls, path02Controls]);

  const handleClick = () => {
    onClick();
  };

  return (
    <button
      className={`hamburger ${isOpen ? 'open' : ''}`}
      onClick={handleClick}
      aria-label="Toggle mobile menu"
    >
      <svg width="30" height="30" viewBox="0 0 30 30">
        <motion.path
          {...path01Variants.closed}
          animate={path01Controls}
          transition={{ duration: 0.2 }}
          strokeWidth="3.5"
        />
        <motion.path
          {...path02Variants.closed}
          animate={path02Controls}
          transition={{ duration: 0.2 }}
          strokeWidth="3.5"
        />
      </svg>
    </button>
  );
};

export default Hamburger;
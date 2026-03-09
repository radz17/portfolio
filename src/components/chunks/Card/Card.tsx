import React from 'react';
import { motion } from 'framer-motion';
import './Card.scss';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick?: () => void;
  isHovered: boolean;
  onHoverChange: (hovered: boolean) => void;
  hasAnyHovered: boolean;
  comingSoon?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  onClick,
  isHovered,
  onHoverChange,
  hasAnyHovered,
  comingSoon,
}) => {
  return (
    <motion.button
      className={`card${comingSoon ? ' card--coming-soon' : ''}`}
      onClick={onClick}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
      aria-label={`View case study for ${title}${comingSoon ? ' (coming soon)' : ''}`}
      type="button"
      animate={{
        opacity: hasAnyHovered && !isHovered ? 0.75 : 1,
      }}
      transition={{ duration: 0.1 }}
    >
      <div className="card-image-wrapper">
        <motion.div
          className="image-container"
          animate={{ y: isHovered ? -2 : 0 }}
          transition={{ duration: 0.1, ease: 'easeOut' }}
        >
          <motion.img
            src={imageUrl}
            alt={`${title} project preview`}
            className="card-image"
            loading="lazy"
          />
        </motion.div>
        {comingSoon && (
          <span className="card-coming-soon-badge">Coming Soon</span>
        )}
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.button>
  );
};

export default Card;
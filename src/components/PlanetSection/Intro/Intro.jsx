import { motion } from 'framer-motion';
import React from 'react';
import { introContainerVariants } from '../../../constants/containerVariants';
import Icon from '../../Icon';
import './Intro.scss';

const Intro = ({ planetData, currentData, isChanging }) => {
  const introTextAnimation = isChanging ? { animation: 'textSwap 1500ms ease' } : null;
  return (
    <motion.div
      variants={introContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="intro__container">
      <h1 className="intro__title">{planetData.name}</h1>
      <p className="intro__text" aria-live="assertive" style={introTextAnimation}>
        {currentData.content}
      </p>
      <div className="source__container">
        <span>Source: </span>
        <a href={currentData.source} style={{ '--planetSectionColor': planetData.sectionColor }}>
          Wikipedia
          <Icon icon="source" size={12} color="hsl(240, 6%, 54%)" />
        </a>
      </div>
    </motion.div>
  );
};

export default Intro;

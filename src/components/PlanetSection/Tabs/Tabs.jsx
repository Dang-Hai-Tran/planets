import React from 'react';
import { motion } from 'framer-motion';
import { tabsContainerVariants } from '../../../constants/containerVariants';
import './Tabs.scss';

const Tabs = ({ planetData, handleClick, currentTab, windowWidth }) => {
  const tabStyle = {
    '--planetSectionColor': planetData.sectionColor,
  };
  return (
    <motion.div
      className="tabs__container"
      variants={tabsContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit">
      <button
        style={tabStyle}
        className={`tab ${currentTab === 'overview' ? 'isActive' : ''}`}
        data-type="overview"
        onClick={handleClick}>
        Overview
      </button>
      <button
        style={tabStyle}
        className={`tab ${currentTab === 'structure' ? 'isActive' : ''}`}
        data-type="structure"
        onClick={handleClick}>
        {windowWidth >= 768 ? 'Internal' : ''}Structure
      </button>
      <button
        style={tabStyle}
        className={`tab ${currentTab === 'geology' ? 'isActive' : ''}`}
        data-type="geology"
        onClick={handleClick}>
        Surface{windowWidth >= 768 ? 'Geology' : ''}
      </button>
    </motion.div>
  );
};

export default Tabs;

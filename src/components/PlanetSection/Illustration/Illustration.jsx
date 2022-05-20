import React from 'react';
import { illustrationContainerVariants } from '../../../constants/containerVariants';
import { motion } from 'framer-motion';
import './Illustation.scss';

const Illustration = ({ planetData, currentData, isChanging }) => {
  let imageStyle = {
    backgroundImage: `url(${currentData.image})`,
    '--mobileImgWidth': planetData.mobileImgWidth,
    '--tabletImgWidth': planetData.tabletImgWidth,
    '--desktopImgWidth': planetData.desktopImgWidth,
  };
  if (isChanging) {
    imageStyle = { ...imageStyle, animation: 'imageSwap 2000ms ease' };
  }

  const currentGeo = currentData.geo;
  const imageBeforeStyle = currentGeo && { backgroundImage: `url(${currentGeo})` };
  return (
    <motion.div
      className="illustration__container"
      variants={illustrationContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit">
      <div className="image-container" style={imageStyle}>
        <div className="image-before" style={imageBeforeStyle}></div>
      </div>
    </motion.div>
  );
};

export default Illustration;

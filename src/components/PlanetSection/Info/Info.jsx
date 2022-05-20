import React from 'react';
import { motion } from 'framer-motion';
import { infoContainerVariants } from '../../../constants/containerVariants';
import './Info.scss';

const Info = ({ planetData }) => {
  return (
    <motion.ul
      className="info__container"
      variants={infoContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit">
      <li className="info__item">
        <h4 className="info__item__heading">Rotation Time</h4>
        <p className="info__item__content">{planetData.rotation}</p>
      </li>
      <li className="info__item">
        <h4 className="info__item__heading">Revolution Time</h4>
        <p className="info__item__content">{planetData.revolution}</p>
      </li>
      <li className="info__item">
        <h4 className="info__item__heading">Radius</h4>
        <p className="info__item__content">{planetData.radius}</p>
      </li>
      <li className="info__item">
        <h4 className="info__item__heading">Average temp.</h4>
        <p className="info__item__content">{planetData.temperature}</p>
      </li>
    </motion.ul>
  );
};

export default Info;

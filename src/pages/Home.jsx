import React from 'react';
import { motion } from 'framer-motion';
import { planets } from '../constants/data';
import PlanetSwitch from '../components/PlanetSwitch/PlanetSwitch';
import './Home.scss';
import { asteroidsBackground } from '../constants/asteroidsBackground';

const Home = ({ activePlanet }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 6,
      rotate: '-40deg',
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { delay: 1, duration: 3 },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      rotate: '-10deg',
      transition: { duration: 1 },
    },
  };
  return (
    <motion.div className="home__container" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="sun"></div>
      {planets.map((planet) => (
        <PlanetSwitch planet={planet} key={`planet-${planet.id}`} activePlanet={activePlanet} />
      ))}
      <div className="asteroidBelt">
        <div className="asteroidBelt-before" style={{ boxShadow: asteroidsBackground }}></div>
      </div>
    </motion.div>
  );
};

export default Home;

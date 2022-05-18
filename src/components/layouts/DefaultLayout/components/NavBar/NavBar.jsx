import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavDesktop from './NavDesktop/NavDesktop';
import NavMobile from './NavMobile/NavMobile';
import './NavBar.scss';

const NavBar = (props) => {
  const { pathName, activePlanet, onHover } = props;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const tabletBreakpoint = 768;

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
  }, [windowWidth]);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 1.5, duration: 4 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <motion.header variants={containerVariants} animate="visible">
      <div className="container">
        <h1>
          <Link to="/">Planets</Link>
        </h1>
        {windowWidth >= tabletBreakpoint ? (
          <NavDesktop pathName={pathName} onHover={onHover} activePlanet={activePlanet} />
        ) : (
          <NavMobile windowWidth={windowWidth} />
        )}
      </div>
    </motion.header>
  );
};

export default NavBar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import './PlanetSwitch.scss';
import { useState } from 'react';

const PlanetSwitch = ({ planet, activePlanet }) => {
  const [isHover, setIsHover] = useState(false);
  const isActive = planet.path === activePlanet;

  return (
    <NavLink
      to={planet.path}
      className={`planet ${planet.name} ${isActive && 'isActive'}`}
      style={{ borderColor: isHover || isActive ? planet.sectionColor : 'rgba(102, 166, 229, 0.12)' }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}></NavLink>
  );
};

export default PlanetSwitch;

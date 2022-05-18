import React from 'react';
import { NavLink } from 'react-router-dom';
import { planets } from '../../../../../../constants/data';
import './NavDesktop.scss';

const NavDesktop = ({ pathName, activePlanet, onHover }) => {
  return (
    <nav className="navDesktop__container">
      <ul>
        {planets.map((planet) => (
          <li key={planet.id} className="navDesktop__item">
            <NavLink
              to={planet.path}
              className={planet.path === pathName || planet.path === activePlanet ? 'isActive' : ''}
              onMouseOver={() => onHover(planet.path)}
              onMouseLeave={() => onHover(false)}
              onFocus={() => onHover(planet.path)}
              onBlur={() => onHover(false)}>
              {planet.name}
              <div className="navDesktop__item-apter" style={{ backgroundColor: `${planet.color}` }}></div>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavDesktop;

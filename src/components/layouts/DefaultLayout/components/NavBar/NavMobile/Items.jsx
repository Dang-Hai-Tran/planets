import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { planets } from '../../../../../../constants/data';
import './Items.scss';
import Icon from '../Icon';

const Items = ({ restoreToDefault }) => {
  return (
    <>
      {planets.map((planet) => (
        <motion.li
          className="navMobile__item"
          key={planet.id}
          initial={{ x: '100vw' }}
          animate={{ x: '0vw' }}
          transition={{ ease: [0.06, 0.9, 1, 0.98], duration: 0.7, delay: `(${planet.id * 5 + 0.5})/100` }}>
          <NavLink to={planet.path} color={planet.color} onClick={restoreToDefault}>
            <div className="navMobile__item__before" style={{ backgroundColor: `${planet.color}` }}></div>
            {planet.name}
            <Icon icon="icon-chevron1" size={20} color="hsl(240, 6%, 54%)" className="navMobile__item__icon" />
          </NavLink>
        </motion.li>
      ))}
    </>
  );
};

export default Items;

import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import useToggleMenu from '../../../../../../utils/useToggleMenu';
import Items from './Items';
import './NavMobile.scss';

const NavMobile = ({ windowWidth }) => {
  const [handleToggle, restoreToDefault, isOpen, isExpanded, tabletBreakpoint] = useToggleMenu();
  useEffect(() => {
    if (windowWidth >= tabletBreakpoint) {
      restoreToDefault();
    } else {
      return;
    }
  }, [windowWidth, restoreToDefault, tabletBreakpoint]);
  return (
    <nav className="navMobile__container">
      <button
        className="navMobile__button"
        aria-label="Menu toggle"
        aria-expanded={isExpanded}
        aria-controls="nav-list"
        onClick={handleToggle}>
        <span className={`${isOpen ? 'rotate' : ''}`}></span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            id="nav-list"
            className="navMobile__list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'linear', duration: 0.3 }}
            exit={{ opacity: 0 }}>
            <Items restoreToDefault={restoreToDefault} />
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavMobile;

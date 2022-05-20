import { useState } from 'react';

const useToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpand, setIsExpand] = useState(false);
  const [isTransitioned, setIsTransitioned] = useState(true);
  let transitionDuration = 1500;
  let tableBreakpoint = 768;

  // Function to toggle showMenu() and closeMenu() depending on isOpen state. It doesn't run until isTransitioned is true
  const handleToggle = () => {
    if (!isTransitioned) return false;
    !isOpen ? showMenu() : closeMenu();
  };
  // Function to open menu
  const showMenu = () => {
    setIsOpen(true);
    setIsTransitioned(false);
    setIsExpand(true);
    setTimeout(() => {
      setIsTransitioned(true);
    }, transitionDuration);
  };
  // Function to close menu
  const closeMenu = () => {
    setIsTransitioned(false);
    setIsOpen(false);
    setIsExpand(false);
    setTimeout(() => {
      setIsTransitioned(true);
    }, transitionDuration);
  };
  // Function to restore all state to it default value
  const restoreToDefault = () => {
    setIsOpen(false);
    setIsExpand(false);
    setIsTransitioned(true);
  };
  return [handleToggle, restoreToDefault, isOpen, isExpand, tableBreakpoint];
};

export default useToggleMenu;

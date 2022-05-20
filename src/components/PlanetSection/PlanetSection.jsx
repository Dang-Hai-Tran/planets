import React, { useEffect, useState } from 'react';
import useDataChange from '../../utils/useDataChange';
import Illustration from './Illustration/Illustration';
import Info from './Info/Info';
import Intro from './Intro/Intro';
import './PlanetSection.scss';
import Tabs from './Tabs/Tabs';

const PlanetSection = ({ planetData }) => {
  const [handleClick, currentData, currentTab, isChanging] = useDataChange(planetData);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const checkWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', checkWindowWidth);
    return () => {
      window.removeEventListener('resize', checkWindowWidth);
    };
  }, []);

  return (
    <section className="planetSection">
      <div className="planetSection__container">
        <Tabs planetData={planetData} handleClick={handleClick} currentTab={currentTab} windowWidth={windowWidth} />
        <Illustration planetData={planetData} currentData={currentData} isChanging={isChanging} />
        <Intro planetData={planetData} currentData={currentData} isChanging={isChanging} />
        <Info planetData={planetData} />
      </div>
    </section>
  );
};

export default PlanetSection;

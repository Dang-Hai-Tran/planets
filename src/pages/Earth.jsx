import React from 'react';
import PlanetSection from '../components/PlanetSection/PlanetSection';
import { earth } from '../constants/data';

const Earth = () => {
  return <PlanetSection planetData={earth} />;
};

export default Earth;

import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import './DefaultLayout.scss';
import { starsBackground } from '../../../constants/starsBackground';

const DefaultLayout = ({ pathName, setActivePlanet, activePlanet }) => {
  return (
    <div className="defaultLayout__container">
      <div className="container-after" style={{ boxShadow: `${starsBackground}` }}></div>
      <NavBar pathName={pathName} onHover={setActivePlanet} activePlanet={activePlanet} />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;

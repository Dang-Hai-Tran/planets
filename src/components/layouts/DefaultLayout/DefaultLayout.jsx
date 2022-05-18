import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import './DefaultLayout.scss';

const DefaultLayout = () => {
  return (
    <div className="defaultLayout__container">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;

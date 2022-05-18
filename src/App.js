import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import DefaultLayout from './components/layouts/DefaultLayout/DefaultLayout';
import Home from './pages/Home';
import routes from './routes/routes';

function App() {
  const location = useLocation();
  const [activePlanet, setActivePlanet] = useState('/');

  return (
    <Routes location={location}>
      <Route
        path="/"
        element={
          <DefaultLayout pathName={location.pathname} setActivePlanet={setActivePlanet} activePlanet={activePlanet} />
        }>
        <Route index element={<Home activePlanet={activePlanet} />} />
        {routes.map((route, idx) => (
          <Route key={`route-${idx}`} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;

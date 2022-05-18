import { Route, Routes } from 'react-router-dom';
import './App.css';
import DefaultLayout from './components/layouts/DefaultLayout/DefaultLayout';
import Home from './pages/Home';
import routes from './routes/routes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        {routes.map((route, idx) => (
          <Route key={`route-${idx}`} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;

import { BrowserRouter, Link } from 'react-router-dom';
import './styles/App.css';
import React from 'react';
import AppRoutes from './Routes';

const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
          <nav>
            <Link to='/'>Meu feed</Link>
            <Link to='/most-viewed'>Mais vistos</Link>
          </nav>
          <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
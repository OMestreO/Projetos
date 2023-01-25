import { BrowserRouter, Link } from 'react-router-dom';

import './styles/App.css';

import AppRoutes from './Routes';

export default function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <nav>
          <Link to="/">Meu feed</Link>
          <Link to="/most-viewed">Mais vistos</Link>
        </nav>

        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

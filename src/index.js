import React from 'react';
import App from './components/app/App';
import { createRoot } from 'react-dom/client';

import './style/style.scss';

const container = document.getElementById('root');

createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);


import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './containers';
import reportWebVitals from './reportWebVitals';

import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();

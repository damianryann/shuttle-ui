import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './containers';
import reportWebVitals from './reportWebVitals';

import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/index.scss';

/**
 * This should come from an API - DR
 */
export const configData = {
  site: 'Shuttle UI'
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <App data={configData} />
  </StrictMode>
);

reportWebVitals();

import React, { FunctionComponent } from 'react';
import logo from '../../assets/logo.svg';

import { AsteroidBanner } from '../../components';

import cookieData from '../../utilities/cookieBanner.json';

import './App.scss';

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div className="App">
      <AsteroidBanner {...cookieData} />

      <header className="App-header bg-white text-secondary">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Check out the cookie banner!</p>
      </header>
    </div>
  );
};

export default App;

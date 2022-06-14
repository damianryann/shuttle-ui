import React, { FunctionComponent } from 'react';

import { AsteroidBanner, Logo } from '../../components';

import cookieData from '../../utilities/cookieBanner.json';

import './App.scss';

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div className="App">
      <AsteroidBanner
        {...cookieData}
        style={{ borderTop: '2px solid #707070' }}
      />

      <header className="App-header bg-white text-secondary">
        <div className="App-logo mt-4" aria-label="Megan Allen Fit">
          <Logo />
        </div>
      </header>
    </div>
  );
};

export default App;

import React, { FunctionComponent } from 'react';
import logo from '../../assets/logo.svg';

import { AsteroidBanner } from '../../components';
import './App.scss';

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  const legal =
    'We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.';

  return (
    <div className="App">
      <AsteroidBanner
        title="We use cookies!"
        legalStatement={legal}
        readMoreLink="Read More"
        buttonTitle="Accept All"
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;

import React, { FunctionComponent, useState } from 'react';
import classNames from 'clsx';

import { Navigation } from '../../elements';

import './App.scss';

const App: FunctionComponent<AppProps> = data => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div
      className={`body ${toggle ? 'body-pd' : undefined}`}
      id="body-pd"
    >
      <Navigation
        toggle={toggle}
        setToggle={setToggle}
        configuration={data}
      />
      <div
        className={classNames({
          'vh-h-100': true
        })}
      >
        <h1>Main Components</h1>
      </div>
    </div>
  );
};

export interface AppConfig {
  site: string;
}

export interface AppProps {
  data: AppConfig;
}

export default App;

import React, { FunctionComponent, useEffect, useState } from 'react';
import classNames from 'clsx';

import { Navigation } from '../../elements';

import './App.scss';
import axios from 'axios';

const App: FunctionComponent = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [appData, setData] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:8080/static/api/config.json')
      .then(response => {
        setData(response.data);
      });
  }, []);

  return (
    <div
      className={`body ${toggle ? 'body-pd' : undefined}`}
      id="body-pd"
    >
      <Navigation
        toggle={toggle}
        setToggle={setToggle}
        data={appData}
      />
      <div
        className={classNames({
          'vh-h-100': true
        })}
      >
        <main>Data to go here</main>
      </div>
    </div>
  );
};

export default App;

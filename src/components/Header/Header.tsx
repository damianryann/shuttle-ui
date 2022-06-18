import React, { FunctionComponent } from 'react';

import Slide from 'react-reveal/Slide';

import { Logo } from '../index';

const Header: FunctionComponent = () => {
  return (
    <Slide top>
      <header className="App-header bg-white text-secondary position-sticky top-0 border-bottom border-2 border-primary">
        <div className="App-logo py-4" aria-label="Megan Allen Fit">
          <Logo />
        </div>
      </header>
    </Slide>
  );
};

export default Header;

import React, { FunctionComponent } from 'react';

import './AsteroidBanner.scss';

interface AsteroidProps {
  props: any;
}

const AsteroidBanner: FunctionComponent<AsteroidProps> = ({ props }) => {
  return (
    <div className="asteroid container-fluid position-absolute bottom-0 bg-white p-4">
      {props}
    </div>
  );
};

export default AsteroidBanner;

import React, { FunctionComponent, Fragment } from 'react';

import classNames from 'clsx';
import { AppProps } from '../../containers/App/App';

const Navigation: FunctionComponent<NavigationProps> = ({
  toggle,
  setToggle,
  configuration
}) => {
  const { data } = configuration;
  const { site } = data;

  return (
    <Fragment>
      <header
        className={classNames({
          header: true,
          'body-pd': toggle
        })}
        id="shuttle-header"
      >
        <div
          className="header-toggle"
          onClick={() => setToggle(!toggle)}
        >
          <i
            className={`${
              !toggle ? 'bi-list' : 'bi-x'
            } text-dark fs-2`}
          />
        </div>
      </header>
      <div
        className={classNames({
          'left-nav ': true,
          show: toggle
        })}
        id="shuttle-left-nav"
      >
        <nav className="nav">
          <div>
            <a href="/#" className="nav-logo">
              <span className="nav-logo-name">{site}</span>
            </a>
            <div className="nav-list">
              <a href="/#" className="nav-link active">
                <i className="bi-house text-white fs-4" />
                <span className="nav-name">Dashboard</span>
              </a>
              <a href="/#" className="nav-link">
                <i className="bi-person-gear text-white fs-4" />
                <span className="nav-name">Users Management</span>
              </a>
              <a href="/#" className="nav-link">
                <i className="bi-diagram-3 text-white fs-4" />
                <span className="nav-name">Pages</span>
              </a>
              <a href="/#" className="nav-link">
                <i className="bi-collection-play text-white fs-4" />
                <span className="nav-name">Media</span>
              </a>
              <a href="/#" className="nav-link">
                <i className="bi-graph-up text-white fs-4" />
                <span className="nav-name">Analytics</span>
              </a>
              <a href="/#" className="nav-link">
                <i className="bi-gear text-white fs-4" />
                <span className="nav-name">Settings</span>
              </a>
            </div>
          </div>
          <a href="/#" className="nav-link">
            <i className="bi-box-arrow-in-right text-white fs-4" />
            <span className="nav-name">Log Out</span>
          </a>
        </nav>
      </div>
    </Fragment>
  );
};

export interface NavigationProps {
  toggle: boolean;
  setToggle: Function;
  configuration: AppProps;
}

export default Navigation;

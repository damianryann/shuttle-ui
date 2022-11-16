import React, { FunctionComponent, Fragment } from 'react';

import classNames from 'clsx';

import './Navigation.scss';

const Navigation: FunctionComponent<NavigationProps> = ({
  toggle,
  setToggle,
  data
}) => {
  const { siteName } = data;

  return (
    <Fragment>
      <header
        className={classNames({
          header: true,
          'body-pd': toggle,
          'py-2': true
        })}
        id="shuttle-header"
      >
        <button
          type="button"
          className="btn header-toggle"
          onClick={() => setToggle(!toggle)}
        >
          <i
            className={`${
              !toggle ? 'bi-list' : 'bi-x'
            } text-dark fs-2`}
          />
        </button>
        <h1>Page Title</h1>
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
              <span className="nav-logo-name">{siteName}</span>
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
  data: any;
}

export default Navigation;

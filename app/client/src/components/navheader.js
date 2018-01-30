import React from 'react';
// import PropTypes from 'prop-types';
import '../css/navheader.css';

const NavHeader = props => (
  <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container-fluid">
      <h1 className="mx-auto" href="/">SuiteThirtyTwo</h1>
      <div className="d-flex justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link">+ New Contract</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);


module.exports = NavHeader;

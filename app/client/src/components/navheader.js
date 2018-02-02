import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import '../css/navheader.css';

const NavHeader = props => (
  <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container-fluid">
      <h1 className="mx-auto" href="/">SuiteThirtyTwo</h1>
      <div className="d-flex justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/add_contractee">+ New Contract</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);


module.exports = NavHeader;

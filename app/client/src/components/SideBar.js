import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import '../css/sidebar.css';

const SideBar = props => (
  <div className="sidebar">
    <Logo />
    <hr />
  </div>
);

module.exports = SideBar;

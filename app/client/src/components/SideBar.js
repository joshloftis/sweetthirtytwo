import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import '../css/sidebar.css';

const SideBar = props => (
  <div className="sidebar">
    <Logo
      name={props.name}
      logo={props.logo}
    />
    <hr />
  </div>
);

SideBar.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string,
};

module.exports = SideBar;

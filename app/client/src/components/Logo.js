import React from 'react';
import PropTypes from 'prop-types';
import '../css/logo.css';

const Logo = props => (
  <div>
    <div className="mx-auto logo-div">
      <img
        className="logo"
        src={props.logo}
        alt="Logo"
      />
    </div>
    <h4 className="text-center business-name">{props.name}</h4>
  </div>
);

Logo.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string.isRequired,
};

module.exports = Logo;

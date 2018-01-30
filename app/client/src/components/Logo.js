import React from 'react';
import PropTypes from 'prop-types';
import '../css/logo.css';

const Logo = props => (
  <div>
    <div className="mx-auto logo-div">
      <img src="http://www.freeiconspng.com/uploads/tooth-icon-16.png" alt="Logo" />
    </div>
    <h4 className="text-center">Mr. Handy's Orthodontist</h4>
  </div>
);

module.exports = Logo;

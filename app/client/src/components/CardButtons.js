import React from 'react';
// import PropTypes from 'prop-types';
import '../css/cardbuttons.css';

const CardButtons = props => (
  <div className="mx-auto">
    <button className="contract-button" >Review</button>
    <button className="contract-button" >Send</button>
  </div>
);

module.exports = CardButtons;

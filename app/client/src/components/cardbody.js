import React from 'react';
import PropTypes from 'prop-types';
import CardButtons from './CardButtons';
import '../css/cardbody.css';

const CardBody = props => (
  <div className="cardBody">
    <div>
      <h3 className="contractee-name text-center">Daenyrs Targarean</h3>
      <h4 className="total text-center">Total Cost</h4>
      <h4 className="total-cost text-center">$4000</h4>
    </div>
    <div>
      <CardButtons />
    </div>
  </div>
);

module.exports = CardBody;

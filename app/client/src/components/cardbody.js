import React from 'react';
import PropTypes from 'prop-types';
import CardButtons from './CardButtons';
import '../css/cardbody.css';
import { formatPrice } from '../helpers';

const CardBody = props => (
  <div className="cardBody fade-in">
    <div>
      <h3 className="contractee-name text-center">{props.first_name} {props.last_name}</h3>
      <h4 className="total text-center">Total Cost</h4>
      <h4 className="total-cost text-center">{formatPrice(props.total)}</h4>
    </div>
    <div>
      <CardButtons />
    </div>
  </div>
);

CardBody.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

module.exports = CardBody;

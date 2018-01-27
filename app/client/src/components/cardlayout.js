import React from 'react';
import PropTypes from 'prop-types';
import CardBody from './cardbody';


import '../css/cardbody.css';

const Cardlayout = props => (
  <CardBody />
);

Cardlayout.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Cardlayout;


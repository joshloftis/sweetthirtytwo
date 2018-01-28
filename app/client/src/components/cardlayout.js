import React from 'react';
import PropTypes from 'prop-types';
import CardBody from './cardbody';


import '../css/cardbody.css';

const Cardlayout = props => (
  <div className="grid">
    <div className="col">
  <CardBody />
    </div>
  </div>
);

Cardlayout.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Cardlayout;


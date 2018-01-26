import React from 'react';
import CardBody from './cardbody';
import CardHeader from './cardheader';

import '../css/cardbody.css';

const Cardlayout = props => 
  <div className="grid">
    <div className="col">
      <CardBody />
      <CardBody />
    </div>
    <div className="col">
      <CardBody />
      <CardBody />
    </div>
    <div className="col">
      <CardBody />
      <CardBody />
    </div>
    </div>
export default Cardlayout;

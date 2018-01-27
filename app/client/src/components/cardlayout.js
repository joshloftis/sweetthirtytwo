import React from 'react';
import CardBody from './cardbody';


import '../css/cardbody.css';

const Cardlayout = (props) => {
  if (props.data.loading) {
    console.log('loading');
  } else {
    console.log(props.data.getUser.firstName);
  }
  return (
    <div className="grid">
      <div className="col">
        <CardBody />
        <CardBody />
        <CardBody />
      </div>
      <div className="col">
        <CardBody />
        <CardBody />
        <CardBody />
      </div>
      <div className="col">
        <CardBody />
        <CardBody />
        <CardBody />
      </div>
      <div className="col">
        <CardBody />
        <CardBody />
        <CardBody />
      </div>
    </div>
  );
};
export default Cardlayout;

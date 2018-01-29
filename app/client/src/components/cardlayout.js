import React from 'react';
import PropTypes from 'prop-types';
import CardBody from './cardbody';


import '../css/cardbody.css';

const Cardlayout = ({ data: { loading, error, getUser } }) => {
  if (loading) {
    return <p>Fetching Data...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <ul>
      { console.log(getUser.business.contracts) }
      { getUser.business.contracts.map(contract => <CardBody key={contract._id} {...contract} />) }
    </ul>
  );
};

Cardlayout.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Cardlayout;


import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

const Card = (props) => {
  console.log(props);
  return (
    <div>
      <CardHeader />
      <CardBody
        first_name={props.first_name}
        last_name={props.last_name}
        total={props.paymentContract.total}
        contract_id={props._id}
      />
    </div>
  );
};

Card.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  total: PropTypes.number,
};

module.exports = Card;

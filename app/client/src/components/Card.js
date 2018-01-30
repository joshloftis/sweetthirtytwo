import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CardHeader />
        <CardBody />
      </div>
    );
  }
}

module.exports = Card;

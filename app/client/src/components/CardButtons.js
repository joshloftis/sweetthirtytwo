import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
// import PropTypes from 'prop-types';
import '../css/cardbuttons.css';

class CardButtons extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.props.mutate({
      variables: {
        contracteeId: this.props.contract_id.contract_id,
      },
    }).then((message) => {
      console.log(message);
      this.props.history.push('/suite32');
    }).catch(err => err);
  }

  render() {
    return (
      <div className="mx-auto">
        <button className="contract-button" >Review</button>
        <button className="contract-button" onClick={this.onClick}>Delete</button>
      </div>
    );
  }
}

const deleteAContract = gql`
  mutation deleteContract($contracteeId: String) {
    deleteContract(contracteeId: $contracteeId) {
      message
    }
  }
`;

module.exports = graphql(deleteAContract)(CardButtons);

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
      contracteeId: this.props.contract_id.contract_id,
    }).then(message => message)
      .catch(err => err);
  }

  render() {
    console.log(this.props.contract_id.contract_id);
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
      deleteMessage
    }
  }
`;

module.exports = graphql(deleteAContract)(CardButtons);

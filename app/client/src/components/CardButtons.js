import React from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
// import PropTypes from 'prop-types';
import '../css/cardbuttons.css';

class CardButtons extends React.Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(e) {
    e.preventDefault();
    this.props.mutate({
      variables: {
        contracteeId: this.props.contract_id.contract_id,
      },
      refetchQueries: [{
        query: gql`
        query GetUser {
          getUser {
            _id
            firstName
            lastName
            business {
              _id
              logo
              name
              contracts {
                _id
                first_name
                last_name
                email
                address
                completed
                status
                paymentContract {
                  total
                  fees
                  down_payment
                  insurance
                  range
                  monthly_payment
                  terms
                }
              }
            }
          }
        }`,
      }],
    }).then((message) => {
      console.log(message);
    }).catch(err => err);
  }

  render() {
    return (
      <div className="mx-auto">
        <Link to={`/update_contractee/${this.props.contract_id.contract_id}`}>
          <button className="contract-button">
            Review
          </button>
        </Link>
        <button className="contract-button" onClick={this.onDelete}>Delete</button>
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

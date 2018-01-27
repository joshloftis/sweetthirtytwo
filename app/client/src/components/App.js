import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Header from './navheader';
import Cardlayout from './cardlayout';
import Avatar from './avatar';
import '../css/app.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    console.log(this.props.data.getUser);
    return (
      <div className="gridhome">
        <Header />
        <Avatar />
        <Cardlayout />
      </div>
    );
  }
}

const GetUser = gql`
  query GetUser {
    getUser {
      _id
      firstName
      lastName
      business {
        _id
        name
        contracts {
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
  }
`;

export default graphql(GetUser)(App);

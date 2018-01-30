import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import NavHeader from './NavHeader';
import SideBar from './SideBar';
import Card from './Card';
import '../css/app.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    console.log(this.props.data.getUser);
    let cards = null;
    if (this.props.data.loading) {
      cards = <h3>Loading contracts...</h3>;
    } else {
      cards = this.props.data.getUser.business.contracts.map(contract => (
        <div className="col-4">
          <Card />
        </div>
      ));
    }

    return (
      <div>
        <NavHeader />
        <div className="row">
          <div className="sideBar col-3">
            <SideBar />
          </div>
          <div className="main-card-area col-9">
            <h3>Contracts</h3>
            <div className="row">
              {cards}
            </div>
          </div>
        </div>
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
  }
`;

export default graphql(GetUser)(App);

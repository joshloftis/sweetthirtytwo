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
    const token = localStorage.getItem('token');
    return (
      <div className="gridhome">
        <Header />
        <Avatar />
        <Cardlayout />
      </div>
    );
  }
}

const ContractsQuery = gql`
  query ContractsQuery {
    getBusiness {
      _id
      name
      contracts
    }
  }
`;

export default graphql(ContractsQuery)(App);

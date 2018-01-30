import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import '../css/login.css';
import Header from './navheader';
import ContractHeader from './contractheader';
import ContractHeaderTwo from './contractheadersecondary';
import Avatar from './avatar';
import '../css/app.css';


class Contract extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contractId: '',
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      address: '',
      dependency: '',
      totalPayment: '',
      totalFees: '',
      downPayment: '',
      insuranceCoverage: '',
      paymentRange: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  onClick(e) {
    e.preventDefault();
    this.props.mutate({
      variables: {
        contractid: this.state.contractid,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        emailaddress: this.state.emailaddress,
        phonenumber: this.state.phonenumber,
        address: this.state.address,
        dependency: this.state.dependency,
        role: 'client',
      },
    }).then((user) => {
      console.log('client added', user.data.contract);
    }).catch((error) => {
      console.log('No user added because of an error:', error);
    });
  }


  render() {
    return (
      <main  className="mainspace black-80">
        <Header />
        <Avatar />
        <form className="measure center" />
        <div>
        <ContractHeader />
          <form>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="firstname">First Name</label>
              <input
                type="text"
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                placeholder="First Name"
                name="firstname"
                value={this.state.firstname}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="lastname">Last Name</label>
              <input
                type="text"
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                placeholder="Last Name"
                name="lastname"
                value={this.state.lastname}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="emailaddress">Email</label>
              <input
                type="text"
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                placeholder="Email Address"
                name="emailaddress"
                value={this.state.emailaddress}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="phonenumber">Phone Number</label>
              <input
                type="text"
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                placeholder="Phone Number"
                name="phonenumber"
                value={this.state.phonenumber}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="address">Address</label>
              <input
                type="text"
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                placeholder="Address"
                name="address"
                value={this.state.address}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="dependency">Dependency</label>
              <input
                type="text"
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                placeholder="Dependency"
                name="dependency"
                value={this.state.dependency}
                onChange={this.handleInputChange}
                required
              />
            </div>
          </form>
        <ContractHeaderTwo />
        </div>
        <div className="">
          <input onClick={this.onClick} className="spacer b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Save" />
        </div>
        <div className="">
          <input onClick={this.onClick} className="spacer b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Save & Send" />
        </div>
      </main>
    );
  }
}

const AddNewClient = gql`
    mutation addclient($contractid: String, $firstname: String, $lastname: String, $emailaddress: String, $phonenumber: String, $address: String, $dependency: string) {
      addclient(contractid: $contractid, firstname: $firstname, lastname: $lastname, emailaddress: $emailaddress, phonenumber: $phonenumber, address: $address, dependency: $dependency) {
        _id
        contractid
        firstname
        lastname
        emailaddress
        phonenumber
        address
        dependency
      }
    }
  `;

Contract.propTypes = {
  mutate: PropTypes.func,
};


export default graphql(AddNewClient)(Contract);
